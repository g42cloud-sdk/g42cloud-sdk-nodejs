import { UpdateServerResult } from './UpdateServerResult';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class UpdateServerResponse extends SdkResponse {
    public server?: UpdateServerResult;
    public constructor() { 
        super();
    }
    public withServer(server: UpdateServerResult): UpdateServerResponse {
        this['server'] = server;
        return this;
    }
}