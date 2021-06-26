import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminRepository } from 'src/modules/admin/services/admin.repository';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService,private adminRepository: AdminRepository){
        
    }
    
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
      return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
      return (req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('refresh')
  async refresh(@Request() req) {
    const admin = await this.adminRepository.find(req.user.id);
      return this.authService.login(admin);
  }
  
}