

export class FixedIp {
    private 'ip_address'?: string;
    private 'subnet_id'?: string;
    public constructor() { 
    }
    public withIpAddress(ipAddress: string): FixedIp {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withSubnetId(subnetId: string): FixedIp {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
}