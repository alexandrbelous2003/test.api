import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdminModule } from '../admin/admin.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './service/auth.service';
import { LocalStrategy } from './service/local.strategy';

@Module({
  imports: [
    AdminModule,
    PassportModule,
    JwtModule.registerAsync({ 
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>({
        secret:configService.get<string>('JWT_SECRET'),
        signOptions:{expiresIn: configService.get<string>('JWT_EXPIRES_IN')}
      }),
      inject:[ConfigService]
    })
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService,
    LocalStrategy
  ],
})
export class AuthModule {}
