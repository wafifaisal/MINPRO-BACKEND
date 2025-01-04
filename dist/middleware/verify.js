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
exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = __importDefault(require("../prisma")); // Prisma client
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.headers["authorization"]) === null || _a === void 0 ? void 0 : _a.split(" ")[1]; // Get token from Authorization header
    if (!token) {
        res.status(403).send({ message: "Token is required!" });
        return; // Ensure function ends here
    }
    try {
        // Decode the token
        const decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
        // Check if the token corresponds to a user
        const user = yield prisma_1.default.user.findUnique({
            where: { id: decoded.id },
        });
        if (user) {
            req.userId = user.id;
            req.isOrganizer = false; // Not an organizer
            next();
            return; // Ensure function ends here
        }
        // If not found, check if it's an organizer
        const organizer = yield prisma_1.default.organizer.findUnique({
            where: { id: decoded.id },
        });
        if (organizer) {
            req.userId = organizer.id;
            req.isOrganizer = true; // Is an organizer
            next();
            return; // Ensure function ends here
        }
        res.status(403).send({ message: "Invalid token" });
    }
    catch (err) {
        console.error(err);
        res.status(401).send({ message: "Unauthorized" });
    }
});
exports.verifyToken = verifyToken;
