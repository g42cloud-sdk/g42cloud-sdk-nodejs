import { ListInstanceRequestBody } from './ListInstanceRequestBody';


export class ListResourceInstancesRequest {
    private 'resource_type'?: string;
    public body?: ListInstanceRequestBody;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: string): ListResourceInstancesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withBody(body: ListInstanceRequestBody): ListResourceInstancesRequest {
        this['body'] = body;
        return this;
    }
}