import { Request,Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body('usermail') usermail:string, @Body('fullName') fullName: string, @Body('age') age: string,
           @Body('gender') gender: string, @Body('phoneNumber') phoneNumber: string,@Body('password') password: string) {
    return this.authService.register(usermail,fullName,age,gender,phoneNumber,password);
  }

  @Post('login')
  login(@Body('usermail') usermail: string, @Body('password') password: string) {
    return this.authService.login(usermail, password);
  }

  @Post('logout')
  @UseGuards(AuthGuard('jwt'))
  logout(@Request() req) {
    const token = req.headers.authorization.split(' ')[1];
    return this.authService.logout(token);
  }
}
