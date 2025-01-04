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
exports.OrgAuthController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const handlebars_1 = __importDefault(require("handlebars"));
class OrgAuthController {
    registerOrg(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { password, confirmPassword, organizer_name, email } = req.body;
                if (password !== confirmPassword)
                    throw { message: "Passwords do not match!" };
                // Check if organizer exists
                const existingOrganizer = yield prisma_1.default.organizer.findFirst({
                    where: { OR: [{ email }, { organizer_name }] }
                });
                if (existingOrganizer)
                    throw { message: "Email or organization name has already been used" };
                const salt = yield (0, bcrypt_1.genSalt)(10);
                const hashPassword = yield (0, bcrypt_1.hash)(password, salt);
                const newOrganizer = yield prisma_1.default.organizer.create({
                    data: {
                        organizer_name,
                        email,
                        password: hashPassword,
                        avatar: null,
                        isVerify: false,
                    },
                });
                const payload = { id: newOrganizer.id };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "10m" });
                const link = `http://localhost:3000/verify/${token}`;
                const templatePath = path_1.default.join(__dirname, "../templates/verify.hbs");
                const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
                const compiledTemplate = handlebars_1.default.compile(templateSource);
                const html = compiledTemplate({ organizer_name, link });
                // Send verification email using nodemailer
                const transporter = nodemailer_1.default.createTransport({
                    service: "gmail",
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS
                    }
                });
                yield transporter.sendMail({
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject: "Welcome to Event Organizer",
                    html,
                });
                res.status(201).send({ message: "Registration Successful √" });
            }
            catch (err) {
                console.error(err);
                res.status(400).send(err);
            }
        });
    }
    loginOrg(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, password } = req.body;
                const organizer = yield prisma_1.default.organizer.findFirst({
                    where: {
                        OR: [
                            { email: data },
                            { organizer_name: data }
                        ]
                    }
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
            }
            catch (err) {
                console.error(err);
                res.status(400).send(err);
            }
        });
    }
    verifyOrg(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token } = req.params;
                const verifiedOrganizer = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                yield prisma_1.default.organizer.update({
                    data: { isVerify: true },
                    where: { id: verifiedOrganizer.id },
                });
                res.status(200).send({ message: "Verification Successful √" });
            }
            catch (err) {
                console.error(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.OrgAuthController = OrgAuthController;
