import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { ProfileService } from "./profile.service";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { OwnershipGuard } from "src/auth/guard/ownership.guard";
import { Roles } from "src/auth/decorator/roles.decorator";
import { RolesGuard } from "src/auth/guard/roles.guard";

@Controller('profiles')
export class ProfilesController{
    constructor (private readonly profileService: ProfileService){}

    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @Post()
    createProfile(@Body() dto: CreateProfileDto){
        this.profileService.createProfile(dto)
    }

    @UseGuards(JwtAuthGuard)
    @Roles('ADMIN')
    @Get()
    getAllProfile(){
        this.profileService.getAllProfile()
    }

    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @Get(':id')
    getProfileById(@Param('id') id: string){
        this.profileService.getProfileById(parseInt(id))
    }

    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @Put(':id')
    updateProfile(@Param('id') id: string, @Body() dto: UpdateProfileDto){
        this.profileService.updateProfile(parseInt(id), dto)
    }

    @UseGuards(JwtAuthGuard, OwnershipGuard)
    @Delete(':id')
    deleteProfile(@Param('id') id: string){
        return this.profileService.deleteProfile(parseInt(id))
    }
}