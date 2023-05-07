import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  CreateUserDto,
  CreateUserResponseDto,
  GetUserResponseDto,
  UpdateUserDto,
  UpdateUserResponseDto,
} from './user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  ApiBadGatewayResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadGatewayResponse({ description: 'User not found' })
  @ApiOkResponse({ type: GetUserResponseDto })
  async get(@Param('id') id: string): Promise<GetUserResponseDto> {
    return await this.userService.get(id);
  }

  @Post()
  @ApiOkResponse({ type: CreateUserResponseDto })
  @ApiBadGatewayResponse({ description: 'User already exists' })
  async create(@Body() data: CreateUserDto): Promise<CreateUserResponseDto> {
    return await this.userService.create(data);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadGatewayResponse({ description: 'User not found' })
  @ApiOkResponse({ type: UpdateUserResponseDto })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
  ): Promise<UpdateUserResponseDto> {
    return await this.userService.update(id, data);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadGatewayResponse({ description: 'User not found' })
  @ApiOkResponse()
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}
