import { SecurityGroupRule } from './SecurityGroupRule';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ShowSecurityGroupRuleResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'security_group_rule'?: SecurityGroupRule;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowSecurityGroupRuleResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
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