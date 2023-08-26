import { BasicTaskInfo } from './BasicTaskInfo';
import { ObsObjInfo } from './ObsObjInfo';


export class TaskInfo {
    private 'task_id'?: string;
    public status?: string;
    private 'create_time'?: string;
    private 'end_time'?: string;
    public output?: ObsObjInfo;
    public description?: string;
    private 'output_file_name'?: Array<string>;
    public input?: ObsObjInfo;
    public constructor() { 
    }
    public withTaskId(taskId: string): TaskInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: string): TaskInfo {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): TaskInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withEndTime(endTime: string): TaskInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOutput(output: ObsObjInfo): TaskInfo {
        this['output'] = output;
        return this;
    }
    public withDescription(description: string): TaskInfo {
        this['description'] = description;
        return this;
    }
    public withOutputFileName(outputFileName: Array<string>): TaskInfo {
        this['output_file_name'] = outputFileName;
        return this;
    }
    public set outputFileName(outputFileName: Array<string>  | undefined) {
        this['output_file_name'] = outputFileName;
    }
    public get outputFileName(): Array<string> | undefined {
        return this['output_file_name'];
    }
    public withInput(input: ObsObjInfo): TaskInfo {
        this['input'] = input;
        return this;
    }
}