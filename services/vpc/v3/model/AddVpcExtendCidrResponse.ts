import { Vpc } from './Vpc';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class AddVpcExtendCidrResponse extends SdkResponse {
    public vpc?: Vpc;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withVpc(vpc: Vpc): AddVpcExtendCidrResponse {
        this['vpc'] = vpc;
        return this;
    }
    public withRequestId(requestId: string): AddVpcExtendCidrResponse {
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