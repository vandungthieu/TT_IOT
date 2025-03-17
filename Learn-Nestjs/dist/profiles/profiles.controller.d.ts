import { ProfilesService } from "./profiles.service";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfilesService);
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
    getProfileById(id: string): Promise<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }>;
    updateProfile(id: string, dto: UpdateProfileDto): Promise<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }>;
    deleteProfile(id: string): Promise<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }>;
}
