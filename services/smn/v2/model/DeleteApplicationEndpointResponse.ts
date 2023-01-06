
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class DeleteApplicationEndpointResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): DeleteApplicationEndpointResponse {
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