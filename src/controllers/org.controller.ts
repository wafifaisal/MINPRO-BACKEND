import { Request, Response } from "express";
import prisma from "../prisma";
import { genSalt, hash, compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import path from "path";
import fs from "fs";
import nodemailer from "nodemailer";
import handlebars from "handlebars";

export class OrgAuthController {
  async registerOrg(req: Request, res: Response) {
    try {
      const { password, confirmPassword, organizer_name, email } = req.body;
      if (password !== confirmPassword) throw { message: "Passwords do not match!" };

      // Check if organizer exists
      const existingOrganizer = await prisma.organizer.findFirst({
        where: { OR: [{ email }, { organizer_name }] }
      });
      if (existingOrganizer) throw { message: "Email or organization name has already been used" };

      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);

      const newOrganizer = await prisma.organizer.create({
        data: { 
          organizer_name,
          email,
          password: hashPassword,
          avatar: null,
          isVerify: false,
        },
      });

      const payload = { id: newOrganizer.id };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "10m" });
      const link = `http://localhost:3000/verify/${token}`;

      const templatePath = path.join(__dirname, "../templates/verify.hbs");
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ organizer_name, link });

      // Send verification email using nodemailer
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Welcome to Event Organizer",
        html,
      });

      res.status(201).send({ message: "Registration Successful √" });
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  }

  async loginOrg(req: Request, res: Response) {
    try {
      const { data, password } = req.body;
      
      const organizer = await prisma.organizer.findFirst({
        where: {
          OR: [
            { email: data },
            { organizer_name: data }
          ]
        }
      });

      if (!organizer) throw { message: "Account not found!" };
      if (!organizer.isVerify) throw { message: "Account is not verified!" };

      const isValidPass = await compare(password, organizer.password!);
      if (!isValidPass) throw { message: "Incorrect Password" };

      const payload = { id: organizer.id };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });

      res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          maxAge: 24 * 3600 * 1000, // 24 hours
          path: "/",
          secure: process.env.NODE_ENV === "production",
        })
        .send({
          message: "Login Successful √",
          token,
          data: {
            id: organizer.id,
            email: organizer.email,
            orgName: organizer.organizer_name,
            avatar: organizer.avatar
          }
        });
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  }

  async verifyOrg(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const verifiedOrganizer = verify(token, process.env.JWT_KEY!) as { id: string };
      
      await prisma.organizer.update({
        data: { isVerify: true },
        where: { id: verifiedOrganizer.id },
      });
      
      res.status(200).send({ message: "Verification Successful √" });
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  }
}

