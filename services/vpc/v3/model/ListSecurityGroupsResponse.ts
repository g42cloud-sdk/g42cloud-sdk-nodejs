import { PageInfo } from './PageInfo';
import { SecurityGroup } from './SecurityGroup';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListSecurityGroupsResponse extends SdkResponse {
    private 'security_groups'?: Array<SecurityGroup>;
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroup>): ListSecurityGroupsResponse {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroup> | undefined {
        return this['security_groups'];
    }
    public withRequestId(requestId: string): ListSecurityGroupsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListSecurityGroupsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}