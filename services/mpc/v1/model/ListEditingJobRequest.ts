

export class ListEditingJobRequest {
    private 'x-language'?: string;
    private 'job_id'?: Array<string>;
    public status?: ListEditingJobRequestStatusEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public page?: number;
    public size?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListEditingJobRequest {
        this['x-language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['x-language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['x-language'];
    }
    public withJobId(jobId: Array<string>): ListEditingJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: Array<string>  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): Array<string> | undefined {
        return this['job_id'];
    }
    public withStatus(status: ListEditingJobRequestStatusEnum | string): ListEditingJobRequest {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ListEditingJobRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListEditingJobRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withPage(page: number): ListEditingJobRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListEditingJobRequest {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEditingJobRequestStatusEnum {
    INIT = 'INIT',
    WAITING = 'WAITING',
    PREPROCESSING = 'PREPROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED'
}
