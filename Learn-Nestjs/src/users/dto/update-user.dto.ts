import { IsOptional, IsString } from "class-validator"

export class UpdateUserDto{
    @IsString()
    @IsOptional()
    email?: string

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    password?: string

}