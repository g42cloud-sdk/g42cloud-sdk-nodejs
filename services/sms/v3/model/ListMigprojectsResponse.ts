import { MigprojectsResponseBody } from './MigprojectsResponseBody';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListMigprojectsResponse extends SdkResponse {
    public count?: number;
    public migprojects?: Array<MigprojectsResponseBody>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListMigprojectsResponse {
        this['count'] = count;
        return this;
    }
    public withMigprojects(migprojects: Array<MigprojectsResponseBody>): ListMigprojectsResponse {
        this['migprojects'] = migprojects;
        return this;
    }
}