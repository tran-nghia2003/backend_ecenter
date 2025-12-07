import { PartialType } from '@nestjs/mapped-types';
import { CreateStudyShiftDto } from './create-study-shift.dto';

export class UpdateStudyShiftDto extends PartialType(CreateStudyShiftDto) {}

