import { CreateProfileDto } from "./dto/create-profile.dto";
import { ProfileService } from "./profile.service";
import { UpdateProfileDto } from "./dto/update-profile.dto";
export declare class ProfilesController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    createProfile(dto: CreateProfileDto): void;
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
    updateProfile(id: number, dto: UpdateProfileDto): Promise<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }>;
    deleteProfile(id: number): Promise<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }>;
}
