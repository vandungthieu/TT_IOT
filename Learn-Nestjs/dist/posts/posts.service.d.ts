import { PrismaService } from "src/prisma/prisma.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
export declare class PostsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createPost(dto: CreatePostDto): Promise<{
        id: number;
        userId: number;
        title: string;
        content: string;
    }>;
    getAllPost(): Promise<{
        id: number;
        userId: number;
        title: string;
        content: string;
    }[]>;
    getPostById(id: number): Promise<{
        id: number;
        userId: number;
        title: string;
        content: string;
    }>;
    getPostByUserId(userId: number): Promise<{
        id: number;
        userId: number;
        title: string;
        content: string;
    }[]>;
    updatePostById(id: number, dto: UpdatePostDto): Promise<{
        id: number;
        userId: number;
        title: string;
        content: string;
    }>;
    deletePostById(id: number): Promise<{
        id: number;
        userId: number;
        title: string;
        content: string;
    }>;
}
