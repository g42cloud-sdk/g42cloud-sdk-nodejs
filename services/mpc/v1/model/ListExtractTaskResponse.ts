import { CommonQueryTaskRsp } from './CommonQueryTaskRsp';
import { ExtractTask } from './ExtractTask';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListExtractTaskResponse extends SdkResponse {
    public total?: number;
    public tasks?: Array<ExtractTask>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListExtractTaskResponse {
        this['total'] = total;
        return this;
    }
    public withTasks(tasks: Array<ExtractTask>): ListExtractTaskResponse {
        this['tasks'] = tasks;
        return this;
    }
}