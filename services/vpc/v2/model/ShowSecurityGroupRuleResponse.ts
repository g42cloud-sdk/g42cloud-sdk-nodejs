import { SecurityGroupRule } from './SecurityGroupRule';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ShowSecurityGroupRuleResponse extends SdkResponse {
    private 'security_group_rule'?: SecurityGroupRule;
    public constructor() { 
        super();
    }
    public withSecurityGroupRule(securityGroupRule: SecurityGroupRule): ShowSecurityGroupRuleResponse {
        this['security_group_rule'] = securityGroupRule;
        return this;
    }
    public set securityGroupRule(securityGroupRule: SecurityGroupRule  | undefined) {
        this['security_group_rule'] = securityGroupRule;
    }
    public get securityGroupRule(): SecurityGroupRule | undefined {
        return this['security_group_rule'];
    }
}