

export class ListExtractTaskRequest {
    private 'x-language'?: string;
    private 'task_id'?: Array<string>;
    public status?: ListExtractTaskRequestStatusEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public page?: number;
    public size?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListExtractTaskRequest {
        this['x-language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['x-language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['x-language'];
    }
    public withTaskId(taskId: Array<string>): ListExtractTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: Array<string>  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): Array<string> | undefined {
        return this['task_id'];
    }
    public withStatus(status: ListExtractTaskRequestStatusEnum | string): ListExtractTaskRequest {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ListExtractTaskRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListExtractTaskRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withPage(page: number): ListExtractTaskRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListExtractTaskRequest {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListExtractTaskRequestStatusEnum {
    INIT = 'INIT',
    WAITING = 'WAITING',
    PREPROCESSING = 'PREPROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED'
}
