import { SecurityPolicy } from './SecurityPolicy';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ShowSecurityPolicyResponse extends SdkResponse {
    private 'security_policy'?: SecurityPolicy;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withSecurityPolicy(securityPolicy: SecurityPolicy): ShowSecurityPolicyResponse {
        this['security_policy'] = securityPolicy;
        return this;
    }
    public set securityPolicy(securityPolicy: SecurityPolicy  | undefined) {
        this['security_policy'] = securityPolicy;
    }
    public get securityPolicy(): SecurityPolicy | undefined {
        return this['security_policy'];
    }
    public withRequestId(requestId: string): ShowSecurityPolicyResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}