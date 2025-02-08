"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidIranianNationalCode = void 0;
const isValidIranianNationalCode = (code) => {
    if (!/^\d{10}$/.test(code))
        return false; // بررسی ۱۰ رقمی بودن
    const check = parseInt(code[9]); // رقم کنترلی
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(code[i]) * (10 - i);
    }
    const remainder = sum % 11;
    return (remainder < 2 && check === remainder) || (remainder >= 2 && check === 11 - remainder);
};
exports.isValidIranianNationalCode = isValidIranianNationalCode;
// export = {isValidIranianNationalCode};
