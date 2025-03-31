
import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from "./middleware/logger.middleware";
import { PostsModule } from "./posts/posts.module";
import { ProfilesModule } from "./profiles/profile.module";
import { AuthModule } from "./auth/auth.module";
import { PrismaModule } from "./prisma/prisma.module";
import { EnvCheckMiddleware } from "./middleware/EnvCheck.middleware";
import { ConfigModule } from "@nestjs/config";
import session from "express-session";



@Module({
  imports: [UsersModule, PostsModule, ProfilesModule, AuthModule, PrismaModule,
    ConfigModule.forRoot()
  ],

  providers:[
    {
      provide: 'APP_SESSION',
      useFactory:()=>{
        return session({
          secret: process.env.SESSION_SECRET||'abc',
          resave: false,
          saveUninitialized: false,
          cookie:{
            secure:process.env.NODE_ENV === 'production',
            maxAge: 1000*60*60*24
          }
        })
      }
    }
  ]
})

export class AppModule{
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(EnvCheckMiddleware)
    .forRoutes('*')
    .apply(LoggerMiddleware)
    .forRoutes({path:'*', method:RequestMethod.ALL})
  }
}