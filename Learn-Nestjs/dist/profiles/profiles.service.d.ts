import { PrismaService } from "src/prisma/prisma.service";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
export declare class ProfilesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createProfile(dto: CreateProfileDto): Promise<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }>;
    getAllProfile(): Promise<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }[]>;
    getProfileById(id: number): Promise<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }>;
    updateProfileById(id: number, dto: UpdateProfileDto): Promise<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }>;
    deleteProfileById(id: number): Promise<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }>;
}
