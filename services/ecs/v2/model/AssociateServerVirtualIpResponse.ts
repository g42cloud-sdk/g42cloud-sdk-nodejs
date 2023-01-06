
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class AssociateServerVirtualIpResponse extends SdkResponse {
    private 'port_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withPortId(portId: string): AssociateServerVirtualIpResponse {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string | undefined) {
        this['port_id'] = portId;
    }
    public get portId() {
        return this['port_id'];
    }
}