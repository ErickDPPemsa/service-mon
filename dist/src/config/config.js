"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.conf = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.conf = {
    development: {
        type: 'mssql',
        host: 'localhost',
        port: 1433,
        username: 'sa',
        password: 'Desarrollo1234',
        database: 'SERVICEMON',
        options: {
            trustServerCertificate: true
        }
    },
    test: {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Desarrollo1234',
        database: 'SERVICEMON',
    },
    production: {
        type: process.env.SERVER_TYPE,
        host: process.env.SERVER_HOST,
        port: parseInt(process.env.SERVER_PORT),
        username: process.env.SERVER_USERNAME,
        password: process.env.SERVER_PASSWORD,
        database: (_a = process.env.SERVER_DB_NAME) !== null && _a !== void 0 ? _a : '',
        location: '',
        driver: '',
        region: '',
        secretArn: '',
        resourceArn: '',
        timeTravelQueries: false
    }
};
//# sourceMappingURL=config.js.map