import { OsVersionResponse } from './OsVersionResponse';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListVersionsResponse extends SdkResponse {
    public versions?: Array<OsVersionResponse>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<OsVersionResponse>): ListVersionsResponse {
        this['versions'] = versions;
        return this;
    }
}