import { Vpc } from './Vpc';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ShowVpcResponse extends SdkResponse {
    private 'request_id'?: string;
    public vpc?: Vpc;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowVpcResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withVpc(vpc: Vpc): ShowVpcResponse {
        this['vpc'] = vpc;
        return this;
    }
}