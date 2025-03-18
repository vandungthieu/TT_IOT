import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Prisma } from "@prisma/client";
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService{
    constructor(private readonly prisma: PrismaService){}
    
    async createUser(dto: CreateUserDto){
       try{
        const hashedPassword = await bcrypt.hash(dto.password, 10)
        return this.prisma.user.create({
            data: {
                ...dto,
                password: hashedPassword,
            },
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

async validateUser(email: string, password: string){
    const user = await this.prisma.user.findUnique({where: {email}})
    if(user && (await bcrypt.compare(password, user.password))){
        const {password, ...result} = user
        return  result
    }
    return null
}



    async getUser(){
        return this.prisma.user.findMany()
    }

    async getUserById(id: number){
        const user = this.prisma.user.findUnique({
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
        return this.prisma.user.update({
            where:{id},
            data: dto,
        })
       } catch(err){
        throw new NotFoundException(`Cannot update User id:${id} not found`)
       }
    }

    async deleteUser(id: number){
        try{
            return this.prisma.user.delete({
                where:{id},
            })
        } catch(err){
            new NotFoundException(`Cannot delete User id:${id} not found`)
        } 
    }

}