import { HealthMonitor } from './HealthMonitor';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListHealthMonitorsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    public healthmonitors?: Array<HealthMonitor>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListHealthMonitorsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListHealthMonitorsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withHealthmonitors(healthmonitors: Array<HealthMonitor>): ListHealthMonitorsResponse {
        this['healthmonitors'] = healthmonitors;
        return this;
    }
}