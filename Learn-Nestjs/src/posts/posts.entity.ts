import { ApiProperty } from "@nestjs/swagger";

export class Post{
    @ApiProperty({description:"id của user", example: 1})
    userId: number

    @ApiProperty({description:"tiêu đề của bài viết", example:"How to say gex"})
    title: string

    @ApiProperty({description:"nội dung của bài viết", example:"bla bla"})
    content: string
}