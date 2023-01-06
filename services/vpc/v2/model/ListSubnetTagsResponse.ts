import { ListTag } from './ListTag';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListSubnetTagsResponse extends SdkResponse {
    public tags?: Array<ListTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ListTag>): ListSubnetTagsResponse {
        this['tags'] = tags;
        return this;
    }
}