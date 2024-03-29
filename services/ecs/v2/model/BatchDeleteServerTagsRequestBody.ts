import { ServerTag } from './ServerTag';


export class BatchDeleteServerTagsRequestBody {
    public action?: BatchDeleteServerTagsRequestBodyActionEnum | string;
    public tags?: Array<ServerTag>;
    public constructor(action?: string, tags?: Array<ServerTag>) { 
        this['action'] = action;
        this['tags'] = tags;
    }
    public withAction(action: BatchDeleteServerTagsRequestBodyActionEnum | string): BatchDeleteServerTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<ServerTag>): BatchDeleteServerTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteServerTagsRequestBodyActionEnum {
    DELETE = 'delete'
}
