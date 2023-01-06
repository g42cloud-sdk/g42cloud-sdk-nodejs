
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class DetachServerVolumeResponse extends SdkResponse {
    private 'job_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): DetachServerVolumeResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
}