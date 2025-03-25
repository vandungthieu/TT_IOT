import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, MinLength } from "class-validator";

export class UpdateUserDto{
    @ApiProperty({description:"tên user", example:"User1"})
    @IsString()
    @IsOptional()
    name?: string

    @ApiProperty({description:"mật khẩu user, tối thiểu 6 ký tự", example:"123456"})
    @IsString()
    @IsOptional()
    @MinLength(6)
    password?: string
}