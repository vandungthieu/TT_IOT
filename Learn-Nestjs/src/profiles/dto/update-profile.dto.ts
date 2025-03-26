import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsUrl } from "class-validator";

export class UpdateProfileDto{
    @ApiProperty({description:'tiểu sử user', type:'string', example:"I'm not gay"})
    @IsString()
    @IsOptional()
    bio?: string

    @ApiProperty({description:'url của avatar', type:'string', example:"saygex69.url"})
    @IsString()
    @IsOptional()
    @IsUrl()
    avatar?: string
}