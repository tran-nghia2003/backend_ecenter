import { SetMetadata } from '@nestjs/common';
import { Permission } from '../../common/enums/user-role.enum';

export const RequirePermissions = (...permissions: Permission[]) =>
  SetMetadata('permissions', permissions);
