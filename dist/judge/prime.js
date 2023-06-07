"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime = void 0;
const isPrime = (n) => {
    if (n < 2)
        return false;
    for (let i = 2; i < n; i += 1) {
        if (n % i === 0)
            return false;
    }
    return true;
};
exports.isPrime = isPrime;
