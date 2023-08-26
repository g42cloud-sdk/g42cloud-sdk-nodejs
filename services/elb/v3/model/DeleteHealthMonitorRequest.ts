

export class DeleteHealthMonitorRequest {
    private 'healthmonitor_id'?: string;
    public constructor(healthmonitorId?: string) { 
        this['healthmonitor_id'] = healthmonitorId;
    }
    public withHealthmonitorId(healthmonitorId: string): DeleteHealthMonitorRequest {
        this['healthmonitor_id'] = healthmonitorId;
        return this;
    }
    public set healthmonitorId(healthmonitorId: string  | undefined) {
        this['healthmonitor_id'] = healthmonitorId;
    }
    public get healthmonitorId(): string | undefined {
        return this['healthmonitor_id'];
    }
}