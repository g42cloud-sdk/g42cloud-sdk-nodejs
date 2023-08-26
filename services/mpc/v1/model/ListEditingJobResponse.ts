import { CommonQueryTaskRsp } from './CommonQueryTaskRsp';
import { EditingJob } from './EditingJob';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListEditingJobResponse extends SdkResponse {
    public total?: number;
    public jobs?: Array<EditingJob>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListEditingJobResponse {
        this['total'] = total;
        return this;
    }
    public withJobs(jobs: Array<EditingJob>): ListEditingJobResponse {
        this['jobs'] = jobs;
        return this;
    }
}