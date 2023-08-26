
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListNotifyEventResponse extends SdkResponse {
    private 'event_name'?: Array<string>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withEventName(eventName: Array<string>): ListNotifyEventResponse {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: Array<string>  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): Array<string> | undefined {
        return this['event_name'];
    }
    public withTotal(total: number): ListNotifyEventResponse {
        this['total'] = total;
        return this;
    }
}