import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RequirePermissions } from '../decorators/permissions.decorator';
import { Permission } from '../../common/enums/user-role.enum';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const requiredPermissions = this.reflector.getAllAndOverride<Permission[]>(
      'permissions',
      [context.getHandler(), context.getClass()],
    );

    if (!requiredPermissions) {
      return true;
    }

    const { user } = request;

    console.log('🔵 [PermissionsGuard] Checking permissions for:', request.method, request.url);
    console.log('🔵 [PermissionsGuard] Required:', requiredPermissions);
    console.log('🔵 [PermissionsGuard] User:', user?.user_id, user?.email);
    console.log('🔵 [PermissionsGuard] User permissions:', user?.permissions);

    if (!user || !user.permissions) {
      console.error('❌ [PermissionsGuard] User permissions not found');
      throw new ForbiddenException('User permissions not found');
    }

    const hasPermission = requiredPermissions.some((permission) =>
      user.permissions.includes(permission),
    );

    if (!hasPermission) {
      console.error('❌ [PermissionsGuard] Insufficient permissions. Required:', requiredPermissions, 'User has:', user.permissions);
      throw new ForbiddenException('Insufficient permissions');
    }

    console.log('✅ [PermissionsGuard] Permission check passed');
    return true;
  }
}
