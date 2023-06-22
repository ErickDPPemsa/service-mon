"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceType = void 0;
const typeorm_1 = require("typeorm");
const Service_1 = require("./Service");
let ServiceType = class ServiceType {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ServiceType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], ServiceType.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((_) => Service_1.Service, (service) => service.id),
    __metadata("design:type", Service_1.Service)
], ServiceType.prototype, "service", void 0);
ServiceType = __decorate([
    (0, typeorm_1.Entity)({ name: 'ServiceType' })
], ServiceType);
exports.ServiceType = ServiceType;
//# sourceMappingURL=ServiceType.js.map