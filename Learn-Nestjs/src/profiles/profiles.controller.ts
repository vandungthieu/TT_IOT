import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { ProfileService } from "./profile.service";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { OwnershipGuard } from "src/auth/guard/ownership.guard";
import { Roles } from "src/auth/decorator/roles.decorator";
import { RolesGuard } from "src/auth/guard/roles.guard";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Profile } from "./profile.entity";

@ApiTags('profiles')
@Controller('profiles')
export class ProfilesController{
    constructor (private readonly profileService: ProfileService){}

    @ApiBearerAuth()
    @ApiOperation({summary:'tạo profile mới '})
    @ApiResponse({status:201, description:"profile được tạo", type: Profile})
    @ApiResponse({status:401, description: "chưa xác thực"})
    @ApiResponse({status: 403, description: "Không có quyền truy cập"})
    @ApiResponse({status: 404, description:"Không tìm thấy profile"})
    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @Post()
    createProfile(@Body() dto: CreateProfileDto){
        this.profileService.createProfile(dto)
    }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('ADMIN')
    @ApiBearerAuth()
    @ApiOperation({summary:'lấy tất cả profile (chỉ admin) '})
    @ApiResponse({status:201, description:"lấy thành công profile", type: Profile})
    @ApiResponse({status:401, description: "chưa xác thực"})
    @ApiResponse({status: 403, description: "Không có quyền truy cập"})
    @Get()
    getAllProfile(){
        this.profileService.getAllProfile()
    }

    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @ApiBearerAuth()
    @ApiOperation({summary:'lấy profile theo ID '})
    @ApiResponse({status:201, description:"Thông tin profile", type: Profile})
    @ApiResponse({status:401, description: "chưa xác thực"})
    @ApiResponse({status: 403, description: "Không có quyền truy cập"})
    @ApiResponse({status: 404, description:"Không tìm thấy profile"})
    @Get(':id')
    getProfileById(@Param('id') id: string){
        this.profileService.getProfileById(parseInt(id))
    }

    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @ApiBearerAuth()
    @ApiOperation({summary:'cập nhật profile theo ID '})
    @ApiResponse({status:201, description:"cập nhật profile thành công", type: Profile})
    @ApiResponse({status:401, description: "chưa xác thực"})
    @ApiResponse({status: 403, description: "Không có quyền truy cập"})
    @ApiResponse({status: 404, description:"Không tìm thấy profile"})
    @Put(':id')
    updateProfile(@Param('id') id: string, @Body() dto: UpdateProfileDto){
        this.profileService.updateProfile(parseInt(id), dto)
    }

    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @ApiBearerAuth()
    @ApiOperation({summary:'xóa profile '})
    @ApiResponse({status:201, description:"Xóa thành công profile"})
    @ApiResponse({status:401, description: "chưa xác thực"})
    @ApiResponse({status: 403, description: "Không có quyền truy cập"})
    @ApiResponse({status: 404, description:"Không tìm thấy profile"})
    @Delete(':id')
    deleteProfile(@Param('id') id: string){
        return this.profileService.deleteProfile(parseInt(id))
    }
}