import { IsEmpty, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdatePostDto{
    @IsEmpty()
    userId?: number

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    title?: string

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    content?: string
}