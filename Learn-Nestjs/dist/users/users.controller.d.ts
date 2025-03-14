import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    createUser(dto: CreateUserDto): Promise<{
        email: string;
        name: string;
        id: number;
    }>;
    getUser(): Promise<{
        email: string;
        name: string;
        id: number;
    }[]>;
    getUserById(id: string): Promise<{
        email: string;
        name: string;
        id: number;
    } | null>;
    updateUser(id: string, dto: UpdateUserDto): Promise<{
        email: string;
        name: string;
        id: number;
    }>;
    deleteUser(id: string): Promise<{
        email: string;
        name: string;
        id: number;
    } | undefined>;
}
