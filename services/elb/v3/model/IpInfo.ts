

export class IpInfo {
    public ip?: string;
    public description?: string;
    public constructor(ip?: string, description?: string) { 
        this['ip'] = ip;
        this['description'] = description;
    }
    public withIp(ip: string): IpInfo {
        this['ip'] = ip;
        return this;
    }
    public withDescription(description: string): IpInfo {
        this['description'] = description;
        return this;
    }
}