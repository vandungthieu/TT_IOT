import { PrismaService } from "src/prisma/prisma.service";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
export declare class ProfileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createProfile(dto: CreateProfileDto): import(".prisma/client").Prisma.Prisma__ProfileClient<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    getAllProfile(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }[]>;
    getProfileById(userId: number): import(".prisma/client").Prisma.Prisma__ProfileClient<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    updateProfile(userId: number, dto: UpdateProfileDto): import(".prisma/client").Prisma.Prisma__ProfileClient<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    deleteProfile(userId: number): import(".prisma/client").Prisma.Prisma__ProfileClient<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
