import { IpGroup } from './IpGroup';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListIpGroupsResponse extends SdkResponse {
    public ipgroups?: Array<IpGroup>;
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withIpgroups(ipgroups: Array<IpGroup>): ListIpGroupsResponse {
        this['ipgroups'] = ipgroups;
        return this;
    }
    public withRequestId(requestId: string): ListIpGroupsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListIpGroupsResponse {
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