import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    login(req: any): Promise<{
        access_token: string;
        user: any;
    }>;
}
