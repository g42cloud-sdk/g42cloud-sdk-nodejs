

export class LoadBalancerStatusL7Rule {
    public id?: string;
    public type?: string;
    private 'provisioning_status'?: string;
    public constructor(id?: string, type?: string, provisioningStatus?: string) { 
        this['id'] = id;
        this['type'] = type;
        this['provisioning_status'] = provisioningStatus;
    }
    public withId(id: string): LoadBalancerStatusL7Rule {
        this['id'] = id;
        return this;
    }
    public withType(type: string): LoadBalancerStatusL7Rule {
        this['type'] = type;
        return this;
    }
    public withProvisioningStatus(provisioningStatus: string): LoadBalancerStatusL7Rule {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string  | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus(): string | undefined {
        return this['provisioning_status'];
    }
}