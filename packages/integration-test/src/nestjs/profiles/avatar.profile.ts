import type { Mapper, MappingProfile } from 'automapper-core';
import { AutomapperProfile, InjectMapper } from 'automapper-nestj';
import { Injectable } from '@nestjs/common';
import { avatarProfile } from '../../classes/profiles/avatar.profile';

@Injectable()
export class AvatarProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile(): MappingProfile {
        return avatarProfile;
    }
}
