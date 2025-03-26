import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreatePostDto{
    @ApiProperty({description: "id của người dùng", type: "integer", example: 1})
    @IsInt()
    @IsNotEmpty()
    userId: number

    @ApiProperty({description:'tiêu đề bài viết', type:'string', example: "How to say gex"})
    @IsString()
    @IsNotEmpty()
    title: string

    @ApiProperty({description:'Nôi dung bài viết', type:'string', example:"Bla bla"})
    @IsString()
    @IsNotEmpty()
    content: string
}