"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const cloudinary_1 = require("../services/cloudinary");
class UserController {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { search, page = 1, limit = 5 } = req.query;
                const filter = {};
                if (search) {
                    filter.OR = [
                        { email: { contains: search, mode: "insensitive" } },
                    ];
                }
                const countUser = yield prisma_1.default.user.aggregate({ _count: { _all: true } });
                const total_page = Math.ceil(countUser._count._all / +limit);
                const users = yield prisma_1.default.user.findMany({
                    where: filter,
                    orderBy: { id: "asc" },
                    take: +limit,
                    skip: +limit * (+page - 1),
                });
                res.status(200).send({ total_page, page, users });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("userId:", req.userId);
                const user = yield prisma_1.default.user.findUnique({
                    where: { id: req.userId },
                });
                res.status(200).send({ result: user });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    editUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield prisma_1.default.user.update({
                    data: req.body,
                    where: { id: id.toString() },
                });
                res.status(200).send("User updated ✅");
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    // Method untuk menghapus pengguna
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield prisma_1.default.user.delete({ where: { id: id.toString() } });
                res.status(200).send("User deleted ✅");
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    // Method untuk mengedit avatar pengguna
    editAvatar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                // if (!req.file) throw { message: "file empty" };
                const file = req.file;
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(file, "avatar");
                yield prisma_1.default.user.update({
                    data: { avatar: secure_url },
                    where: { id: (_b = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id) === null || _b === void 0 ? void 0 : _b.toString() },
                });
                res.status(200).send({ message: "avatar edited !" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    // Method untuk mengedit avatar menggunakan Cloud (non-functional)
    editAvatarCloud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.file)
                    throw { message: "file empty" };
                res.status(400).send({ message: "Upload failed" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.UserController = UserController;
