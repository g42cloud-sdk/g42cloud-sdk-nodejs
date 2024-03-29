import { ResourceTag } from './ResourceTag';


export class BatchAddOrDeleteTagsRequestBody {
    public action?: BatchAddOrDeleteTagsRequestBodyActionEnum | string;
    public tags?: Array<ResourceTag>;
    public constructor(action?: string, tags?: Array<ResourceTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchAddOrDeleteTagsRequestBodyActionEnum | string): BatchAddOrDeleteTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): BatchAddOrDeleteTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchAddOrDeleteTagsRequestBodyActionEnum {
    CREATE = 'create',
    DELETE = 'delete'
}
