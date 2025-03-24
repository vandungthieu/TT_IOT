import { CreateProfileDto } from "./dto/create-profile.dto";
import { ProfileService } from "./profile.service";
import { UpdateProfileDto } from "./dto/update-profile.dto";
export declare class ProfilesController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    createProfile(dto: CreateProfileDto): void;
    getAllProfile(): void;
    getProfileById(id: string): void;
    updateProfile(id: string, dto: UpdateProfileDto): void;
    deleteProfile(id: string): Promise<{
        id: number;
        userId: number;
        bio: string;
        avatar: string;
    }>;
}
