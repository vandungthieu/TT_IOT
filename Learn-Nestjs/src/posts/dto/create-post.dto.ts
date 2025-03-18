import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreatePostDto{
    @IsInt()
    @IsNotEmpty()
    userId: number

    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    content: string
}