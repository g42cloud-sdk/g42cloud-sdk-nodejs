

export class ListEncryptTaskRequest {
    private 'task_id'?: Array<string>;
    public status?: ListEncryptTaskRequestStatusEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public page?: number;
    public size?: number;
    public constructor() { 
    }
    public withTaskId(taskId: Array<string>): ListEncryptTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: Array<string>  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): Array<string> | undefined {
        return this['task_id'];
    }
    public withStatus(status: ListEncryptTaskRequestStatusEnum | string): ListEncryptTaskRequest {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ListEncryptTaskRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListEncryptTaskRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withPage(page: number): ListEncryptTaskRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListEncryptTaskRequest {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEncryptTaskRequestStatusEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED'
}
