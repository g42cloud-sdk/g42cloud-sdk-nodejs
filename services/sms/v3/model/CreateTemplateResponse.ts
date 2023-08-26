
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class CreateTemplateResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateTemplateResponse {
        this['id'] = id;
        return this;
    }
}