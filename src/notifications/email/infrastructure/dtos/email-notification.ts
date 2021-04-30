import { IsNotEmpty, IsString, ValidateNested, IsEmail, IsOptional, IsEnum, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

enum ToTypesEnum {
  to = 'to',
  cc = 'cc',
  bcc = 'bcc',
}

class From {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsOptional()
  readonly name: string;
}

class To {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsOptional()
  readonly name: string;

  @IsString()
  @IsOptional()
  @IsEnum(ToTypesEnum)
  readonly type: string;
}

export class Variable {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}

export class VariablesForRecipient {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsArray()
  @Type(() => Variable)
  @ValidateNested()
  @IsNotEmpty()
  variables: Variable[];
}

export class SendEmailRequest {
  @IsString()
  @IsNotEmpty()
  readonly template: string;

  @IsString()
  @IsNotEmpty()
  readonly subject: string;

  @Type(() => From)
  @ValidateNested()
  @IsNotEmpty()
  from: From;

  @IsArray()
  @Type(() => To)
  @ValidateNested()
  @IsNotEmpty()
  to: To[];

  @IsArray()
  @Type(() => Variable)
  @ValidateNested()
  @IsOptional()
  globalVariables: Variable[];

  @IsArray()
  @Type(() => VariablesForRecipient)
  @ValidateNested()
  @IsOptional()
  variables: VariablesForRecipient[];
}
