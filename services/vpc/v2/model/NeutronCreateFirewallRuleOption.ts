

export class NeutronCreateFirewallRuleOption {
    public name?: string;
    public description?: string;
    public protocol?: string;
    public action?: NeutronCreateFirewallRuleOptionActionEnum | string;
    private 'ip_version'?: number;
    private 'destination_ip_address'?: string;
    private 'destination_port'?: string;
    private 'source_ip_address'?: string;
    private 'source_port'?: string;
    public enabled?: boolean;
    public constructor() { 
    }
    public withName(name: string): NeutronCreateFirewallRuleOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): NeutronCreateFirewallRuleOption {
        this['description'] = description;
        return this;
    }
    public withProtocol(protocol: string): NeutronCreateFirewallRuleOption {
        this['protocol'] = protocol;
        return this;
    }
    public withAction(action: NeutronCreateFirewallRuleOptionActionEnum | string): NeutronCreateFirewallRuleOption {
        this['action'] = action;
        return this;
    }
    public withIpVersion(ipVersion: number): NeutronCreateFirewallRuleOption {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
    public withDestinationIpAddress(destinationIpAddress: string): NeutronCreateFirewallRuleOption {
        this['destination_ip_address'] = destinationIpAddress;
        return this;
    }
    public set destinationIpAddress(destinationIpAddress: string  | undefined) {
        this['destination_ip_address'] = destinationIpAddress;
    }
    public get destinationIpAddress(): string | undefined {
        return this['destination_ip_address'];
    }
    public withDestinationPort(destinationPort: string): NeutronCreateFirewallRuleOption {
        this['destination_port'] = destinationPort;
        return this;
    }
    public set destinationPort(destinationPort: string  | undefined) {
        this['destination_port'] = destinationPort;
    }
    public get destinationPort(): string | undefined {
        return this['destination_port'];
    }
    public withSourceIpAddress(sourceIpAddress: string): NeutronCreateFirewallRuleOption {
        this['source_ip_address'] = sourceIpAddress;
        return this;
    }
    public set sourceIpAddress(sourceIpAddress: string  | undefined) {
        this['source_ip_address'] = sourceIpAddress;
    }
    public get sourceIpAddress(): string | undefined {
        return this['source_ip_address'];
    }
    public withSourcePort(sourcePort: string): NeutronCreateFirewallRuleOption {
        this['source_port'] = sourcePort;
        return this;
    }
    public set sourcePort(sourcePort: string  | undefined) {
        this['source_port'] = sourcePort;
    }
    public get sourcePort(): string | undefined {
        return this['source_port'];
    }
    public withEnabled(enabled: boolean): NeutronCreateFirewallRuleOption {
        this['enabled'] = enabled;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NeutronCreateFirewallRuleOptionActionEnum {
    DENY = 'DENY',
    ALLOW = 'ALLOW'
}
