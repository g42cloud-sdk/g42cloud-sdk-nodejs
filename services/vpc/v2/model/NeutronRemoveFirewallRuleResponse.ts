
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class NeutronRemoveFirewallRuleResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'firewall_rules'?: Array<string>;
    public audited?: boolean;
    private 'public'?: boolean;
    private 'tenant_id'?: string;
    private 'project_id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): NeutronRemoveFirewallRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NeutronRemoveFirewallRuleResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): NeutronRemoveFirewallRuleResponse {
        this['description'] = description;
        return this;
    }
    public withFirewallRules(firewallRules: Array<string>): NeutronRemoveFirewallRuleResponse {
        this['firewall_rules'] = firewallRules;
        return this;
    }
    public set firewallRules(firewallRules: Array<string>  | undefined) {
        this['firewall_rules'] = firewallRules;
    }
    public get firewallRules(): Array<string> | undefined {
        return this['firewall_rules'];
    }
    public withAudited(audited: boolean): NeutronRemoveFirewallRuleResponse {
        this['audited'] = audited;
        return this;
    }
    public withPublic(_public: boolean): NeutronRemoveFirewallRuleResponse {
        this['public'] = _public;
        return this;
    }
    public set _public(_public: boolean  | undefined) {
        this['public'] = _public;
    }
    public get _public(): boolean | undefined {
        return this['public'];
    }
    public withTenantId(tenantId: string): NeutronRemoveFirewallRuleResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): NeutronRemoveFirewallRuleResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}