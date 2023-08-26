
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class UpdateNetworkCheckInfoResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): UpdateNetworkCheckInfoResponse {
        this['body'] = body;
        return this;
    }
}