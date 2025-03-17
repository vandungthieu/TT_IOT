import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { PostsController } from "./posts.controller";
import { PostService } from "./posts.service";

@Module({
    imports:[PrismaModule],
    controllers:[PostsController],
    providers:[PostService],
})

export class PostModule{}