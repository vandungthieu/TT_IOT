import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class RegisterDto{
    
    @ApiProperty({description:"email đăng nhập", type: "string", example:"user@example.com"})
    @IsEmail()
    @IsNotEmpty()
    email : string

    @ApiProperty({description:"mật khẩu đăng nhập (tối thiểu 6 ký tự)", type: "string", example:"123456"})
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password : string

    @ApiProperty({description:"tên user", type: "string", example:'User1'})
    @IsString()
    @IsNotEmpty()
    name: string
}