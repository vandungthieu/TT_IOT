import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ProfilesController } from "./profiles.controller";
import { ProfileService } from "./profile.service";

@Module({
    imports:[PrismaModule],
    controllers:[ProfilesController],
    providers:[ProfileService]
})
export class ProfilesModule{}