import { ConflictException, Injectable, NotFoundException, UseGuards } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Prisma } from "@prisma/client";
import * as bcrypt from "bcrypt"


@Injectable()
export class UsersService{
    constructor(private readonly prisma: PrismaService){}
    
    // tạo user mới
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

    // tạo admin mới
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


    //lấy tất cả user
    async getUser(){
        return await this.prisma.user.findMany()
    }


    //lấy user theo id
    async getUserById(id: number){
        const user = await this.prisma.user.findUnique({
            where:{id}
        })

        if(!user){
            throw new NotFoundException(`User with ${id} not found`)
        }

        return user
    }

    // update user
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

    // xóa user
    async deleteUser(id: number){
        try{
            return await this.prisma.user.delete({
                where:{id},
            })
        } catch(err){
            throw new NotFoundException(`Cannot delete User id:${id} not found`)
        } 
    }

    // xóa tất cả user
    async deleteAll() {
        try {
            // Bắt đầu một transaction để đảm bảo tất cả thao tác thành công hoặc rollback
            return await this.prisma.$transaction(async (prisma) => {
                // Bước 1: Xóa tất cả bản ghi trong các bảng liên quan trước
                await prisma.post.deleteMany({});
                await prisma.profile.deleteMany({});
                await prisma.user.deleteMany({});
    
                // Bước 2: Reset sequence của tất cả các bảng về 1
                await prisma.$executeRaw`ALTER SEQUENCE "Post_id_seq" RESTART WITH 1;`;
                await prisma.$executeRaw`ALTER SEQUENCE "Profile_id_seq" RESTART WITH 1;`;
                await prisma.$executeRaw`ALTER SEQUENCE "User_id_seq" RESTART WITH 1;`;
    
                return { 
                    message: 'All users, posts, profiles deleted and ID sequences reset successfully' 
                };
            });
        } catch (err) {
            throw new Error(`Failed to delete all data and reset sequences: ${err.message}`);
        }
    }

    async getPass(){
        const adminPass = await bcrypt.hash("admin123",10)
        const pass2 = await bcrypt.hash("passwordUser1",10)
        const pass3 = await bcrypt.hash("passwordUser2",10)
        const pass4 = await bcrypt.hash("passwordUser3",10)
        console.log(adminPass)
        console.log(pass2)
        console.log(pass3)
        console.log(pass4)
    }

}
//  const user = new UsersService(new PrismaService)
//  user.getPass()


