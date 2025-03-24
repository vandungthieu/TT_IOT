import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Injectable()
export class PostsService{
    constructor(private readonly prisma: PrismaService){}

    // create post
    async createPost(dto: CreatePostDto){
        return await this.prisma.post.create({
            data: dto
        })
    }
    // get all post
    async getAllPost(){
        return await this.prisma.post.findMany()
    }

    // get post by id
    async getPostById(id: number){
        return await this.prisma.post.findUniqueOrThrow({
            where:{id},
        })
    }

    //get all post by userId
    async getPostByUserId(userId : number){
        try{
            return await this.prisma.post.findMany({
                where: {id: userId}
            })
        } catch(err){
            throw new NotFoundException(`Not found post by userId: ${userId}`)
        }
    }

    //update post by id
    async updatePostById(id: number, dto: UpdatePostDto){
        try{
            return await this.prisma.post.update({
                where:{id},
                data: dto
            })
        } catch(err){
            throw new NotFoundException(`not found post by id : ${id}`)
        }
    }

    // delete post by id
    async deletePostById(id: number){
        try{
            return await this.prisma.post.delete({
                where: {id}
            })
        } catch(err){
            throw new NotFoundException(`not found post by id: ${id}`)
        }
    }

}