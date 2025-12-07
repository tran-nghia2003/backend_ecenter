import { UserStatus } from '../../../common/enums/user-role.enum';
export declare class CreateUserDto {
    full_name: string;
    email: string;
    password_hash: string;
    language_pref?: string;
    avatar_url?: string;
    phone?: string;
    address?: string;
    date_of_birth?: Date;
    status?: UserStatus;
}
