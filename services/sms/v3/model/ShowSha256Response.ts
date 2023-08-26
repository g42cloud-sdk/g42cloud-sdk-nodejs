
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ShowSha256Response extends SdkResponse {
    public value?: string;
    public constructor() { 
        super();
    }
    public withValue(value: string): ShowSha256Response {
        this['value'] = value;
        return this;
    }
}