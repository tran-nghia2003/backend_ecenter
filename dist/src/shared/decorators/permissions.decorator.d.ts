import { Permission } from '../../common/enums/user-role.enum';
export declare const RequirePermissions: (...permissions: Permission[]) => import("@nestjs/common").CustomDecorator<string>;
