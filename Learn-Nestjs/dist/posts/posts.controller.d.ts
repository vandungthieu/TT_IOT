import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./posts.service";
import { UpdatePostDto } from "./dto/update-post.dto";
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
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
    getPostById(id: string): Promise<{
        title: string;
        id: number;
        userId: number;
        content: string;
    }>;
    getPostByUserId(userId: string): Promise<{
        title: string;
        id: number;
        userId: number;
        content: string;
    }[]>;
    updatePostById(id: string, dto: UpdatePostDto): Promise<{
        title: string;
        id: number;
        userId: number;
        content: string;
    }>;
    deletePostById(id: string): Promise<{
        title: string;
        id: number;
        userId: number;
        content: string;
    }>;
}
