
import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from "./middleware/logger.middleware";
import { PostsModule } from "./posts/posts.module";
import { ProfilesModule } from "./profiles/profile.module";
import { AuthModule } from "./auth/auth.module";
import { PrismaModule } from "./prisma/prisma.module";



@Module({
  imports: [UsersModule, PostsModule, ProfilesModule,AuthModule, PrismaModule]
})

export class AppModule{
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(LoggerMiddleware)
    .forRoutes({path:'*', method:RequestMethod.ALL})
  }
}