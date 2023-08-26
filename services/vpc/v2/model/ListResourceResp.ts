import { ResourceTag } from './ResourceTag';


export class ListResourceResp {
    private 'resouce_detail'?: object;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    public tags?: Array<ResourceTag>;
    public constructor(resouceDetail?: object, resourceId?: string, resourceName?: string) { 
        this['resouce_detail'] = resouceDetail;
        this['resource_id'] = resourceId;
        this['resource_name'] = resourceName;
    }
    public withResouceDetail(resouceDetail: object): ListResourceResp {
        this['resouce_detail'] = resouceDetail;
        return this;
    }
    public set resouceDetail(resouceDetail: object  | undefined) {
        this['resouce_detail'] = resouceDetail;
    }
    public get resouceDetail(): object | undefined {
        return this['resouce_detail'];
    }
    public withResourceId(resourceId: string): ListResourceResp {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ListResourceResp {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withTags(tags: Array<ResourceTag>): ListResourceResp {
        this['tags'] = tags;
        return this;
    }
}