import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/user.entity";

export class Posts{
    @ApiProperty({description:"id duy nhất của bài viết", type: 'integer',example: 1})
    id: number

    @ApiProperty({description:"id của user",type:'integer', example: 1})
    userId: number

    @ApiProperty({description:"tiêu đề của bài viết",type:'string', example:"How to say gex"})
    title: string

    @ApiProperty({description:"nội dung của bài viết",type:'string', example:"bla bla"})
    content: string

    // @ApiProperty({type :()=> User, description:"Người đăng bài"})
    // user : User
}