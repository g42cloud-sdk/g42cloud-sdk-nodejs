

export class Quota {
    private 'project_id'?: string;
    public loadbalancer?: number;
    public certificate?: number;
    public listener?: number;
    public l7policy?: number;
    public pool?: number;
    public healthmonitor?: number;
    public member?: number;
    private 'members_per_pool'?: number;
    public ipgroup?: number;
    private 'security_policy'?: number;
    public constructor(projectId?: string, loadbalancer?: number, certificate?: number, listener?: number, l7policy?: number, pool?: number, healthmonitor?: number, member?: number, membersPerPool?: number, ipgroup?: number, securityPolicy?: number) { 
        this['project_id'] = projectId;
        this['loadbalancer'] = loadbalancer;
        this['certificate'] = certificate;
        this['listener'] = listener;
        this['l7policy'] = l7policy;
        this['pool'] = pool;
        this['healthmonitor'] = healthmonitor;
        this['member'] = member;
        this['members_per_pool'] = membersPerPool;
        this['ipgroup'] = ipgroup;
        this['security_policy'] = securityPolicy;
    }
    public withProjectId(projectId: string): Quota {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withLoadbalancer(loadbalancer: number): Quota {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
    public withCertificate(certificate: number): Quota {
        this['certificate'] = certificate;
        return this;
    }
    public withListener(listener: number): Quota {
        this['listener'] = listener;
        return this;
    }
    public withL7policy(l7policy: number): Quota {
        this['l7policy'] = l7policy;
        return this;
    }
    public withPool(pool: number): Quota {
        this['pool'] = pool;
        return this;
    }
    public withHealthmonitor(healthmonitor: number): Quota {
        this['healthmonitor'] = healthmonitor;
        return this;
    }
    public withMember(member: number): Quota {
        this['member'] = member;
        return this;
    }
    public withMembersPerPool(membersPerPool: number): Quota {
        this['members_per_pool'] = membersPerPool;
        return this;
    }
    public set membersPerPool(membersPerPool: number  | undefined) {
        this['members_per_pool'] = membersPerPool;
    }
    public get membersPerPool(): number | undefined {
        return this['members_per_pool'];
    }
    public withIpgroup(ipgroup: number): Quota {
        this['ipgroup'] = ipgroup;
        return this;
    }
    public withSecurityPolicy(securityPolicy: number): Quota {
        this['security_policy'] = securityPolicy;
        return this;
    }
    public set securityPolicy(securityPolicy: number  | undefined) {
        this['security_policy'] = securityPolicy;
    }
    public get securityPolicy(): number | undefined {
        return this['security_policy'];
    }
}