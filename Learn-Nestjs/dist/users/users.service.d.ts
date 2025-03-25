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
        role: import(".prisma/client").$Enums.Role;
    }>;
    createAdmin(dto: CreateUserDto): Promise<{
        email: string;
        name: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
    }>;
    getUser(): Promise<{
        email: string;
        name: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
    getUserById(id: number): Promise<{
        email: string;
        name: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
    }>;
    updateUser(id: number, dto: UpdateUserDto): Promise<{
        email: string;
        name: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
    }>;
    deleteUser(id: number): Promise<{
        email: string;
        name: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
    }>;
    deleteAll(): Promise<{
        message: string;
    }>;
}
