import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./posts.service";
import { UpdatePostDto } from "./dto/update-post.dto";

@Controller('posts')
export class PostsController{
    constructor(private readonly postsService: PostsService){}

    // create post
    @Post()
    createPost(@Body() dto: CreatePostDto){
        return this.postsService.createPost(dto)
    }

    // get all post
    @Get()
    getAllPost(){
        return this.postsService.getAllPost()
    }

    //get post by id
    @Get(':id')
    getPostById(@Param('id') id: string){
        return this.postsService.getPostById(parseInt(id))
    }

    // get post by userId
    @Get('user:userId')
    getPostByUserId(@Param('userId') userId: string){
        return this.postsService.getPostByUserId(parseInt(userId))
    }

    // update post by id
    @Put(':id')
    updatePostById(@Param('id') id: string, @Body() dto: UpdatePostDto){
        return this.postsService.updatePostById(parseInt(id), dto)
    }

    //delete post by id
    @Delete(":id")
    deletePostById(@Param('id') id: string){
        return this.postsService.deletePostById(parseInt(id))
    }

}