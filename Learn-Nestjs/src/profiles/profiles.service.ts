import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";

@Injectable()
export class ProfilesService{
    constructor(private readonly prisma: PrismaService){}

        // create profile
        async createProfile(dto: CreateProfileDto){
            return this.prisma.profile.create({
                data:dto
            })
        }

        //get all profile
        async getAllProfile(){
            return this.prisma.profile.findMany()
        }
    
        // get Profile by id
        async getProfileById(id: number){
            try{
                return this.prisma.profile.findUniqueOrThrow({
                    where:{userId: id},
                })
            } catch(err){
                throw new NotFoundException(`Not Found Profile :${id}`)
            }
        }
    
        // update profile by id
        async updateProfileById(id: number, dto: UpdateProfileDto){
            try{
                return this.prisma.profile.update({
                    where:{userId: id},
                    data: dto,
                })
            } catch(err){
                throw new NotFoundException(`Not Found Profile ${id}`)
            }
        }
    
        // delete profile by id
        async deleteProfileById(id: number){
            try{
                return this.prisma.profile.delete({
                    where:{userId: id}
                })
            } catch(err){
                throw new NotFoundException(`Not Found profile ${id}`)
            }
        }
    
}