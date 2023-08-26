
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ShowSubNetworkInterfacesQuantityResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'sub_network_interfaces'?: number;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowSubNetworkInterfacesQuantityResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSubNetworkInterfaces(subNetworkInterfaces: number): ShowSubNetworkInterfacesQuantityResponse {
        this['sub_network_interfaces'] = subNetworkInterfaces;
        return this;
    }
    public set subNetworkInterfaces(subNetworkInterfaces: number  | undefined) {
        this['sub_network_interfaces'] = subNetworkInterfaces;
    }
    public get subNetworkInterfaces(): number | undefined {
        return this['sub_network_interfaces'];
    }
}