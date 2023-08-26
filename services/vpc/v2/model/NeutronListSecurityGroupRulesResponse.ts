import { NeutronPageLink } from './NeutronPageLink';
import { NeutronSecurityGroupRule } from './NeutronSecurityGroupRule';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class NeutronListSecurityGroupRulesResponse extends SdkResponse {
    private 'security_group_rules'?: Array<NeutronSecurityGroupRule>;
    private 'security_group_rules_links'?: Array<NeutronPageLink>;
    public constructor() { 
        super();
    }
    public withSecurityGroupRules(securityGroupRules: Array<NeutronSecurityGroupRule>): NeutronListSecurityGroupRulesResponse {
        this['security_group_rules'] = securityGroupRules;
        return this;
    }
    public set securityGroupRules(securityGroupRules: Array<NeutronSecurityGroupRule>  | undefined) {
        this['security_group_rules'] = securityGroupRules;
    }
    public get securityGroupRules(): Array<NeutronSecurityGroupRule> | undefined {
        return this['security_group_rules'];
    }
    public withSecurityGroupRulesLinks(securityGroupRulesLinks: Array<NeutronPageLink>): NeutronListSecurityGroupRulesResponse {
        this['security_group_rules_links'] = securityGroupRulesLinks;
        return this;
    }
    public set securityGroupRulesLinks(securityGroupRulesLinks: Array<NeutronPageLink>  | undefined) {
        this['security_group_rules_links'] = securityGroupRulesLinks;
    }
    public get securityGroupRulesLinks(): Array<NeutronPageLink> | undefined {
        return this['security_group_rules_links'];
    }
}