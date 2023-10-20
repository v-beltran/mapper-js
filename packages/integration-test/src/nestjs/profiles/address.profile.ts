import type { Mapper, MappingProfile } from 'automapper-core';
import { AutomapperProfile, InjectMapper } from 'automapper-nestj';
import { Injectable } from '@nestjs/common';
import { addressProfile } from '../../classes/profiles/address.profile';

@Injectable()
export class AddressProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile(): MappingProfile {
        return addressProfile;
    }
}
