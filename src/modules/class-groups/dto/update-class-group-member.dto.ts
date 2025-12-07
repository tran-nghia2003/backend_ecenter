import { IsIn, IsOptional } from 'class-validator';
import { ClassGroupMemberStatus } from './add-class-group-member.dto';

export class UpdateClassGroupMemberDto {
  @IsOptional()
  @IsIn(['enrolled', 'dropped', 'completed'])
  status?: ClassGroupMemberStatus;
}

