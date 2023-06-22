"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const models_1 = require("../models");
const config_1 = require("../config/config");
const env = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : 'development';
const config = config_1.conf[env];
exports.AppDataSource = new typeorm_1.DataSource(Object.assign(Object.assign({}, config), { synchronize: true, logging: false, entities: models_1.Entities, migrations: [], subscribers: [] }));
//# sourceMappingURL=data_source.js.map