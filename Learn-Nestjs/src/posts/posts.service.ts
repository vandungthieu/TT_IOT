import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Injectable()
export class PostService{
    constructor(private readonly prisma: PrismaService){}

        // create new post
        async createPost(dto: CreatePostDto){
            return this.prisma.post.create({
                data:dto
            })
        }

        // get all post
        async getAllPost(){
            return this.prisma.post.findMany()
        }
    
        //  get Post by a User
        async getPostByUserId(userId: number){
            return this.prisma.post.findMany({
                where:{userId}
            })
        }
    
        //get Post by Id
        async getPostById(postId: number){
            return this.prisma.post.findUniqueOrThrow({
                where:{id:postId}
            })
        }
    
        // Update post by id
        async updatePostById(postId: number, dto:UpdatePostDto){
            try{
                return this.prisma.post.update({
                    where:{id:postId},
                    data: dto
                })
            }catch (err){
                throw new NotFoundException(`Not Found Post ID: ${postId}`)
            }
        }
    
        // delete post by id
        async deletePostById(postId : number){
            try{
                return this.prisma.post.delete({
                    where:{id:postId}
                })
            } catch(err){
                throw new NotFoundException(`Not Found Post ID: ${postId}`)
            }
        }
}