import { Body, Get, Controller, Delete, Param, Post, Put, UseGuards, ParseIntPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { OwnershipGuard } from "src/auth/guard/ownership.guard";
import { Roles } from "src/auth/decorator/roles.decorator";
import { RolesGuard } from "src/auth/guard/roles.guard";
import { ApiBearerAuth, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { User } from "./user.entity";

@Controller('users')
export class UsersController{
    constructor(private readonly userService : UsersService){}

    @UseGuards(JwtAuthGuard,RolesGuard)
    @Roles('ADMIN')
    @ApiBearerAuth() // Yêu cầu JWT token
    @ApiOperation({ summary: 'Tạo một người dùng mới (chỉ Admin)' })
    @ApiResponse({ status: 201, description: 'Người dùng được tạo', type: User })
    @ApiResponse({ status: 401, description: 'Chưa xác thực' })
    @ApiResponse({ status: 403, description: 'Không có quyền (yêu cầu vai trò ADMIN)' })
    @Post()
    createUser(@Body() dto: CreateUserDto){
        return this.userService.createUser(dto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @Post()
    createAdmin(dto: CreateUserDto){
        return this.userService.createAdmin(dto)
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Tạo một Admin mới (chỉ Admin)' })
    @ApiResponse({ status: 201, description: 'Admin được tạo', type: User })
    @ApiResponse({ status: 401, description: 'Chưa xác thực' })
    @ApiResponse({ status: 403, description: 'Không có quyền (yêu cầu vai trò ADMIN)' })
    @Get()
    getUser(){
        return this.userService.getUser()
    }
    
    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @Get(':id')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Lấy thông tin người dùng theo ID (chủ sở hữu hoặc Admin)' })
    @ApiResponse({ status: 200, description: 'Thông tin người dùng', type: User })
    @ApiResponse({ status: 401, description: 'Chưa xác thực' })
    @ApiResponse({ status: 403, description: 'Không có quyền truy cập' })
    @ApiResponse({ status: 404, description: 'Không tìm thấy người dùng' })
    getUserById(@Param('id', ParseIntPipe) id : number){
        return this.userService.getUserById((id))
    }

    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @Put(':id')
    updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto){
        return this.userService.updateUser(Number(id), dto)
    }

    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Cập nhật thông tin người dùng (chủ sở hữu hoặc Admin)' })
    @ApiResponse({ status: 200, description: 'Người dùng đã được cập nhật', type: User })
    @ApiResponse({ status: 401, description: 'Chưa xác thực' })
    @ApiResponse({ status: 403, description: 'Không có quyền truy cập' })
    @ApiResponse({ status: 404, description: 'Không tìm thấy người dùng' })
    @Delete(':id')
    deleteUser(@Param('id') id: string){
        return this.userService.deleteUser(Number(id))
    }

    @Delete()
    async deleteAll(){
        return await this.userService.deleteAll()
    }

}