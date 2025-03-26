import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/user.entity";

export class Profile{
    @ApiProperty({description: "id duy nhất của hồ sơ",type:'integer', example:1})
    id: number
    
    @ApiProperty({description:"ID của người dùng sở hữu hồ sơ",type: "integer", example: 1})
    userId: number

    @ApiProperty({description:"Mô tả về User",type :"string", example:"I'm " })
    bio: string

    @ApiProperty({description:"url của ảnh",type:'string', example :"say.url"})
    avatar: string

    // @ApiProperty({type :()=> User, description:"Người sở hữu hồ sơ"})
    // user: User

}