import { JobProgressEntities } from './JobProgressEntities';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ShowJobProgressResponse extends SdkResponse {
    public status?: ShowJobProgressResponseStatusEnum;
    private 'job_id'?: string | undefined;
    private 'job_type'?: string | undefined;
    private 'begin_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    private 'error_code'?: string | undefined;
    private 'fail_reason'?: string | undefined;
    public entities?: JobProgressEntities;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowJobProgressResponseStatusEnum): ShowJobProgressResponse {
        this['status'] = status;
        return this;
    }
    public withJobId(jobId: string): ShowJobProgressResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withJobType(jobType: string): ShowJobProgressResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType() {
        return this['job_type'];
    }
    public withBeginTime(beginTime: string): ShowJobProgressResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime() {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowJobProgressResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withErrorCode(errorCode: string): ShowJobProgressResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withFailReason(failReason: string): ShowJobProgressResponse {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason() {
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
