import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto, req: any): Promise<{
        access_token: string;
        user: {
            user_id: any;
            email: any;
            full_name: any;
            roles: any;
            permissions: any;
        };
    }>;
    register(registerDto: RegisterDto): Promise<{
        message: string;
        user: {
            user_id: number;
            email: string;
            full_name: string;
        };
    }>;
    getProfile(req: any): any;
    logout(): {
        message: string;
    };
}
