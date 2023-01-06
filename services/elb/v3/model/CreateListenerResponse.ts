import { Listener } from './Listener';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class CreateListenerResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public listener?: Listener;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateListenerResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withListener(listener: Listener): CreateListenerResponse {
        this['listener'] = listener;
        return this;
    }
}