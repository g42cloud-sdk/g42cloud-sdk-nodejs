
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class UpdateMigprojectResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): UpdateMigprojectResponse {
        this['body'] = body;
        return this;
    }
}