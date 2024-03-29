import { CreateServerGroupResult } from './CreateServerGroupResult';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class CreateServerGroupResponse extends SdkResponse {
    private 'server_group'?: CreateServerGroupResult;
    public constructor() { 
        super();
    }
    public withServerGroup(serverGroup: CreateServerGroupResult): CreateServerGroupResponse {
        this['server_group'] = serverGroup;
        return this;
    }
    public set serverGroup(serverGroup: CreateServerGroupResult  | undefined) {
        this['server_group'] = serverGroup;
    }
    public get serverGroup(): CreateServerGroupResult | undefined {
        return this['server_group'];
    }
}