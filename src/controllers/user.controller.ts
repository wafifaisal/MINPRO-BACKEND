import { Request, Response } from "express";
import prisma from "../prisma";
import { Prisma } from "../../prisma/generated/client";
import { cloudinaryUpload } from "../services/cloudinary";
import { Readable } from "stream";

export class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const { search, page = 1, limit = 5 } = req.query;
      const filter: Prisma.UserWhereInput = {};
      if (search) {
        filter.OR = [
          { email: { contains: search as string, mode: "insensitive" } },
        ];
      }

      const countUser = await prisma.user.aggregate({ _count: { _all: true } });
      const total_page = Math.ceil(countUser._count._all / +limit);
      const users = await prisma.user.findMany({
        where: filter,
        orderBy: { id: "asc" },
        take: +limit,
        skip: +limit * (+page - 1),
      });

      res.status(200).send({ total_page, page, users });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getUserId(req: Request, res: Response) {
    try {
      console.log("userId:", req.userId);
      const user = await prisma.user.findUnique({
        where: { id: req.userId },
      });

      res.status(200).send({ result: user });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async editUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.user.update({
        data: req.body,
        where: { id: id.toString() },
      });
      res.status(200).send("User updated ✅");
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  // Method untuk menghapus pengguna
  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.user.delete({ where: { id: id.toString() } });
      res.status(200).send("User deleted ✅");
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  // Method untuk mengedit avatar pengguna
  async editAvatar(req: Request, res: Response) {
    try {
      // if (!req.file) throw { message: "file empty" };
      const file = req.file as Express.Multer.File & { stream: Readable };
      const { secure_url } = await cloudinaryUpload(file, "avatar");
      await prisma.user.update({
        data: { avatar: secure_url },
        where: { id: req.user?.id?.toString() },
      });
      res.status(200).send({ message: "avatar edited !" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  // Method untuk mengedit avatar menggunakan Cloud (non-functional)
  async editAvatarCloud(req: Request, res: Response) {
    try {
      if (!req.file) throw { message: "file empty" };
      res.status(400).send({ message: "Upload failed" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
