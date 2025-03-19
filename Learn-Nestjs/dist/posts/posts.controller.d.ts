import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./posts.service";
import { UpdatePostDto } from "./dto/update-post.dto";
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
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
    getPostById(id: string): Promise<{
        id: number;
        userId: number;
        title: string;
        content: string;
    }>;
    getPostByUserId(userId: string): Promise<{
        id: number;
        userId: number;
        title: string;
        content: string;
    }[]>;
    updatePostById(id: string, dto: UpdatePostDto): Promise<{
        id: number;
        userId: number;
        title: string;
        content: string;
    }>;
    deletePostById(id: string): Promise<{
        id: number;
        userId: number;
        title: string;
        content: string;
    }>;
}
