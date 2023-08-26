import { JobProgressEntities } from './JobProgressEntities';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ShowJobProgressResponse extends SdkResponse {
    public status?: ShowJobProgressResponseStatusEnum | string;
    private 'job_id'?: string;
    private 'job_type'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'error_code'?: string;
    private 'fail_reason'?: string;
    public entities?: JobProgressEntities;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowJobProgressResponseStatusEnum | string): ShowJobProgressResponse {
        this['status'] = status;
        return this;
    }
    public withJobId(jobId: string): ShowJobProgressResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: string): ShowJobProgressResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withBeginTime(beginTime: string): ShowJobProgressResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowJobProgressResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withErrorCode(errorCode: string): ShowJobProgressResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withFailReason(failReason: string): ShowJobProgressResponse {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withEntities(entities: JobProgressEntities): ShowJobProgressResponse {
        this['entities'] = entities;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowJobProgressResponseStatusEnum {
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL',
    RUNNING = 'RUNNING',
    INIT = 'INIT'
}
