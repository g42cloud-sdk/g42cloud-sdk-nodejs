import { DisassociateServerVirtualIpRequestBody } from './DisassociateServerVirtualIpRequestBody';


export class DisassociateServerVirtualIpRequest {
    private 'nic_id'?: string;
    public body?: DisassociateServerVirtualIpRequestBody;
    public constructor(nicId?: string) { 
        this['nic_id'] = nicId;
    }
    public withNicId(nicId: string): DisassociateServerVirtualIpRequest {
        this['nic_id'] = nicId;
        return this;
    }
    public set nicId(nicId: string  | undefined) {
        this['nic_id'] = nicId;
    }
    public get nicId(): string | undefined {
        return this['nic_id'];
    }
    public withBody(body: DisassociateServerVirtualIpRequestBody): DisassociateServerVirtualIpRequest {
        this['body'] = body;
        return this;
    }
}