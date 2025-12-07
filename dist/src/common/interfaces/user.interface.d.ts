export interface User {
    user_id: number;
    full_name: string;
    email: string;
    password_hash: string;
    language_pref?: string;
    avatar_url?: string;
    phone?: string;
    address?: string;
    date_of_birth?: Date;
    status: 'active' | 'inactive' | 'banned';
    created_at: Date;
    updated_at: Date;
}
export interface UserWithRoles extends User {
    user_roles: {
        role: {
            role_id: number;
            role_name: string;
            display_name?: string;
            description?: string;
            permission: {
                permission: {
                    perm_id: number;
                    perm_key: string;
                    module?: string;
                    description?: string;
                };
            }[];
        };
    }[];
}
export interface AuthenticatedUser {
    user_id: number;
    email: string;
    full_name: string;
    roles: string[];
    permissions: string[];
}
