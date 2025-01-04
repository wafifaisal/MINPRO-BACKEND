"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReferralCode = generateReferralCode;
function generateReferralCode(firstName, id) {
    const namePart = firstName.slice(0, 4).toUpperCase().padEnd(4, 'X');
    const uuidPart = id.slice(0, 6).toUpperCase();
    return `${namePart}${uuidPart}`;
}
