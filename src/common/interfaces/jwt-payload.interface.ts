export interface JwtPayload {
  sub: number; // user_id
  email: string;
  roles: string[];
  permissions: string[];
  iat?: number;
  exp?: number;
}
