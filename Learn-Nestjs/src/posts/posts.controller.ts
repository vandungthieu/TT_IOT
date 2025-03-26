import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./posts.service";
import { UpdatePostDto } from "./dto/update-post.dto";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { OwnershipGuard } from "src/auth/guard/ownership.guard";
import { RolesGuard } from "src/auth/guard/roles.guard";
import { Roles } from "src/auth/decorator/roles.decorator";
import {Posts} from "./posts.entity"
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('posts')
@Controller('posts')
export class PostsController{
    constructor(private readonly postsService: PostsService){}

    // create post
    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @ApiBearerAuth()
    @ApiOperation({summary:'tạo post mới '})
    @ApiResponse({status:201, description:"post được tạo", type:Posts })
    @ApiResponse({status:401, description: "chưa xác thực"})
    @ApiResponse({status: 403, description: "Không có quyền truy cập"})
    @ApiResponse({status: 404, description:"Không tìm thấy post"})
    @Post()
    createPost(@Body() dto: CreatePostDto){
        return this.postsService.createPost(dto)
    }

    // get all post
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @ApiBearerAuth()
    @ApiOperation({summary:'lấy tất cả post (chỉ admin) '})
    @ApiResponse({status:201, description:"lấy thành công post", type: Posts})
    @ApiResponse({status:401, description: "chưa xác thực"})
    @ApiResponse({status: 403, description: "Không có quyền truy cập"})
    @Get()
    getAllPost(){
        return this.postsService.getAllPost()
    }

    //get post by id
    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @ApiBearerAuth()
    @ApiOperation({summary:'lấy post theo ID '})
    @ApiResponse({status:201, description:"Thông tin post", type: Posts})
    @ApiResponse({status:401, description: "chưa xác thực"})
    @ApiResponse({status: 403, description: "Không có quyền truy cập"})
    @ApiResponse({status: 404, description:"Không tìm thấy post"})
    @Get(':id')
    getPostById(@Param('id') id: string){
        return this.postsService.getPostById(parseInt(id))
    }

    // get post by userId
    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @ApiBearerAuth()
    @ApiOperation({summary:'lấy post theo userID '})
    @ApiResponse({status:201, description:"Thông tin post", type: Posts})
    @ApiResponse({status:401, description: "chưa xác thực"})
    @ApiResponse({status: 403, description: "Không có quyền truy cập"})
    @ApiResponse({status: 404, description:"Không tìm thấy post"})
    @Get('user:userId')
    getPostByUserId(@Param('userId') userId: string){
        return this.postsService.getPostByUserId(parseInt(userId))
    }

    // update post by id
    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @ApiBearerAuth()
    @ApiOperation({summary:'cập nhật post theo ID '})
    @ApiResponse({status:201, description:"cập nhật post thành công", type: Posts})
    @ApiResponse({status:401, description: "chưa xác thực"})
    @ApiResponse({status: 403, description: "Không có quyền truy cập"})
    @ApiResponse({status: 404, description:"Không tìm thấy post"})
    @Put(':id')
    updatePostById(@Param('id') id: string, @Body() dto: UpdatePostDto){
        return this.postsService.updatePostById(parseInt(id), dto)
    }

    //delete post by id
    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @ApiBearerAuth()
    @ApiOperation({summary:'xóa post '})
    @ApiResponse({status:201, description:"Xóa thành công post"})
    @ApiResponse({status:401, description: "chưa xác thực"})
    @ApiResponse({status: 403, description: "Không có quyền truy cập"})
    @ApiResponse({status: 404, description:"Không tìm thấy post"})
    @Delete(":id")
    deletePostById(@Param('id') id: string){
        return this.postsService.deletePostById(parseInt(id))
    }

}