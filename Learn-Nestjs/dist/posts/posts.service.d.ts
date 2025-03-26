import { PrismaService } from "src/prisma/prisma.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
export declare class PostsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createPost(dto: CreatePostDto): Promise<{
        title: string;
        id: number;
        userId: number;
        content: string;
    }>;
    getAllPost(): Promise<{
        title: string;
        id: number;
        userId: number;
        content: string;
    }[]>;
    getPostById(id: number): Promise<{
        title: string;
        id: number;
        userId: number;
        content: string;
    }>;
    getPostByUserId(userId: number): Promise<{
        title: string;
        id: number;
        userId: number;
        content: string;
    }[]>;
    updatePostById(id: number, dto: UpdatePostDto): Promise<{
        title: string;
        id: number;
        userId: number;
        content: string;
    }>;
    deletePostById(id: number): Promise<{
        title: string;
        id: number;
        userId: number;
        content: string;
    }>;
}
