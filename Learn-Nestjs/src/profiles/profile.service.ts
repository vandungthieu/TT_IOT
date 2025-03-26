import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";

@Injectable()
export class ProfileService{
    constructor(private readonly prisma: PrismaService){}

    // create profile
    async createProfile(dto: CreateProfileDto){
        return await this.prisma.profile.create({
            data: dto
        })
    }

    // get all profile
    async getAllProfile(){
        return await this.prisma.profile.findMany()
    }

    // get profile by user id
    async getProfileById(userId: number){
        return await this.prisma.profile.findUniqueOrThrow({
            where: {userId}
        })
    }

    // update profile
    async updateProfile(userId: number, dto: UpdateProfileDto){
        return await this.prisma.profile.update({
            where:{userId},
            data: dto
        })
    }

    //delete Profile
    async deleteProfile(userId:number){
        return await this.prisma.profile.delete({
            where:{userId}
        })
    }
}