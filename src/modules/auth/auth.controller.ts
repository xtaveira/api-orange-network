import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Param,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SignInDto } from './dto/sign-in.dto'; // Certifique-se de criar este DTO

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: SignInDto) {
    return await this.authService.signIn(
      signInDto.orangeId,
      signInDto.password,
    );
  }

  @UseGuards(AuthGuard)
  @Get('profile/:orangeId')
  async getProfile(@Param('orangeId') orangeId: string) {
    return await this.authService.getMyProfile(orangeId);
  }
}
