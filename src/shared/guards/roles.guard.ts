import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '../decorators/roles.decorator';
import { UserRole } from '../../common/enums/user-role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(Roles, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const { user } = request;

    console.log('🟡 [RolesGuard] Checking roles for:', request.method, request.url);
    console.log('🟡 [RolesGuard] Required:', requiredRoles);
    console.log('🟡 [RolesGuard] User:', user?.user_id, user?.email);
    console.log('🟡 [RolesGuard] User roles:', user?.roles);

    if (!user || !user.roles) {
      console.error('❌ [RolesGuard] User roles not found');
      throw new ForbiddenException('User roles not found');
    }

    const hasRole = requiredRoles.some((role) => user.roles.includes(role));

    if (!hasRole) {
      console.error('❌ [RolesGuard] Insufficient roles. Required:', requiredRoles, 'User has:', user.roles);
      throw new ForbiddenException('Insufficient permissions');
    }

    console.log('✅ [RolesGuard] Role check passed');
    return true;
  }
}
