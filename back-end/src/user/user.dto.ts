import { ApiProperty } from '@nestjs/swagger';

export class GetUserResponseDto {
  @ApiProperty()
  user_id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;
}

export class CreateUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  password: string;
}

export class CreateUserResponseDto {
  @ApiProperty()
  user_id: string;

  @ApiProperty()
  token: string;
}

export class UpdateUserDto {
  @ApiProperty()
  name: string;

  email?: string;

  @ApiProperty()
  password: string;
}

export class UpdateUserResponseDto extends GetUserResponseDto {}
