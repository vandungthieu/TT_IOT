import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "src/posts/dto/create-post.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProfileDto } from "./dto/create-profile.dto";

@Injectable()
export class ProfileService{
    constructor(private readonly prisma: PrismaService){}

    // create profile
    createProfile(dto: CreateProfileDto){
        return this.prisma.profile.create({
            data: dto
        })
    }
}