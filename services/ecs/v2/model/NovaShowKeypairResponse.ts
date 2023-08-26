import { NovaKeypairDetail } from './NovaKeypairDetail';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class NovaShowKeypairResponse extends SdkResponse {
    public keypair?: NovaKeypairDetail;
    public constructor() { 
        super();
    }
    public withKeypair(keypair: NovaKeypairDetail): NovaShowKeypairResponse {
        this['keypair'] = keypair;
        return this;
    }
}