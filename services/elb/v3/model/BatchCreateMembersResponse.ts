import { BatchMember } from './BatchMember';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class BatchCreateMembersResponse extends SdkResponse {
    private 'request_id'?: string;
    public members?: Array<BatchMember>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): BatchCreateMembersResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withMembers(members: Array<BatchMember>): BatchCreateMembersResponse {
        this['members'] = members;
        return this;
    }
}