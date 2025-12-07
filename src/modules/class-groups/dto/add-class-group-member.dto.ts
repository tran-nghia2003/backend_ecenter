import { IsIn, IsInt, IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

const MEMBER_STATUSES = ['enrolled', 'dropped', 'completed'] as const;
export type ClassGroupMemberStatus = (typeof MEMBER_STATUSES)[number];

export class AddClassGroupMemberDto {
  @IsInt()
  @IsPositive()
  user_id: number;

  @IsOptional()
  @IsIn(MEMBER_STATUSES)
  status?: ClassGroupMemberStatus;
}

