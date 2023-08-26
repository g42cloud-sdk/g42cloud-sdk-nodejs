import { ThumbTask } from './ThumbTask';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListThumbnailsTaskResponse extends SdkResponse {
    private 'task_array'?: Array<ThumbTask>;
    private 'is_truncated'?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTaskArray(taskArray: Array<ThumbTask>): ListThumbnailsTaskResponse {
        this['task_array'] = taskArray;
        return this;
    }
    public set taskArray(taskArray: Array<ThumbTask>  | undefined) {
        this['task_array'] = taskArray;
    }
    public get taskArray(): Array<ThumbTask> | undefined {
        return this['task_array'];
    }
    public withIsTruncated(isTruncated: number): ListThumbnailsTaskResponse {
        this['is_truncated'] = isTruncated;
        return this;
    }
    public set isTruncated(isTruncated: number  | undefined) {
        this['is_truncated'] = isTruncated;
    }
    public get isTruncated(): number | undefined {
        return this['is_truncated'];
    }
    public withTotal(total: number): ListThumbnailsTaskResponse {
        this['total'] = total;
        return this;
    }
}