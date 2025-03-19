import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "src/strategies/local.strategy";
import { JwtStrategy } from "src/strategies/jwt.strategy";

@Module({
    imports:[PrismaModule,
        ConfigModule.forRoot(), // load biến mt
        JwtModule.registerAsync({
            imports:[ConfigModule],
            useFactory : async(configService : ConfigService) =>({
                secret : configService.get<string>('JWT_SECRET'),
                signOptions: {expiresIn:'1h'}
            }),
            inject: [ConfigService]
        }),
    ],
    controllers:[AuthController],
    providers:[AuthService, LocalStrategy,JwtStrategy],
    exports: [AuthService]
})
export class AuthModule{}