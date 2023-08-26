
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ReinstallServerWithCloudInitResponse extends SdkResponse {
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ReinstallServerWithCloudInitResponse {
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