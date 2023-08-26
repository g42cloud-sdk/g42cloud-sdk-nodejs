import { VpcPeering } from './VpcPeering';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class UpdateVpcPeeringResponse extends SdkResponse {
    public peering?: VpcPeering;
    public constructor() { 
        super();
    }
    public withPeering(peering: VpcPeering): UpdateVpcPeeringResponse {
        this['peering'] = peering;
        return this;
    }
}