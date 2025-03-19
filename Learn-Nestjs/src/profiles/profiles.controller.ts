import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { ProfileService } from "./profile.service";
import { UpdateProfileDto } from "./dto/update-profile.dto";

@Controller('profiles')
export class ProfilesController{
    constructor (private readonly profileService: ProfileService){}

    @Post()
    createProfile(@Body() dto: CreateProfileDto){
        this.profileService.createProfile(dto)
    }

    @Get()
    getAllProfile(){
        this.profileService.getAllProfile()
    }

    @Get(':id')
    getProfileById(@Param('id') id: string){
        this.profileService.getProfileById(parseInt(id))
    }

    @Put(':id')
    updateProfile(@Param('id') id: string, @Body() dto: UpdateProfileDto){
        this.profileService.updateProfile(parseInt(id), dto)
    }

    @Delete(':id')
    deleteProfile(@Param('id') id: string){
        return this.profileService.deleteProfile(parseInt(id))
    }
}