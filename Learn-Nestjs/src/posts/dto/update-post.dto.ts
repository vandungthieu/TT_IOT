import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsOptional, IsString } from "class-validator";

export class UpdatePostDto{
    @ApiProperty({description:'tiêu đề bài viết', type:'string', example: "How to say gex"})
    @IsString()
    @IsOptional()
    title?: string

    @ApiProperty({description:'Nôi dung bài viết', type:'string', example:"Bla bla"})
    @IsString()
    @IsOptional()
    content?: string
}