import { PageInfo } from './PageInfo';
import { Vpc } from './Vpc';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListVpcsResponse extends SdkResponse {
    private 'request_id'?: string;
    public vpcs?: Array<Vpc>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListVpcsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withVpcs(vpcs: Array<Vpc>): ListVpcsResponse {
        this['vpcs'] = vpcs;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListVpcsResponse {
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