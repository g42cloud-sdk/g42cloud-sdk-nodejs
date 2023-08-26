import { SubNetworkInterface } from './SubNetworkInterface';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ShowSubNetworkInterfaceResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'sub_network_interface'?: SubNetworkInterface;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowSubNetworkInterfaceResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSubNetworkInterface(subNetworkInterface: SubNetworkInterface): ShowSubNetworkInterfaceResponse {
        this['sub_network_interface'] = subNetworkInterface;
        return this;
    }
    public set subNetworkInterface(subNetworkInterface: SubNetworkInterface  | undefined) {
        this['sub_network_interface'] = subNetworkInterface;
    }
    public get subNetworkInterface(): SubNetworkInterface | undefined {
        return this['sub_network_interface'];
    }
}