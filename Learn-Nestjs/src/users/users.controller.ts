import { Body, Get, Controller, Delete, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { OwnershipGuard } from "src/auth/guard/ownership.guard";
import { Roles } from "src/auth/decorator/roles.decorator";
import { RolesGuard } from "src/auth/guard/roles.guard";

@Controller('users')
export class UsersController{
    constructor(private readonly userService : UsersService){}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @Post()
    createUser(@Body() dto: CreateUserDto){
        return this.userService.createUser(dto)
    }

    @UseGuards(JwtAuthGuard)
    @Roles('ADMIN')
    @Post()
    createAdmin(dto: CreateUserDto){
        return this.userService.createAdmin(dto)
    }

    @UseGuards(JwtAuthGuard)
    @Roles('ADMIN')
    @Get()
    getUser(){
        return this.userService.getUser()
    }
    
    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @Get(':id')
    getUserById(@Param('id') id : string){
        return this.userService.getUserById(Number(id))
    }

    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @Put(':id')
    updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto){
        return this.userService.updateUser(Number(id), dto)
    }

    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @Delete(':id')
    deleteUser(@Param('id') id: string){
        return this.userService.deleteUser(Number(id))
    }

    @Delete()
    async deleteAll(){
        return await this.userService.deleteAll()
    }

}