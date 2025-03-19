import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createUser(dto: CreateUserDto): Promise<{
        email: string;
        name: string;
        password: string;
        id: number;
    }>;
    getUser(): Promise<{
        email: string;
        name: string;
        password: string;
        id: number;
    }[]>;
    getUserById(id: number): Promise<{
        email: string;
        name: string;
        password: string;
        id: number;
    } | null>;
    updateUser(id: number, dto: UpdateUserDto): Promise<{
        email: string;
        name: string;
        password: string;
        id: number;
    }>;
    deleteUser(id: number): Promise<{
        email: string;
        name: string;
        password: string;
        id: number;
    } | undefined>;
}
