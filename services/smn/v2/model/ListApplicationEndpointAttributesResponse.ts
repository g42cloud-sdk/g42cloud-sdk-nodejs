import { ListApplicationEndpointAttributesResponseBodyAttributes } from './ListApplicationEndpointAttributesResponseBodyAttributes';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListApplicationEndpointAttributesResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public attributes?: ListApplicationEndpointAttributesResponseBodyAttributes;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListApplicationEndpointAttributesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withAttributes(attributes: ListApplicationEndpointAttributesResponseBodyAttributes): ListApplicationEndpointAttributesResponse {
        this['attributes'] = attributes;
        return this;
    }
}