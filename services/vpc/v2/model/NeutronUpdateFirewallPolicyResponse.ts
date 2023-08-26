import { NeutronFirewallPolicy } from './NeutronFirewallPolicy';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class NeutronUpdateFirewallPolicyResponse extends SdkResponse {
    private 'firewall_policy'?: NeutronFirewallPolicy;
    public constructor() { 
        super();
    }
    public withFirewallPolicy(firewallPolicy: NeutronFirewallPolicy): NeutronUpdateFirewallPolicyResponse {
        this['firewall_policy'] = firewallPolicy;
        return this;
    }
    public set firewallPolicy(firewallPolicy: NeutronFirewallPolicy  | undefined) {
        this['firewall_policy'] = firewallPolicy;
    }
    public get firewallPolicy(): NeutronFirewallPolicy | undefined {
        return this['firewall_policy'];
    }
}