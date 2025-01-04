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
exports.OrganizerController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const handlebars_1 = __importDefault(require("handlebars"));
class OrganizerController {
    // Metode untuk registrasi organizer
    registerOrg(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { password, confirmPassword, organizer_name, email } = req.body;
                if (password !== confirmPassword)
                    throw { message: "Passwords do not match!" };
                const existingOrganizer = yield prisma_1.default.organizer.findFirst({
                    where: { email },
                });
                if (existingOrganizer)
                    throw { message: "Email has already been used" };
                const salt = yield (0, bcrypt_1.genSalt)(10);
                const hashPassword = yield (0, bcrypt_1.hash)(password, salt);
                const newOrganizer = yield prisma_1.default.organizer.create({
                    data: {
                        organizer_name,
                        email,
                        password: hashPassword,
                        avatar: "https://res.cloudinary.com/dkyco4yqp/image/upload/v1735131879/HYPETIX-removebg-preview_qxyuj5.png",
                        isVerify: false,
                    },
                });
                console.log("New Organizer Created:", newOrganizer);
                const payload = { id: newOrganizer.id };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "10m" });
                const link = `${process.env.BASE_URL_FE}/verify/${token}`;
                const templatePath = path_1.default.join(__dirname, "../templates/verifyUser.hbs");
                const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
                const compiledTemplate = handlebars_1.default.compile(templateSource);
                const html = compiledTemplate({ firstName: organizer_name, link });
                const transporter = nodemailer_1.default.createTransport({
                    service: "gmail",
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS,
                    },
                });
                yield transporter.sendMail({
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject: "Welcome to the Organizer Platform",
                    html,
                });
                res.status(201).send({ message: "Organizer Registration Successful √" });
            }
            catch (err) {
                console.error(err);
                res.status(400).send(err);
            }
        });
    }
    // Metode untuk login organizer
    loginOrg(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const organizer = yield prisma_1.default.organizer.findFirst({
                    where: { email },
                });
                if (!organizer)
                    throw { message: "Account not found!" };
                if (!organizer.isVerify)
                    throw { message: "Account is not verified!" };
                const isValidPass = yield (0, bcrypt_1.compare)(password, organizer.password);
                if (!isValidPass)
                    throw { message: "Incorrect Password" };
                const payload = { id: organizer.id };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "1d" });
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
            }
            catch (err) {
                console.error(err);
                res.status(400).send(err);
            }
        });
    }
    // Metode untuk verifikasi organizer
    verifyOrg(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token } = req.params;
                const verifiedOrganizer = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                yield prisma_1.default.organizer.update({
                    data: { isVerify: true },
                    where: { id: verifiedOrganizer.id },
                });
                res.status(200).send({ message: "Organizer Verification Successful √" });
            }
            catch (err) {
                console.error(err);
                res.status(400).send(err);
            }
        });
    }
    // Metode untuk mengambil data organizer berdasarkan id
    getOrganizer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const organizer = yield prisma_1.default.organizer.findUnique({
                    where: { id },
                });
                if (!organizer) {
                    return res.status(404).send({ message: "Organizer not found" });
                }
                res.status(200).json(organizer);
            }
            catch (err) {
                console.error(err);
                res.status(500).send({ message: "Internal Server Error" });
            }
        });
    }
}
exports.OrganizerController = OrganizerController;
