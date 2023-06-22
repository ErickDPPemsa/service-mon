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
exports.Service = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const ServiceType_1 = require("./ServiceType");
const ServiceComment_1 = require("./ServiceComment");
let Service = class Service {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Service.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'granted_entry_user_id' }),
    __metadata("design:type", String)
], Service.prototype, "granted_entry_user_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.id, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'granted_exit_user_id' }),
    __metadata("design:type", String)
], Service.prototype, "granted_exit_user_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => ServiceType_1.ServiceType, (serviceType) => serviceType.id),
    (0, typeorm_1.JoinColumn)({ name: 'id_type' }),
    __metadata("design:type", Number)
], Service.prototype, "id_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Service.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Service.prototype, "folio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Service.prototype, "exitDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], Service.prototype, "codeclient", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Service.prototype, "digital", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Service.prototype, "cron", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Service.prototype, "isDelivered", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Service.prototype, "showKeys", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Service.prototype, "verifyUsers", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Service.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Service.prototype, "zones", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Service.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint' }),
    __metadata("design:type", Number)
], Service.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Service.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Service.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ServiceComment_1.ServiceComment, (comment) => comment.id_service),
    __metadata("design:type", Array)
], Service.prototype, "comments", void 0);
Service = __decorate([
    (0, typeorm_1.Entity)({ name: 'Service' })
], Service);
exports.Service = Service;
//# sourceMappingURL=Service.js.map