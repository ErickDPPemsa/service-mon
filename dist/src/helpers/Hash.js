"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hash = void 0;
const crypto_1 = require("crypto");
const Hash = (value) => {
    const hash = (0, crypto_1.createHash)('sha256');
    hash.update(value);
    return hash.digest('hex');
};
exports.Hash = Hash;
//# sourceMappingURL=Hash.js.map