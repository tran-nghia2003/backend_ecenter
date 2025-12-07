import { IsEnum, IsOptional, IsString } from 'class-validator';

export enum ApprovalStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

export class ApproveLessonDto {
  @IsEnum(ApprovalStatus)
  approval_status: ApprovalStatus;

  @IsOptional()
  @IsString()
  review_note?: string;
}

