import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        user: {
            user_id: any;
            email: any;
            full_name: any;
            roles: any;
            permissions: any;
        };
    }>;
    hashPassword(password: string): Promise<string>;
    register(registerDto: any): Promise<{
        message: string;
        user: {
            user_id: number;
            email: string;
            full_name: string;
        };
    }>;
}
