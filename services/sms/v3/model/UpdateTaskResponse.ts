
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class UpdateTaskResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): UpdateTaskResponse {
        this['body'] = body;
        return this;
    }
}