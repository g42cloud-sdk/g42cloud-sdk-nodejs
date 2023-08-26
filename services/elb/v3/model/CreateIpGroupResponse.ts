import { IpGroup } from './IpGroup';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class CreateIpGroupResponse extends SdkResponse {
    public ipgroup?: IpGroup;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withIpgroup(ipgroup: IpGroup): CreateIpGroupResponse {
        this['ipgroup'] = ipgroup;
        return this;
    }
    public withRequestId(requestId: string): CreateIpGroupResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}