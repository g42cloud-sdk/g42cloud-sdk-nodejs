import { ListenerRef } from './ListenerRef';
import { LoadBalancerRef } from './LoadBalancerRef';
import { MemberRef } from './MemberRef';
import { SessionPersistence } from './SessionPersistence';
import { SlowStart } from './SlowStart';


export class Pool {
    private 'admin_state_up'?: boolean;
    public description?: string;
    private 'healthmonitor_id'?: string;
    public id?: string;
    private 'lb_algorithm'?: string;
    public listeners?: Array<ListenerRef>;
    public loadbalancers?: Array<LoadBalancerRef>;
    public members?: Array<MemberRef>;
    public name?: string;
    private 'project_id'?: string;
    public protocol?: string;
    private 'session_persistence'?: SessionPersistence;
    private 'ip_version'?: string;
    private 'slow_start'?: SlowStart;
    private 'member_deletion_protection_enable'?: boolean;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'vpc_id'?: string;
    public type?: string;
    public constructor(adminStateUp?: boolean, description?: string, healthmonitorId?: string, id?: string, lbAlgorithm?: string, listeners?: Array<ListenerRef>, loadbalancers?: Array<LoadBalancerRef>, members?: Array<MemberRef>, name?: string, projectId?: string, protocol?: string, sessionPersistence?: SessionPersistence, ipVersion?: string, slowStart?: SlowStart, memberDeletionProtectionEnable?: boolean, vpcId?: string, type?: string) { 
        this['admin_state_up'] = adminStateUp;
        this['description'] = description;
        this['healthmonitor_id'] = healthmonitorId;
        this['id'] = id;
        this['lb_algorithm'] = lbAlgorithm;
        this['listeners'] = listeners;
        this['loadbalancers'] = loadbalancers;
        this['members'] = members;
        this['name'] = name;
        this['project_id'] = projectId;
        this['protocol'] = protocol;
        this['session_persistence'] = sessionPersistence;
        this['ip_version'] = ipVersion;
        this['slow_start'] = slowStart;
        this['member_deletion_protection_enable'] = memberDeletionProtectionEnable;
        this['vpc_id'] = vpcId;
        this['type'] = type;
    }
    public withAdminStateUp(adminStateUp: boolean): Pool {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withDescription(description: string): Pool {
        this['description'] = description;
        return this;
    }
    public withHealthmonitorId(healthmonitorId: string): Pool {
        this['healthmonitor_id'] = healthmonitorId;
        return this;
    }
    public set healthmonitorId(healthmonitorId: string  | undefined) {
        this['healthmonitor_id'] = healthmonitorId;
    }
    public get healthmonitorId(): string | undefined {
        return this['healthmonitor_id'];
    }
    public withId(id: string): Pool {
        this['id'] = id;
        return this;
    }
    public withLbAlgorithm(lbAlgorithm: string): Pool {
        this['lb_algorithm'] = lbAlgorithm;
        return this;
    }
    public set lbAlgorithm(lbAlgorithm: string  | undefined) {
        this['lb_algorithm'] = lbAlgorithm;
    }
    public get lbAlgorithm(): string | undefined {
        return this['lb_algorithm'];
    }
    public withListeners(listeners: Array<ListenerRef>): Pool {
        this['listeners'] = listeners;
        return this;
    }
    public withLoadbalancers(loadbalancers: Array<LoadBalancerRef>): Pool {
        this['loadbalancers'] = loadbalancers;
        return this;
    }
    public withMembers(members: Array<MemberRef>): Pool {
        this['members'] = members;
        return this;
    }
    public withName(name: string): Pool {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): Pool {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProtocol(protocol: string): Pool {
        this['protocol'] = protocol;
        return this;
    }
    public withSessionPersistence(sessionPersistence: SessionPersistence): Pool {
        this['session_persistence'] = sessionPersistence;
        return this;
    }
    public set sessionPersistence(sessionPersistence: SessionPersistence  | undefined) {
        this['session_persistence'] = sessionPersistence;
    }
    public get sessionPersistence(): SessionPersistence | undefined {
        return this['session_persistence'];
    }
    public withIpVersion(ipVersion: string): Pool {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: string  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): string | undefined {
        return this['ip_version'];
    }
    public withSlowStart(slowStart: SlowStart): Pool {
        this['slow_start'] = slowStart;
        return this;
    }
    public set slowStart(slowStart: SlowStart  | undefined) {
        this['slow_start'] = slowStart;
    }
    public get slowStart(): SlowStart | undefined {
        return this['slow_start'];
    }
    public withMemberDeletionProtectionEnable(memberDeletionProtectionEnable: boolean): Pool {
        this['member_deletion_protection_enable'] = memberDeletionProtectionEnable;
        return this;
    }
    public set memberDeletionProtectionEnable(memberDeletionProtectionEnable: boolean  | undefined) {
        this['member_deletion_protection_enable'] = memberDeletionProtectionEnable;
    }
    public get memberDeletionProtectionEnable(): boolean | undefined {
        return this['member_deletion_protection_enable'];
    }
    public withCreatedAt(createdAt: string): Pool {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): Pool {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withVpcId(vpcId: string): Pool {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withType(type: string): Pool {
        this['type'] = type;
        return this;
    }
}