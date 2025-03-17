import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProfilesService } from "./profiles.service";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";

@Controller('profiles')
export class ProfileController{
    constructor(private readonly profileService: ProfilesService){}

    @Post()
    createProfile(@Body() dto:CreateProfileDto){
        return this.profileService.createProfile(dto)
    }

    @Get()
    getAllProfile(){
        return this.profileService.getAllProfile()
    }

    @Get(':id')
    getProfileById(@Param('id') id: string){
        return this.profileService.getProfileById(parseInt(id))
    }

    @Put(':id')
    updateProfile(@Param('id') id : string, @Body() dto: UpdateProfileDto){
        return this.profileService.updateProfileById(parseInt(id), dto)
    }

    @Delete(':id')
    deleteProfile(@Param('id') id: string){
        return this.profileService.deleteProfileById(parseInt(id))
    }
    
}