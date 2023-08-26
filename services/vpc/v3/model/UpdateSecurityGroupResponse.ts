import { SecurityGroupInfo } from './SecurityGroupInfo';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class UpdateSecurityGroupResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'security_group'?: SecurityGroupInfo;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UpdateSecurityGroupResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSecurityGroup(securityGroup: SecurityGroupInfo): UpdateSecurityGroupResponse {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: SecurityGroupInfo  | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup(): SecurityGroupInfo | undefined {
        return this['security_group'];
    }
}