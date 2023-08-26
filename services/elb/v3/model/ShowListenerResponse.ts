import { Listener } from './Listener';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ShowListenerResponse extends SdkResponse {
    private 'request_id'?: string;
    public listener?: Listener;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowListenerResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withListener(listener: Listener): ShowListenerResponse {
        this['listener'] = listener;
        return this;
    }
}