import { IsNotEmpty, IsString, ValidateNested, IsEmail, IsOptional, IsEnum, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class PushInRequest {
  customerIds: Array<string>;
  title: string;
  body: string;
  category?: string;
  type?: string;
  companyId?: string;
  companyClientId?: string;
}
