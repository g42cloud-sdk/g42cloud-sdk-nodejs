
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class DeleteApplicationResponse extends SdkResponse {
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): DeleteApplicationResponse {
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