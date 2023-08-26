import { IpInfo } from './IpInfo';
import { ListenerRef } from './ListenerRef';


export class IpGroup {
    private 'created_at'?: string;
    public description?: string;
    public id?: string;
    private 'ip_list'?: Array<IpInfo>;
    public listeners?: Array<ListenerRef>;
    public name?: string;
    private 'project_id'?: string;
    private 'updated_at'?: string;
    public constructor(createdAt?: string, description?: string, id?: string, ipList?: Array<IpInfo>, listeners?: Array<ListenerRef>, name?: string, projectId?: string, updatedAt?: string) { 
        this['created_at'] = createdAt;
        this['description'] = description;
        this['id'] = id;
        this['ip_list'] = ipList;
        this['listeners'] = listeners;
        this['name'] = name;
        this['project_id'] = projectId;
        this['updated_at'] = updatedAt;
    }
    public withCreatedAt(createdAt: string): IpGroup {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withDescription(description: string): IpGroup {
        this['description'] = description;
        return this;
    }
    public withId(id: string): IpGroup {
        this['id'] = id;
        return this;
    }
    public withIpList(ipList: Array<IpInfo>): IpGroup {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<IpInfo>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<IpInfo> | undefined {
        return this['ip_list'];
    }
    public withListeners(listeners: Array<ListenerRef>): IpGroup {
        this['listeners'] = listeners;
        return this;
    }
    public withName(name: string): IpGroup {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): IpGroup {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withUpdatedAt(updatedAt: string): IpGroup {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}