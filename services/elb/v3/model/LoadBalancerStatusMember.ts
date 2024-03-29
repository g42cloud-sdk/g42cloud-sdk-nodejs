

export class LoadBalancerStatusMember {
    private 'provisioning_status'?: string;
    public address?: string;
    private 'protocol_port'?: number;
    public id?: string;
    private 'operating_status'?: string;
    public constructor() { 
    }
    public withProvisioningStatus(provisioningStatus: string): LoadBalancerStatusMember {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string  | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus(): string | undefined {
        return this['provisioning_status'];
    }
    public withAddress(address: string): LoadBalancerStatusMember {
        this['address'] = address;
        return this;
    }
    public withProtocolPort(protocolPort: number): LoadBalancerStatusMember {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withId(id: string): LoadBalancerStatusMember {
        this['id'] = id;
        return this;
    }
    public withOperatingStatus(operatingStatus: string): LoadBalancerStatusMember {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: string  | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus(): string | undefined {
        return this['operating_status'];
    }
}