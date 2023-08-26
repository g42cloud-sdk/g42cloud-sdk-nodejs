import { Logtank } from './Logtank';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class CreateLogtankResponse extends SdkResponse {
    public logtank?: Logtank;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withLogtank(logtank: Logtank): CreateLogtankResponse {
        this['logtank'] = logtank;
        return this;
    }
    public withRequestId(requestId: string): CreateLogtankResponse {
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