import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PostService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Controller('posts')
export class PostsController{
    constructor(private readonly postsService: PostService){}

        //create Post 
        @Post()
        createPost(@Body() dto: CreatePostDto){
            return this.postsService.createPost(dto)
        }
    
        //get all post by a user
        @Get('user/:userId')
        getPostByUserId(@Param('userId') userId: string){
            return this.postsService.getPostByUserId(parseInt(userId))
        }

        //get all post
        @Get()
        getAllPosts(){
            return this.postsService.getAllPost()
        }
    
        // get post by id
        @Get(':postId')
        getPostById(@Param('postId') postId: string){
            return this.postsService.getPostById(parseInt(postId))
        }
    
        //update post by id
        @Put(':postId')
        updatePostById(@Param('postId') postId: string, @Body() dto: UpdatePostDto){
            return this.postsService.updatePostById(parseInt(postId), dto)
        }
    
        // delete post by id
        @Delete(':postId')
        deletePostById(@Param('postId') postId: string){
            return this.postsService.deletePostById(parseInt(postId))
        }
    
}