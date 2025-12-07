import { AuthenticatedUser } from './user.interface';

export interface RequestWithUser extends Request {
  user: AuthenticatedUser;
}
