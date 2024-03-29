

export class SystemSecurityPolicy {
    public name?: string;
    public protocols?: string;
    public ciphers?: string;
    private 'project_id'?: string;
    public constructor(name?: string, protocols?: string, ciphers?: string, projectId?: string) { 
        this['name'] = name;
        this['protocols'] = protocols;
        this['ciphers'] = ciphers;
        this['project_id'] = projectId;
    }
    public withName(name: string): SystemSecurityPolicy {
        this['name'] = name;
        return this;
    }
    public withProtocols(protocols: string): SystemSecurityPolicy {
        this['protocols'] = protocols;
        return this;
    }
    public withCiphers(ciphers: string): SystemSecurityPolicy {
        this['ciphers'] = ciphers;
        return this;
    }
    public withProjectId(projectId: string): SystemSecurityPolicy {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}