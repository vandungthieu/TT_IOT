import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "src/posts/dto/create-post.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";

@Injectable()
export class ProfileService{
    constructor(private readonly prisma: PrismaService){}

    // create profile
    createProfile(dto: CreateProfileDto){
        return this.prisma.profile.create({
            data: dto
        })
    }

    // get all profile
    getAllProfile(){
        return this.prisma.profile.findMany()
    }

    // get profile by user id
    getProfileById(userId: number){
        return this.prisma.profile.findUniqueOrThrow({
            where: {userId}
        })
    }

    // update profile
    updateProfile(userId: number, dto: UpdateProfileDto){
        return this.prisma.profile.update({
            where:{userId},
            data: dto
        })
    }

    //delete Profile
    deleteProfile(userId:number){
        return this.prisma.profile.delete({
            where:{userId}
        })
    }
}