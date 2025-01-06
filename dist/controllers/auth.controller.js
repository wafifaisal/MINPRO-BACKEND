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
exports.AuthController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const handlebars_1 = __importDefault(require("handlebars"));
const generateReffCode_1 = require("../utils/generateReffCode");
class AuthController {
    // Method untuk registrasi pengguna
    registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { password, confirmPassword, firstName, lastName, email, ref_by } = req.body;
                if (password !== confirmPassword)
                    throw { message: "Passwords do not match!" };
                const existingUser = yield prisma_1.default.user.findFirst({ where: { email } });
                if (existingUser)
                    throw { message: "Email has already been used" };
                const salt = yield (0, bcrypt_1.genSalt)(10);
                const hashPassword = yield (0, bcrypt_1.hash)(password, salt);
                const newUser = yield prisma_1.default.user.create({
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
                const refCode = (0, generateReffCode_1.generateReferralCode)(newUser.firstName, newUser.id);
                yield prisma_1.default.user.update({
                    where: { id: newUser.id },
                    data: { ref_code: refCode },
                });
                if (ref_by) {
                    const referrer = yield prisma_1.default.user.findFirst({
                        where: { ref_code: ref_by },
                    });
                    if (!referrer)
                        throw { message: "Invalid referral code" };
                    yield prisma_1.default.user.update({
                        where: { id: newUser.id },
                        data: { ref_by: ref_by },
                    });
                    const pointExpiryDate = new Date();
                    pointExpiryDate.setMonth(pointExpiryDate.getMonth() + 3);
                    yield prisma_1.default.userPoint.create({
                        data: {
                            userId: referrer.id,
                            point: 10000,
                            expiredAt: pointExpiryDate,
                        },
                    });
                    const couponExpiryDate = new Date();
                    couponExpiryDate.setMonth(couponExpiryDate.getMonth() + 3);
                    yield prisma_1.default.userCoupon.create({
                        data: {
                            userId: newUser.id,
                            percentage: 10,
                            expiredAt: couponExpiryDate,
                        },
                    });
                }
                const payload = { id: newUser.id };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "10m" });
                const link = `${process.env.BASE_URL_FE}/verify/${token}`;
                const templatePath = path_1.default.join(__dirname, "../templates/verifyUser.hbs");
                const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
                const compiledTemplate = handlebars_1.default.compile(templateSource);
                const html = compiledTemplate({ firstName, link });
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
                    subject: "Welcome to the HYPETIX Platform",
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
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                console.log("Login email received:", email);
                const user = yield prisma_1.default.user.findUnique({
                    where: { email },
                });
                console.log("User found:", user);
                if (!user)
                    throw { message: "Account not found!" };
                if (!user.isVerify)
                    throw { message: "Account is not verified!" };
                const isValidPassword = yield (0, bcrypt_1.compare)(password, user.password);
                console.log("Password valid:", isValidPassword);
                if (!isValidPassword)
                    throw { message: "Invalid password" };
                const payload = { id: user.id };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "1d" });
                console.log("Generated token:", token);
                res.status(200).send({
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
            }
            catch (err) {
                console.error("Error during login:", err);
                res.status(400).send(err);
            }
        });
    }
    verifyUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token } = req.params;
                const verifiedUser = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                yield prisma_1.default.user.update({
                    data: { isVerify: true },
                    where: { id: verifiedUser.id },
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
exports.AuthController = AuthController;
