import { IsEmail, IsEmpty, IsString } from "class-validator"

export class CreateUserDto{
    @IsEmail()
    @IsEmpty()
    email: string

    @IsEmpty()
    @IsString()
    name: string
}