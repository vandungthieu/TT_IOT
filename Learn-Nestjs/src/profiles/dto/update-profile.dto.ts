import { IsEmpty, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateProfileDto{
    @IsEmpty()
    userId?: number

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    bio?: string

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    avatar?: string
}