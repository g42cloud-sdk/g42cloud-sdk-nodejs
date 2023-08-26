import { NeutronFirewallGroup } from './NeutronFirewallGroup';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class NeutronCreateFirewallGroupResponse extends SdkResponse {
    private 'firewall_group'?: NeutronFirewallGroup;
    public constructor() { 
        super();
    }
    public withFirewallGroup(firewallGroup: NeutronFirewallGroup): NeutronCreateFirewallGroupResponse {
        this['firewall_group'] = firewallGroup;
        return this;
    }
    public set firewallGroup(firewallGroup: NeutronFirewallGroup  | undefined) {
        this['firewall_group'] = firewallGroup;
    }
    public get firewallGroup(): NeutronFirewallGroup | undefined {
        return this['firewall_group'];
    }
}