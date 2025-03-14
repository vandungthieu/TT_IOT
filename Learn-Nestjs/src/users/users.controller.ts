import { Body, Get, Controller, Delete, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('users')
export class UsersController{
    constructor(private readonly userService : UsersService){}

    @Post()
    createUser(@Body() dto: CreateUserDto){
        return this.userService.createUser(dto)
    }

    @Get()
    getUser(){
        return this.userService.getUser()
    }
    
    @Get(':id')
    getUserById(@Param('id') id : string){
        return this.userService.getUserById(Number(id))
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto){
        return this.userService.updateUser(Number(id), dto)
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string){
        return this.userService.deleteUser(Number(id))
    }
}