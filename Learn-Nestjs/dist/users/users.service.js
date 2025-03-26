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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUser(dto) {
        try {
            return await this.prisma.user.create({
                data: dto,
            });
        }
        catch (err) {
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (err.code == "P2002") {
                    throw new common_1.ConflictException("Email already exists");
                }
            }
            throw err;
        }
    }
    async createAdmin(dto) {
        const existingUser = await this.prisma.user.findUnique({ where: { email: dto.email } });
        if (existingUser) {
            throw new common_1.ConflictException('Email already exists');
        }
        const hasedPassword = await bcrypt.hash(dto.password, 10);
        return await this.prisma.user.create({
            data: {
                ...dto,
                password: hasedPassword,
                role: 'ADMIN'
            }
        });
    }
    async getUser() {
        return await this.prisma.user.findMany();
    }
    async getUserById(id) {
        const user = await this.prisma.user.findUnique({
            where: { id }
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ${id} not found`);
        }
        return user;
    }
    async updateUser(id, dto) {
        try {
            return await this.prisma.user.update({
                where: { id },
                data: dto,
            });
        }
        catch (err) {
            throw new common_1.NotFoundException(`Cannot update User id:${id} not found`);
        }
    }
    async deleteUser(id) {
        try {
            return await this.prisma.user.delete({
                where: { id },
            });
        }
        catch (err) {
            throw new common_1.NotFoundException(`Cannot delete User id:${id} not found`);
        }
    }
    async deleteAll() {
        try {
            return await this.prisma.$transaction(async (prisma) => {
                await prisma.post.deleteMany({});
                await prisma.profile.deleteMany({});
                await prisma.user.deleteMany({});
                await prisma.$executeRaw `ALTER SEQUENCE "Post_id_seq" RESTART WITH 1;`;
                await prisma.$executeRaw `ALTER SEQUENCE "Profile_id_seq" RESTART WITH 1;`;
                await prisma.$executeRaw `ALTER SEQUENCE "User_id_seq" RESTART WITH 1;`;
                return {
                    message: 'All users, posts, profiles deleted and ID sequences reset successfully'
                };
            });
        }
        catch (err) {
            throw new Error(`Failed to delete all data and reset sequences: ${err.message}`);
        }
    }
    async getPass() {
        const adminPass = await bcrypt.hash("admin123", 10);
        const pass2 = await bcrypt.hash("passwordUser1", 10);
        const pass3 = await bcrypt.hash("passwordUser2", 10);
        const pass4 = await bcrypt.hash("passwordUser3", 10);
        console.log(adminPass);
        console.log(pass2);
        console.log(pass3);
        console.log(pass4);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map