import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { RegisterDto } from "./dto/register.dto";
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        email: string;
        name: string;
        password: string;
        id: number;
    }>;
    validateUser(email: string, password: string): Promise<{
        email: string;
        name: string;
        id: number;
    }>;
    createToken(user: any): Promise<{
        access_token: string;
        user: any;
    }>;
}
