import { ListApplicationAttributesResponseBodyAttributes } from './ListApplicationAttributesResponseBodyAttributes';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListApplicationAttributesResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'application_id'?: string | undefined;
    public attributes?: ListApplicationAttributesResponseBodyAttributes;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListApplicationAttributesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withApplicationId(applicationId: string): ListApplicationAttributesResponse {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId() {
        return this['application_id'];
    }
    public withAttributes(attributes: ListApplicationAttributesResponseBodyAttributes): ListApplicationAttributesResponse {
        this['attributes'] = attributes;
        return this;
    }
}