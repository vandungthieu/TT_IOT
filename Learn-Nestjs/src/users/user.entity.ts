import { ApiProperty } from "@nestjs/swagger";

export class User{
    @ApiProperty({description:"ID duy nhất người dùng", example:"1"})
    id: number

    @ApiProperty({description:"Tên người dùng", example:"User"})
    name: string

    @ApiProperty({description:"Email người dùng", example: "user@example.com"})
    emai: string

    @ApiProperty({ description: 'Vai trò của người dùng', example: 'USER', enum: ['USER', 'ADMIN'] })
    role: string;
}