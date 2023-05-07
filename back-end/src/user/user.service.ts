import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../database/PrismaService';
import { hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {
  CreateUserDto,
  CreateUserResponseDto,
  GetUserResponseDto,
  UpdateUserDto,
  UpdateUserResponseDto,
} from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async create({
    name,
    email,
    password,
  }: CreateUserDto): Promise<CreateUserResponseDto> {
    const userAredyExists = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userAredyExists) {
      throw new HttpException('User already exists', HttpStatus.BAD_GATEWAY);
    }

    const passwordHash = await hash(password, 8);

    const user = await this.prisma.user.create({
      data: {
        email,
        name,
        password: passwordHash,
      },
    });

    const token = this.jwtService.sign({});

    const response = {
      user_id: user.user_id,
      token,
    };

    return response;
  }

  async get(user_id: string): Promise<GetUserResponseDto> {
    const userAredyExists = await this.prisma.user.findFirst({
      where: {
        user_id,
      },
    });

    if (!userAredyExists) {
      throw new HttpException('User not found', HttpStatus.BAD_GATEWAY);
    }

    const response = {
      user_id: userAredyExists.user_id,
      created_at: userAredyExists.created_at,
      email: userAredyExists.email,
      name: userAredyExists.name,
    };

    return response;
  }

  async delete(user_id: string) {
    const userAredyExists = await this.prisma.user.findFirst({
      where: {
        user_id,
      },
    });

    if (!userAredyExists) {
      throw new HttpException('User not found', HttpStatus.BAD_GATEWAY);
    }

    await this.prisma.user.delete({
      where: {
        user_id,
      },
    });

    return HttpStatus.OK;
  }

  async update(
    user_id: string,
    data: UpdateUserDto,
  ): Promise<UpdateUserResponseDto> {
    const userAredyExists = await this.prisma.user.findFirst({
      where: {
        user_id,
      },
    });

    if (!userAredyExists) {
      throw new HttpException('User not found', HttpStatus.BAD_GATEWAY);
    }

    if (data.hasOwnProperty('email')) {
      delete data.email;
    }

    const userUpdated = await this.prisma.user.update({
      where: {
        user_id,
      },
      data,
    });

    const response = {
      user_id: userUpdated.user_id,
      created_at: userUpdated.created_at,
      email: userUpdated.email,
      name: userUpdated.name,
    };

    return response;
  }
}
