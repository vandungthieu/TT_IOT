import { ApiProperty } from "@nestjs/swagger";
import { Posts } from "src/posts/posts.entity";
import { Profile } from "src/profiles/profile.entity";

export class User{
    @ApiProperty({description:"ID duy nhất người dùng",type:'integer', example:1})
    id: number

    @ApiProperty({description:"Tên người dùng",type:'string', example:"User"})
    name: string

    @ApiProperty({description:"Email người dùng", type :"string", example: "user@example.com"})
    email: string

    @ApiProperty({ description: "Mật khẩu người dùng", type: "string", example: "password123", writeOnly: true })
    password: string;

    @ApiProperty({ description: 'Vai trò của người dùng', example: 'USER', enum: ['USER', 'ADMIN'] })
    role: string;

    // @ApiProperty({type : ()=> Profile, required: false, description:'Hồ sơ user có thể null'})
    // profile? : Profile

    // @ApiProperty({type:()=> [Posts], required: false, description: 'Danh sách bài viết của User'})
    // post : Posts[]
}