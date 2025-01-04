import { Request, Response } from "express";
import prisma from "../prisma";
import { genSalt, hash, compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import path from "path";
import fs from "fs";
import nodemailer from "nodemailer";
import handlebars from "handlebars";
import { generateReferralCode } from "../utils/generateReffCode";

export class AuthController {
  // Method untuk registrasi pengguna
  async registerUser(req: Request, res: Response) {
    try {
      const { password, confirmPassword, firstName, lastName, email, ref_by } =
        req.body;

      if (password !== confirmPassword)
        throw { message: "Passwords do not match!" };

      const existingUser = await prisma.user.findFirst({ where: { email } });
      if (existingUser) throw { message: "Email has already been used" };

      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);
      const newUser = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashPassword,
          avatar: null,
          isVerify: false,
          ref_code: "",
          ref_by: null,
        },
      });

      const refCode = generateReferralCode(newUser.firstName, newUser.id);
      await prisma.user.update({
        where: { id: newUser.id },
        data: { ref_code: refCode },
      });

      if (ref_by) {
        const referrer = await prisma.user.findFirst({
          where: { ref_code: ref_by },
        });
        if (!referrer) throw { message: "Invalid referral code" };

        await prisma.user.update({
          where: { id: newUser.id },
          data: { ref_by: ref_by },
        });

        const pointExpiryDate = new Date();
        pointExpiryDate.setMonth(pointExpiryDate.getMonth() + 3);
        await prisma.userPoint.create({
          data: {
            userId: referrer.id,
            point: 10000,
            expiredAt: pointExpiryDate,
          },
        });

        const couponExpiryDate = new Date();
        couponExpiryDate.setMonth(couponExpiryDate.getMonth() + 3);
        await prisma.userCoupon.create({
          data: {
            userId: newUser.id,
            percentage: 10,
            expiredAt: couponExpiryDate,
          },
        });
      }

      const payload = { id: newUser.id };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "10m" });
      const link = `${process.env.BASE_URL_FE}/verify/${token}`;

      const templatePath = path.join(__dirname, "../templates/verifyUser.hbs");
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ firstName, link });

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Welcome to Blogger",
        html,
      });

      res.status(201).send({ message: "Registration Successful √" });
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  }

  // Method untuk login
  async loginUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      // Log email input
      console.log("Login email received:", email);

      // Cari user berdasarkan email
      const user = await prisma.user.findUnique({
        where: { email },
      });

      // Log hasil pencarian user
      console.log("User found:", user);

      if (!user) throw { message: "Account not found!" };
      if (!user.isVerify) throw { message: "Account is not verified!" };

      // Cek validitas password
      const isValidPassword = await compare(password, user.password);

      // Log validitas password
      console.log("Password valid:", isValidPassword);

      if (!isValidPassword) throw { message: "Invalid password" };

      // Buat token JWT
      const payload = { id: user.id };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });

      // Log token yang dihasilkan
      console.log("Generated token:", token);

      // Kirim respons tanpa cookie
      res.status(200).send({
        message: "Login Successful √",
        token, // Token dikirim dalam respons JSON
        data: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          avatar: user.avatar,
        },
      });
    } catch (err) {
      console.error("Error during login:", err);
      res.status(400).send(err);
    }
  }

  // Method untuk verifikasi pengguna
  async verifyUser(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const verifiedUser = verify(token, process.env.JWT_KEY!) as {
        id: string;
      };

      await prisma.user.update({
        data: { isVerify: true },
        where: { id: verifiedUser.id },
      });

      res.status(200).send({ message: "Verification Successful √" });
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  }
}
