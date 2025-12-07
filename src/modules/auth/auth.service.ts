import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (user.status !== 'active') {
      throw new UnauthorizedException('Account is not active');
    }

    // Get user roles and permissions
    const userWithRoles = await this.usersService.findByIdWithRoles(
      user.user_id,
    );

    const roles =
      userWithRoles.user_roles?.map((userRole) => userRole.roles.role_name) ||
      [];
    const permissions =
      userWithRoles.user_roles?.flatMap(
        (userRole) =>
          (userRole.roles as any).role_permissions?.map(
            (rolePerm: any) => rolePerm.permissions.perm_key,
          ) || [],
      ) || [];

    // Remove duplicates from permissions array
    const uniquePermissions = [...new Set(permissions)];

    // Log for debugging
    console.log(`🔐 [Auth] User ${user.user_id} (${user.email}) logged in:`);
    console.log(`  - Roles:`, roles);
    console.log(
      `  - Permissions (${uniquePermissions.length}):`,
      uniquePermissions,
    );
    console.log(
      `  - Has lesson.manage.teacher:`,
      uniquePermissions.includes('lesson.manage.teacher'),
    );

    return {
      user_id: user.user_id,
      email: user.email,
      full_name: user.full_name,
      roles,
      permissions: uniquePermissions,
    };
  }

  async login(user: any) {
    const payload: JwtPayload = {
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

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  async register(registerDto: any) {
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
}
