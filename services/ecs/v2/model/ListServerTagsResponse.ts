import { ProjectTag } from './ProjectTag';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListServerTagsResponse extends SdkResponse {
    public tags?: Array<ProjectTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ProjectTag>): ListServerTagsResponse {
        this['tags'] = tags;
        return this;
    }
}