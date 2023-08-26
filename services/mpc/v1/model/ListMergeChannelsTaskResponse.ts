import { MergeChannelsTaskInfo } from './MergeChannelsTaskInfo';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListMergeChannelsTaskResponse extends SdkResponse {
    private 'task_array'?: Array<MergeChannelsTaskInfo>;
    private 'is_truncated'?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTaskArray(taskArray: Array<MergeChannelsTaskInfo>): ListMergeChannelsTaskResponse {
        this['task_array'] = taskArray;
        return this;
    }
    public set taskArray(taskArray: Array<MergeChannelsTaskInfo>  | undefined) {
        this['task_array'] = taskArray;
    }
    public get taskArray(): Array<MergeChannelsTaskInfo> | undefined {
        return this['task_array'];
    }
    public withIsTruncated(isTruncated: number): ListMergeChannelsTaskResponse {
        this['is_truncated'] = isTruncated;
        return this;
    }
    public set isTruncated(isTruncated: number  | undefined) {
        this['is_truncated'] = isTruncated;
    }
    public get isTruncated(): number | undefined {
        return this['is_truncated'];
    }
    public withTotal(total: number): ListMergeChannelsTaskResponse {
        this['total'] = total;
        return this;
    }
}