// eslint-disable-next-line prettier/prettier
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  signin() {
    return { msg: 'Signed in' };
  }
  signup() {
    return { msg: 'Signed up' };
  }
}
