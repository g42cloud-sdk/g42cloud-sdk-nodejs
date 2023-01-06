import { NeutronFirewallGroup } from './NeutronFirewallGroup';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class NeutronShowFirewallGroupResponse extends SdkResponse {
    private 'firewall_group'?: NeutronFirewallGroup | undefined;
    public constructor() { 
        super();
    }
    public withFirewallGroup(firewallGroup: NeutronFirewallGroup): NeutronShowFirewallGroupResponse {
        this['firewall_group'] = firewallGroup;
        return this;
    }
    public set firewallGroup(firewallGroup: NeutronFirewallGroup | undefined) {
        this['firewall_group'] = firewallGroup;
    }
    public get firewallGroup() {
        return this['firewall_group'];
    }
}