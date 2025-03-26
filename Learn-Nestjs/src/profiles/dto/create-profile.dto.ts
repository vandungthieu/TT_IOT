import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateProfileDto{
    @ApiProperty({description:'ID của user',type:'integer', example:1})
    @IsInt()
    @IsNotEmpty()
    userId: number

    @ApiProperty({description:'tiểu sử user', type:'string', example:"I'm not Gay"})
    @IsString()
    @IsNotEmpty()
    bio : string

    @ApiProperty({description:'url của ảnh', type:'string', example:"saygex69.url"})
    @IsString()
    @IsNotEmpty()
    @IsUrl()
    avatar: string
}