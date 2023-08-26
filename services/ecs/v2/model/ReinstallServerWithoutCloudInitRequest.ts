import { ReinstallServerWithoutCloudInitRequestBody } from './ReinstallServerWithoutCloudInitRequestBody';


export class ReinstallServerWithoutCloudInitRequest {
    private 'server_id'?: string;
    public body?: ReinstallServerWithoutCloudInitRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ReinstallServerWithoutCloudInitRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: ReinstallServerWithoutCloudInitRequestBody): ReinstallServerWithoutCloudInitRequest {
        this['body'] = body;
        return this;
    }
}