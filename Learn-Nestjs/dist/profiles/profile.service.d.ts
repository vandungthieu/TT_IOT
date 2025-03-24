import { PrismaService } from "src/prisma/prisma.service";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
export declare class ProfileService {
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
    getProfileById(userId: number): Promise<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }>;
    updateProfile(userId: number, dto: UpdateProfileDto): Promise<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }>;
    deleteProfile(userId: number): Promise<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }>;
}
