import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from 'src/dto';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('auth')
export class AuthController {
  constructor(private prisma: PrismaService) {}

  @Post('signup')
  async signup(@Body() dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
      select: {
        id: true,
        email: true,
        createAt: true,
      },
    });
    delete user.id;
    return user;
  }
  @Post('signin')
  signin() {
    return { msg: 'ccc' };
  }
}
