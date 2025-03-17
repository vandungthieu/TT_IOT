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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PostService = class PostService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createPost(dto) {
        return this.prisma.post.create({
            data: dto
        });
    }
    async getAllPost() {
        return this.prisma.post.findMany();
    }
    async getPostByUserId(userId) {
        return this.prisma.post.findMany({
            where: { userId }
        });
    }
    async getPostById(postId) {
        return this.prisma.post.findUniqueOrThrow({
            where: { id: postId }
        });
    }
    async updatePostById(postId, dto) {
        try {
            return this.prisma.post.update({
                where: { id: postId },
                data: dto
            });
        }
        catch (err) {
            throw new common_1.NotFoundException(`Not Found Post ID: ${postId}`);
        }
    }
    async deletePostById(postId) {
        try {
            return this.prisma.post.delete({
                where: { id: postId }
            });
        }
        catch (err) {
            throw new common_1.NotFoundException(`Not Found Post ID: ${postId}`);
        }
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostService);
//# sourceMappingURL=posts.service.js.map