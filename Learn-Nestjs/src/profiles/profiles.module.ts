import { Module } from "@nestjs/common";
import { ProfilesService } from "./profiles.service";
import { ProfileController } from "./profiles.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports:[PrismaModule],
    controllers:[ProfileController],
    providers:[ProfilesService],
})
export class ProfilesModule{}