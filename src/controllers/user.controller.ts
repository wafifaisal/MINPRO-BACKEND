import { Request, Response } from "express";
import prisma from "../prisma";
import { Prisma } from "../../prisma/generated/client";

export class UserController {
  // Method untuk mengambil semua pengguna
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

  // Method untuk mengambil data pengguna berdasarkan ID
  async getUserId(req: Request, res: Response) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.user?.id?.toString() },
      });
      res.status(200).send({ user });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  // Method untuk mengedit data pengguna
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
      if (!req.file) throw { message: "file empty" };
      const link = `http://localhost:8000/api/public/avatar/${req.file.filename}`;
      await prisma.user.update({
        data: { avatar: link },
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
