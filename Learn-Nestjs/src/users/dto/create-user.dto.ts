import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateUserDto{
    @ApiProperty({description:"email của người dùng", example:"User@example.com"})
    @IsEmail()
    @IsNotEmpty()
    email: string

    @ApiProperty({description:"tên user", example:"User1"})
    @IsNotEmpty()
    @IsString()
    name: string

    @ApiProperty({description:"mật khẩu user, tối thiểu 6 ký tự", example:"123456"})
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string
}