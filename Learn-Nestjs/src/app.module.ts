

import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from "./middleware/logger.middleware";
import { PostsModule } from "./posts/posts.module";
import { ProfilesModule } from "./profiles/profile.module";



@Module({
  imports: [UsersModule, PostsModule, ProfilesModule]
})

export class AppModule{
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(LoggerMiddleware)
    .forRoutes({path:'*', method:RequestMethod.ALL})
  }
}