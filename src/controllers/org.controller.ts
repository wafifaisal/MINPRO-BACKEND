import { Request, Response } from "express";
import prisma from "../prisma";
import { genSalt, hash, compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import path from "path";
import fs from "fs";
import nodemailer from "nodemailer";
import handlebars from "handlebars";

export class OrganizerController {
  // Metode untuk registrasi organizer
  async registerOrg(req: Request, res: Response) {
    try {
      const { password, confirmPassword, organizer_name, email } = req.body;

      if (password !== confirmPassword)
        throw { message: "Passwords do not match!" };

      const existingOrganizer = await prisma.organizer.findFirst({
        where: { email },
      });
      if (existingOrganizer) throw { message: "Email has already been used" };

      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);

      const newOrganizer = await prisma.organizer.create({
        data: {
          organizer_name,
          email,
          password: hashPassword,
          avatar:
            "https://res.cloudinary.com/dkyco4yqp/image/upload/v1735131879/HYPETIX-removebg-preview_qxyuj5.png",
          isVerify: false,
        },
      });
      console.log("New Organizer Created:", newOrganizer);

      const payload = { id: newOrganizer.id };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "10m" });
      const link = `${process.env.BASE_URL_FE}/verify/${token}`;

      const templatePath = path.join(__dirname, "../templates/verifyUser.hbs");
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ firstName: organizer_name, link });

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
        subject: "Welcome to the Organizer Platform",
        html,
      });

      res.status(201).send({ message: "Organizer Registration Successful √" });
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  }

  // Metode untuk login organizer
  async loginOrg(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const organizer = await prisma.organizer.findFirst({
        where: { email },
      });

      if (!organizer) throw { message: "Account not found!" };
      if (!organizer.isVerify) throw { message: "Account is not verified!" };

      const isValidPass = await compare(password, organizer.password as string);
      if (!isValidPass) throw { message: "Incorrect Password" };

      const payload = { id: organizer.id };
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
            id: organizer.id,
            email: organizer.email,
            organizer_name: organizer.organizer_name,
            avatar: organizer.avatar,
          },
        });
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  }

  // Metode untuk verifikasi organizer
  async verifyOrg(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const verifiedOrganizer = verify(token, process.env.JWT_KEY!) as {
        id: string;
      };

      await prisma.organizer.update({
        data: { isVerify: true },
        where: { id: verifiedOrganizer.id },
      });

      res.status(200).send({ message: "Organizer Verification Successful √" });
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  }

  // Metode untuk mengambil data organizer berdasarkan id
  async getOrganizer(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const organizer = await prisma.organizer.findUnique({
        where: { id },
      });

      if (!organizer) {
        return res.status(404).send({ message: "Organizer not found" });
      }

      res.status(200).json(organizer);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
}
