
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class RegisterServerResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): RegisterServerResponse {
        this['id'] = id;
        return this;
    }
}