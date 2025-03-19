import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        email: string;
        name: string;
        password: string;
        id: number;
    }>;
    login(req: any): Promise<{
        access_token: string;
        user: any;
    }>;
    getProfile(req: any): Promise<any>;
}
