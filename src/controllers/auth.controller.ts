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
<<<<<<< HEAD
  // Method untuk registrasi pengguna
=======
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
  async registerUser(req: Request, res: Response) {
    try {
      const { password, confirmPassword, firstName, lastName, email, ref_by } =
        req.body;
<<<<<<< HEAD

      if (password !== confirmPassword)
        throw { message: "Passwords do not match!" };

      const existingUser = await prisma.user.findFirst({ where: { email } });
=======
      if (password !== confirmPassword)
        throw { message: "Passwords do not match!" };

      const existingUser = await prisma.user.findFirst({
        where: { email },
      });
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
      if (existingUser) throw { message: "Email has already been used" };

      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);
<<<<<<< HEAD

=======
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
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
      console.log("New User Created:", newUser);

      const refCode = generateReferralCode(newUser.firstName, newUser.id);
      await prisma.user.update({
        where: { id: newUser.id },
        data: { ref_code: refCode },
      });
      console.log("Referral Code Updated:", refCode);

      if (ref_by) {
        console.log("Processing referral...");

        const referrer = await prisma.user.findFirst({
          where: { ref_code: ref_by },
        });
        if (!referrer) throw { message: "Invalid referral code" };

        await prisma.user.update({
          where: { id: newUser.id },
          data: { ref_by: ref_by },
        });

        console.log(
<<<<<<< HEAD
          `Referral code ${ref_by} linked to new user: ${newUser.id}`,
=======
          `Referral code ${ref_by} linked to new user: ${newUser.id}`
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
        );

        const pointExpiryDate = new Date();
        pointExpiryDate.setMonth(pointExpiryDate.getMonth() + 3);
        await prisma.userPoint.create({
          data: {
            userId: referrer.id,
            point: 10000,
            expiredAt: pointExpiryDate,
          },
        });

        console.log(
<<<<<<< HEAD
          `10,000 points added to referrer: ${referrer.id}, expires on ${pointExpiryDate}`,
=======
          `10,000 points added to referrer: ${referrer.id}, expires on ${pointExpiryDate}`
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
        );

        const couponExpiryDate = new Date();
        couponExpiryDate.setMonth(couponExpiryDate.getMonth() + 3);
        await prisma.userCoupon.create({
          data: {
            userId: newUser.id,
            percentage: 10,
            expiredAt: couponExpiryDate,
          },
        });

        console.log(
<<<<<<< HEAD
          `10% discount coupon added for new user: ${newUser.id}, expires on ${couponExpiryDate}`,
=======
          `10% discount coupon added for new user: ${newUser.id}, expires on ${couponExpiryDate}`
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
        );
      }

      const payload = { id: newUser.id };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "10m" });
      const link = `${process.env.BASE_URL_FE}/verify/${token}`;

<<<<<<< HEAD
      const templatePath = path.join(__dirname, "../templates/verifyUser.hbs");
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ firstName, link });
      const nodemailer = require('nodemailer');
=======
      const templatePath = path.join(__dirname, "../templates/verify.hbs");
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ firstName, link });

>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
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

<<<<<<< HEAD
  // Method untuk login
  async loginUser(req: Request, res: Response) {
    try {
      const { data, password } = req.body;
=======
  async loginUser(req: Request, res: Response) {
    try {
      const { data, password } = req.body;
      console.log(req.body);
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
      const user = await prisma.user.findFirst({
        where: {
          OR: [{ email: data }, { password: data }],
        },
      });

      if (!user) throw { message: "Account not found!" };
      if (!user.isVerify) throw { message: "Account is not verified!" };

      const isValidPass = await compare(password, user.password);
      if (!isValidPass) throw { message: "Incorrect Password" };

      const payload = { id: user.id };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });

      res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          maxAge: 24 * 3600 * 1000,
          path: "/",
          secure: process.env.NODE_ENV === "production",
        })
        .send({
          message: "Login Successful √",
          token,
          data: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            avatar: user.avatar,
          },
        });
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  }

<<<<<<< HEAD
  // Method untuk verifikasi pengguna
=======
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
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
