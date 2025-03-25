import { ApiProperty } from "@nestjs/swagger";

export class Profile{
    @ApiProperty({description:"Mô tả về User",example:"I'm not Gay" })
    bio: string

    @ApiProperty({description:"url của ảnh", example :"saygex69.url"})
    avatar: string
}