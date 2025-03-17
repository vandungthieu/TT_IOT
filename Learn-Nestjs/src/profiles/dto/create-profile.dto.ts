import { IsInt, IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateProfileDto{
    @IsInt()
    userId: number

    @IsString()
    @IsNotEmpty()
    bio: string

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    avatar: string
}