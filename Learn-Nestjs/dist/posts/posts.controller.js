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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const create_post_dto_1 = require("./dto/create-post.dto");
const posts_service_1 = require("./posts.service");
const update_post_dto_1 = require("./dto/update-post.dto");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const ownership_guard_1 = require("../auth/guard/ownership.guard");
const roles_guard_1 = require("../auth/guard/roles.guard");
const roles_decorator_1 = require("../auth/decorator/roles.decorator");
const posts_entity_1 = require("./posts.entity");
const swagger_1 = require("@nestjs/swagger");
let PostsController = class PostsController {
    postsService;
    constructor(postsService) {
        this.postsService = postsService;
    }
    createPost(dto) {
        return this.postsService.createPost(dto);
    }
    getAllPost() {
        return this.postsService.getAllPost();
    }
    getPostById(id) {
        return this.postsService.getPostById(parseInt(id));
    }
    getPostByUserId(userId) {
        return this.postsService.getPostByUserId(parseInt(userId));
    }
    updatePostById(id, dto) {
        return this.postsService.updatePostById(parseInt(id), dto);
    }
    deletePostById(id) {
        return this.postsService.deletePostById(parseInt(id));
    }
};
exports.PostsController = PostsController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, ownership_guard_1.OwnershipGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'tạo post mới ' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "post được tạo", type: posts_entity_1.Posts }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "chưa xác thực" }),
    (0, swagger_1.ApiResponse)({ status: 403, description: "Không có quyền truy cập" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Không tìm thấy post" }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "createPost", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'lấy tất cả post (chỉ admin) ' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "lấy thành công post", type: posts_entity_1.Posts }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "chưa xác thực" }),
    (0, swagger_1.ApiResponse)({ status: 403, description: "Không có quyền truy cập" }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getAllPost", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, ownership_guard_1.OwnershipGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'lấy post theo ID ' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Thông tin post", type: posts_entity_1.Posts }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "chưa xác thực" }),
    (0, swagger_1.ApiResponse)({ status: 403, description: "Không có quyền truy cập" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Không tìm thấy post" }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getPostById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, ownership_guard_1.OwnershipGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'lấy post theo userID ' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Thông tin post", type: posts_entity_1.Posts }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "chưa xác thực" }),
    (0, swagger_1.ApiResponse)({ status: 403, description: "Không có quyền truy cập" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Không tìm thấy post" }),
    (0, common_1.Get)('user:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getPostByUserId", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, ownership_guard_1.OwnershipGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'cập nhật post theo ID ' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "cập nhật post thành công", type: posts_entity_1.Posts }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "chưa xác thực" }),
    (0, swagger_1.ApiResponse)({ status: 403, description: "Không có quyền truy cập" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Không tìm thấy post" }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_dto_1.UpdatePostDto]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "updatePostById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, ownership_guard_1.OwnershipGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'xóa post ' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Xóa thành công post" }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "chưa xác thực" }),
    (0, swagger_1.ApiResponse)({ status: 403, description: "Không có quyền truy cập" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Không tìm thấy post" }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "deletePostById", null);
exports.PostsController = PostsController = __decorate([
    (0, swagger_1.ApiTags)('posts'),
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
//# sourceMappingURL=posts.controller.js.map