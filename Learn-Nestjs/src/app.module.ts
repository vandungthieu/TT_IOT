import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from "./middleware/logger.middleware";
import { PostModule } from "./posts/posts.module";
import { ProfilesModule } from "./profiles/profiles.module";
import { AuthModule } from "./auth/auth.module";
import { AuthMiddleware } from "./middleware/auth.middleware";

@Module({
  imports: [UsersModule, PostModule, ProfilesModule, AuthModule],
  controllers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'users/*', method: RequestMethod.ALL },
        { path: 'posts/*', method: RequestMethod.ALL },
        { path: 'profiles/*', method: RequestMethod.ALL }, 
      );
  }
}