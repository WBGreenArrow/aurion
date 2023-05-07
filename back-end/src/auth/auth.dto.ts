import { ApiProperty } from '@nestjs/swagger';
import { CreateUserResponseDto } from './../user/user.dto';
export class AuthDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export class AuthResponseDto extends CreateUserResponseDto {}
