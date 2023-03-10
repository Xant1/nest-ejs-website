import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { SECRET_KEY } from '../config';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: SECRET_KEY || 'SECRET_KEY',
      signOptions: {
        expiresIn: 86400,
      },
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
