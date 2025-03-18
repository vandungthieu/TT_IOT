import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateUserDto{
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @IsString()
    name: string

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string
}