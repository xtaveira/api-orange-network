import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    orangeId: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.checkUser(orangeId);

    // Compare passwords securely here if passwords are hashed
    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.name, orangeId: user.orangeId };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async getMyProfile(orangeId: string) {
    // Ensure the `findOne` method is awaited
    const user = await this.usersService.findOne(orangeId);
    return user;
  }
}
