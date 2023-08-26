

export class MigrateServerOption {
    private 'dedicated_host_id'?: string;
    public constructor() { 
    }
    public withDedicatedHostId(dedicatedHostId: string): MigrateServerOption {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: string  | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId(): string | undefined {
        return this['dedicated_host_id'];
    }
}