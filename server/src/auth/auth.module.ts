import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtGuard } from './guards/jwt.guard';
import { JwtStrategy } from './guards/jwt.strategy';
import { RolesGuard } from './guards/roles.guard';
import { UserEntity } from './models/user.entity';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { AuthController } from './controllers/auth/auth.controller';
import { UserController } from './controllers/user/user.controller';

@Module({
    imports: [
        JwtModule.registerAsync({
            useFactory: () =>( {
                secret: process.env.jwtSecret,
                signOptions: {
                    expiresIn: '1d'
                }
            })
        }),
        TypeOrmModule.forFeature([
            UserEntity
        ])
    ],
    providers: [
        AuthService,
        UserService,
        RolesGuard,
        JwtStrategy,
        JwtGuard
    ],
    controllers: [AuthController, UserController],
    exports: [
        AuthService,
        UserService
    ]
})
export class AuthModule {}
