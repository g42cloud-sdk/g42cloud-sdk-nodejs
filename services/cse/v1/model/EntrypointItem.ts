

export class EntrypointItem {
    private 'master_entrypoint'?: string;
    private 'master_entrypoint_ipv6'?: string;
    private 'slave_entrypoint'?: string;
    private 'slave_entrypoint_ipv6'?: string;
    public type?: EntrypointItemTypeEnum | string;
    public constructor() { 
    }
    public withMasterEntrypoint(masterEntrypoint: string): EntrypointItem {
        this['master_entrypoint'] = masterEntrypoint;
        return this;
    }
    public set masterEntrypoint(masterEntrypoint: string  | undefined) {
        this['master_entrypoint'] = masterEntrypoint;
    }
    public get masterEntrypoint(): string | undefined {
        return this['master_entrypoint'];
    }
    public withMasterEntrypointIpv6(masterEntrypointIpv6: string): EntrypointItem {
        this['master_entrypoint_ipv6'] = masterEntrypointIpv6;
        return this;
    }
    public set masterEntrypointIpv6(masterEntrypointIpv6: string  | undefined) {
        this['master_entrypoint_ipv6'] = masterEntrypointIpv6;
    }
    public get masterEntrypointIpv6(): string | undefined {
        return this['master_entrypoint_ipv6'];
    }
    public withSlaveEntrypoint(slaveEntrypoint: string): EntrypointItem {
        this['slave_entrypoint'] = slaveEntrypoint;
        return this;
    }
    public set slaveEntrypoint(slaveEntrypoint: string  | undefined) {
        this['slave_entrypoint'] = slaveEntrypoint;
    }
    public get slaveEntrypoint(): string | undefined {
        return this['slave_entrypoint'];
    }
    public withSlaveEntrypointIpv6(slaveEntrypointIpv6: string): EntrypointItem {
        this['slave_entrypoint_ipv6'] = slaveEntrypointIpv6;
        return this;
    }
    public set slaveEntrypointIpv6(slaveEntrypointIpv6: string  | undefined) {
        this['slave_entrypoint_ipv6'] = slaveEntrypointIpv6;
    }
    public get slaveEntrypointIpv6(): string | undefined {
        return this['slave_entrypoint_ipv6'];
    }
    public withType(type: EntrypointItemTypeEnum | string): EntrypointItem {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EntrypointItemTypeEnum {
    REGISTRY = 'REGISTRY',
    SERVICE = 'SERVICE'
}
