
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class CreateTaskResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateTaskResponse {
        this['id'] = id;
        return this;
    }
}