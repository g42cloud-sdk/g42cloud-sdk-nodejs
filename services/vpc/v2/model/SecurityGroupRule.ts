

export class SecurityGroupRule {
    public id?: string;
    public description?: string;
    private 'security_group_id'?: string;
    public direction?: string;
    public ethertype?: string;
    public protocol?: string;
    private 'port_range_min'?: number;
    private 'port_range_max'?: number;
    private 'remote_ip_prefix'?: string;
    private 'remote_group_id'?: string;
    private 'remote_address_group_id'?: string;
    private 'tenant_id'?: string;
    public constructor(id?: string, description?: string, securityGroupId?: string, direction?: string, ethertype?: string, protocol?: string, portRangeMin?: number, portRangeMax?: number, remoteIpPrefix?: string, remoteGroupId?: string, tenantId?: string) { 
        this['id'] = id;
        this['description'] = description;
        this['security_group_id'] = securityGroupId;
        this['direction'] = direction;
        this['ethertype'] = ethertype;
        this['protocol'] = protocol;
        this['port_range_min'] = portRangeMin;
        this['port_range_max'] = portRangeMax;
        this['remote_ip_prefix'] = remoteIpPrefix;
        this['remote_group_id'] = remoteGroupId;
        this['tenant_id'] = tenantId;
    }
    public withId(id: string): SecurityGroupRule {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): SecurityGroupRule {
        this['description'] = description;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): SecurityGroupRule {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withDirection(direction: string): SecurityGroupRule {
        this['direction'] = direction;
        return this;
    }
    public withEthertype(ethertype: string): SecurityGroupRule {
        this['ethertype'] = ethertype;
        return this;
    }
    public withProtocol(protocol: string): SecurityGroupRule {
        this['protocol'] = protocol;
        return this;
    }
    public withPortRangeMin(portRangeMin: number): SecurityGroupRule {
        this['port_range_min'] = portRangeMin;
        return this;
    }
    public set portRangeMin(portRangeMin: number  | undefined) {
        this['port_range_min'] = portRangeMin;
    }
    public get portRangeMin(): number | undefined {
        return this['port_range_min'];
    }
    public withPortRangeMax(portRangeMax: number): SecurityGroupRule {
        this['port_range_max'] = portRangeMax;
        return this;
    }
    public set portRangeMax(portRangeMax: number  | undefined) {
        this['port_range_max'] = portRangeMax;
    }
    public get portRangeMax(): number | undefined {
        return this['port_range_max'];
    }
    public withRemoteIpPrefix(remoteIpPrefix: string): SecurityGroupRule {
        this['remote_ip_prefix'] = remoteIpPrefix;
        return this;
    }
    public set remoteIpPrefix(remoteIpPrefix: string  | undefined) {
        this['remote_ip_prefix'] = remoteIpPrefix;
    }
    public get remoteIpPrefix(): string | undefined {
        return this['remote_ip_prefix'];
    }
    public withRemoteGroupId(remoteGroupId: string): SecurityGroupRule {
        this['remote_group_id'] = remoteGroupId;
        return this;
    }
    public set remoteGroupId(remoteGroupId: string  | undefined) {
        this['remote_group_id'] = remoteGroupId;
    }
    public get remoteGroupId(): string | undefined {
        return this['remote_group_id'];
    }
    public withRemoteAddressGroupId(remoteAddressGroupId: string): SecurityGroupRule {
        this['remote_address_group_id'] = remoteAddressGroupId;
        return this;
    }
    public set remoteAddressGroupId(remoteAddressGroupId: string  | undefined) {
        this['remote_address_group_id'] = remoteAddressGroupId;
    }
    public get remoteAddressGroupId(): string | undefined {
        return this['remote_address_group_id'];
    }
    public withTenantId(tenantId: string): SecurityGroupRule {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
}