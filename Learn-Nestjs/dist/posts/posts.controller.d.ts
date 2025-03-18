import { PostService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostService);
    createPost(dto: CreatePostDto): Promise<{
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
    getAllPosts(): Promise<{
        id: number;
        userId: number;
        title: string;
        content: string;
    }[]>;
    getPostById(postId: string): Promise<{
        id: number;
        userId: number;
        title: string;
        content: string;
    }>;
    updatePostById(postId: string, dto: UpdatePostDto): Promise<{
        id: number;
        userId: number;
        title: string;
        content: string;
    }>;
    deletePostById(postId: string): Promise<{
        id: number;
        userId: number;
        title: string;
        content: string;
    }>;
}
