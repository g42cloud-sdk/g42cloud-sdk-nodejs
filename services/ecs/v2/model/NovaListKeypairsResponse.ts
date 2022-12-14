import { NovaListKeypairsResult } from './NovaListKeypairsResult';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class NovaListKeypairsResponse extends SdkResponse {
    public keypairs?: Array<NovaListKeypairsResult>;
    public constructor() { 
        super();
    }
    public withKeypairs(keypairs: Array<NovaListKeypairsResult>): NovaListKeypairsResponse {
        this['keypairs'] = keypairs;
        return this;
    }
}