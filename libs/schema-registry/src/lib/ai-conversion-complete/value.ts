import { IsBoolean, IsString } from "class-validator";

export class Value {
  @IsString()
  userActionId!: string;

  @IsString()
  requestUniqueId!: string;

  @IsBoolean()
  success!: boolean;

  @IsString()
  result?: string;

  @IsString()
  errorMessage?: string;
}
