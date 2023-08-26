import { ListResourceResp } from './ListResourceResp';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListSubnetsByTagsResponse extends SdkResponse {
    public resources?: Array<ListResourceResp>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<ListResourceResp>): ListSubnetsByTagsResponse {
        this['resources'] = resources;
        return this;
    }
    public withTotalCount(totalCount: number): ListSubnetsByTagsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}