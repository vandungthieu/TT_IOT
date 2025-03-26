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
exports.Posts = void 0;
const swagger_1 = require("@nestjs/swagger");
class Posts {
    id;
    userId;
    title;
    content;
}
exports.Posts = Posts;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id duy nhất của bài viết", type: 'integer', example: 1 }),
    __metadata("design:type", Number)
], Posts.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "id của user", type: 'integer', example: 1 }),
    __metadata("design:type", Number)
], Posts.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "tiêu đề của bài viết", type: 'string', example: "How to say gex" }),
    __metadata("design:type", String)
], Posts.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "nội dung của bài viết", type: 'string', example: "bla bla" }),
    __metadata("design:type", String)
], Posts.prototype, "content", void 0);
//# sourceMappingURL=posts.entity.js.map