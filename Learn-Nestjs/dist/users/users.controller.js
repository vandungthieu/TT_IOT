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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const ownership_guard_1 = require("../auth/guard/ownership.guard");
const roles_decorator_1 = require("../auth/decorator/roles.decorator");
const roles_guard_1 = require("../auth/guard/roles.guard");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("./user.entity");
let UsersController = class UsersController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    createUser(dto) {
        return this.userService.createUser(dto);
    }
    createAdmin(dto) {
        return this.userService.createAdmin(dto);
    }
    getUser() {
        return this.userService.getUser();
    }
    getUserById(id) {
        return this.userService.getUserById((id));
    }
    updateUser(id, dto) {
        return this.userService.updateUser(id, dto);
    }
    deleteUser(id) {
        return this.userService.deleteUser((id));
    }
    async deleteAll() {
        return await this.userService.deleteAll();
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Tạo một người dùng mới (chỉ Admin)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Người dùng được tạo', type: user_entity_1.User }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Chưa xác thực' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Không có quyền (yêu cầu vai trò ADMIN)' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Tạo một Admin mới (chỉ Admin)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Admin được tạo', type: user_entity_1.User }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Chưa xác thực' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Không có quyền (yêu cầu vai trò ADMIN)' }),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createAdmin", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Lấy danh sách tất cả người dùng (chỉ Admin)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Danh sách người dùng', type: [user_entity_1.User] }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Chưa xác thực' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Không có quyền (yêu cầu vai trò ADMIN)' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, ownership_guard_1.OwnershipGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Lấy thông tin người dùng theo ID (chủ sở hữu hoặc Admin)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Thông tin người dùng', type: user_entity_1.User }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Chưa xác thực' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Không có quyền truy cập' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Không tìm thấy người dùng' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, ownership_guard_1.OwnershipGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Cập nhật thông tin người dùng (chủ sở hữu hoặc Admin)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Người dùng đã được cập nhật', type: user_entity_1.User }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Chưa xác thực' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Không có quyền truy cập' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Không tìm thấy người dùng' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, ownership_guard_1.OwnershipGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Xóa người dùng (chủ sở hữu hoặc Admin)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Người dùng đã được xóa' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Chưa xác thực' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Không có quyền truy cập' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Không tìm thấy người dùng' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteAll", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map