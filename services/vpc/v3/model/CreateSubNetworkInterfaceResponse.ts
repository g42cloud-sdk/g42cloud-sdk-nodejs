import { SubNetworkInterface } from './SubNetworkInterface';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class CreateSubNetworkInterfaceResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'sub_network_interface'?: SubNetworkInterface | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateSubNetworkInterfaceResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withSubNetworkInterface(subNetworkInterface: SubNetworkInterface): CreateSubNetworkInterfaceResponse {
        this['sub_network_interface'] = subNetworkInterface;
        return this;
    }
    public set subNetworkInterface(subNetworkInterface: SubNetworkInterface | undefined) {
        this['sub_network_interface'] = subNetworkInterface;
    }
    public get subNetworkInterface() {
        return this['sub_network_interface'];
    }
}