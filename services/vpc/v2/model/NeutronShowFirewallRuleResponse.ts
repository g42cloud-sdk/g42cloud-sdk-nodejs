import { NeutronFirewallRule } from './NeutronFirewallRule';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class NeutronShowFirewallRuleResponse extends SdkResponse {
    private 'firewall_rule'?: NeutronFirewallRule | undefined;
    public constructor() { 
        super();
    }
    public withFirewallRule(firewallRule: NeutronFirewallRule): NeutronShowFirewallRuleResponse {
        this['firewall_rule'] = firewallRule;
        return this;
    }
    public set firewallRule(firewallRule: NeutronFirewallRule | undefined) {
        this['firewall_rule'] = firewallRule;
    }
    public get firewallRule() {
        return this['firewall_rule'];
    }
}