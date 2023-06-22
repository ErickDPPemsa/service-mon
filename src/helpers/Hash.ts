import { createHash } from "crypto";

export const Hash = (value: string): string => {
    const hash = createHash('sha256');
    hash.update(value);
    return hash.digest('hex');
}