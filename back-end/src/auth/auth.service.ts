import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthDTO } from './auth.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signIn({ email, password: pass }: AuthDTO) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Email or password incorrect');
    }

    const passwordMatch = await compare(pass, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException('Email or password incorrect');
    }

    const token = this.jwtService.sign({});

    const response = {
      user_id: user.user_id,
      token,
    };

    return response;
  }
}
