import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./posts.service";
import { UpdatePostDto } from "./dto/update-post.dto";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { OwnershipGuard } from "src/auth/guard/ownership.guard";
import { RolesGuard } from "src/auth/guard/roles.guard";
import { Roles } from "src/auth/decorator/roles.decorator";

@Controller('posts')
export class PostsController{
    constructor(private readonly postsService: PostsService){}

    // create post
    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @Post()
    createPost(@Body() dto: CreatePostDto){
        return this.postsService.createPost(dto)
    }

    // get all post
    @UseGuards(JwtAuthGuard)
    @Roles('ADMIN')
    @Get()
    getAllPost(){
        return this.postsService.getAllPost()
    }

    //get post by id
    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @Get(':id')
    getPostById(@Param('id') id: string){
        return this.postsService.getPostById(parseInt(id))
    }

    // get post by userId
    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @Get('user:userId')
    getPostByUserId(@Param('userId') userId: string){
        return this.postsService.getPostByUserId(parseInt(userId))
    }

    // update post by id
    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @Put(':id')
    updatePostById(@Param('id') id: string, @Body() dto: UpdatePostDto){
        return this.postsService.updatePostById(parseInt(id), dto)
    }

    //delete post by id
    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @Delete(":id")
    deletePostById(@Param('id') id: string){
        return this.postsService.deletePostById(parseInt(id))
    }

}