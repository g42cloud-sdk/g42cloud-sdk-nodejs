
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class UpdateServerMetadataResponse extends SdkResponse {
    public metadata?: { [key: string]: string; };
    public constructor() { 
        super();
    }
    public withMetadata(metadata: { [key: string]: string; }): UpdateServerMetadataResponse {
        this['metadata'] = metadata;
        return this;
    }
}