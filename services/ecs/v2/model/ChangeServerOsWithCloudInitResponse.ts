
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ChangeServerOsWithCloudInitResponse extends SdkResponse {
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ChangeServerOsWithCloudInitResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}