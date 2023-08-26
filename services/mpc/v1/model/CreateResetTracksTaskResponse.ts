
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class CreateResetTracksTaskResponse extends SdkResponse {
    private 'task_id'?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): CreateResetTracksTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
}