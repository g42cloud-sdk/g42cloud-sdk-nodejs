import { IpGroup } from './IpGroup';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ShowIpGroupResponse extends SdkResponse {
    public ipgroup?: IpGroup;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withIpgroup(ipgroup: IpGroup): ShowIpGroupResponse {
        this['ipgroup'] = ipgroup;
        return this;
    }
    public withRequestId(requestId: string): ShowIpGroupResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}