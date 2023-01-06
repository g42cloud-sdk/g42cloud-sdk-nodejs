
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class PublishAppMessageResponse extends SdkResponse {
    private 'message_id'?: string | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withMessageId(messageId: string): PublishAppMessageResponse {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId() {
        return this['message_id'];
    }
    public withRequestId(requestId: string): PublishAppMessageResponse {
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