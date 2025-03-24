import { ConflictException, Injectable, NotFoundException, UseGuards } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Prisma } from "@prisma/client";
import * as bcrypt from "bcrypt"


@Injectable()
export class UsersService{
    constructor(private readonly prisma: PrismaService){}
    
    async createUser(dto: CreateUserDto){
       try{
        return await this.prisma.user.create({
            data: dto,
        })
       } catch(err){
        if(err instanceof Prisma.PrismaClientKnownRequestError){
            if(err.code == "P2002"){
                throw new ConflictException("Email already exists")
            }
        }
        throw err
       }
    }

    async createAdmin(dto: CreateUserDto){
        const  existingUser = await this.prisma.user.findUnique({where: {email: dto.email}})

        if(existingUser){
            throw new ConflictException('Email already exists');
        }

        const hasedPassword = await bcrypt.hash(dto.password, 10)

        return await this.prisma.user.create({
           data:{
            ...dto,
            password:hasedPassword,
            role : 'ADMIN'
           }
        })
    }


    async getUser(){
        return await this.prisma.user.findMany()
    }

    async getUserById(id: number){
        const user = await this.prisma.user.findUnique({
            where:{id}
        })

        if(!user){
            throw new NotFoundException(`User with ${id} not found`)
        }

        return user
    }
    /*
    async getUserById(id: number){
        return this.prisma.user.findUniqueOrThrow({
            where: {id}
        })
    }
     */

    async updateUser(id:number, dto : UpdateUserDto){
       try{
        return await this.prisma.user.update({
            where:{id},
            data: dto,
        })
       } catch(err){
        throw new NotFoundException(`Cannot update User id:${id} not found`)
       }
    }

    async deleteUser(id: number){
        try{
            return await this.prisma.user.delete({
                where:{id},
            })
        } catch(err){
            throw new NotFoundException(`Cannot delete User id:${id} not found`)
        } 
    }

    async deleteAll() {
        try {
            // Bước 1: Xóa tất cả bản ghi trong bảng User
            await this.prisma.user.deleteMany({});

            // Bước 2: Reset sequence của cột id về 1
            await this.prisma.$executeRaw`ALTER SEQUENCE "User_id_seq" RESTART WITH 1;`;

            return { message: 'All users deleted and ID sequence reset successfully' };
        } catch (err) {
            throw new Error(`Failed to delete all users and reset sequence: ${err.message}`);
        }
    }
}



