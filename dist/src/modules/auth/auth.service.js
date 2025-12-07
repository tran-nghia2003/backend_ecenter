"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    usersService;
    jwtService;
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validateUser(email, password) {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (user.status !== 'active') {
            throw new common_1.UnauthorizedException('Account is not active');
        }
        const userWithRoles = await this.usersService.findByIdWithRoles(user.user_id);
        const roles = userWithRoles.user_roles?.map((userRole) => userRole.roles.role_name) ||
            [];
        const permissions = userWithRoles.user_roles?.flatMap((userRole) => userRole.roles.role_permissions?.map((rolePerm) => rolePerm.permissions.perm_key) || []) || [];
        const uniquePermissions = [...new Set(permissions)];
        console.log(`🔐 [Auth] User ${user.user_id} (${user.email}) logged in:`);
        console.log(`  - Roles:`, roles);
        console.log(`  - Permissions (${uniquePermissions.length}):`, uniquePermissions);
        console.log(`  - Has lesson.manage.teacher:`, uniquePermissions.includes('lesson.manage.teacher'));
        return {
            user_id: user.user_id,
            email: user.email,
            full_name: user.full_name,
            roles,
            permissions: uniquePermissions,
        };
    }
    async login(user) {
        const payload = {
            sub: user.user_id,
            email: user.email,
            roles: user.roles,
            permissions: user.permissions,
        };
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                user_id: user.user_id,
                email: user.email,
                full_name: user.full_name,
                roles: user.roles,
                permissions: user.permissions,
            },
        };
    }
    async hashPassword(password) {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }
    async register(registerDto) {
        const hashedPassword = await this.hashPassword(registerDto.password);
        const user = await this.usersService.create({
            ...registerDto,
            password_hash: hashedPassword,
        });
        return {
            message: 'User registered successfully',
            user: {
                user_id: user.user_id,
                email: user.email,
                full_name: user.full_name,
            },
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map