

export class SessionPersistence {
    private 'cookie_name'?: string;
    public type?: string;
    private 'persistence_timeout'?: number;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withCookieName(cookieName: string): SessionPersistence {
        this['cookie_name'] = cookieName;
        return this;
    }
    public set cookieName(cookieName: string  | undefined) {
        this['cookie_name'] = cookieName;
    }
    public get cookieName(): string | undefined {
        return this['cookie_name'];
    }
    public withType(type: string): SessionPersistence {
        this['type'] = type;
        return this;
    }
    public withPersistenceTimeout(persistenceTimeout: number): SessionPersistence {
        this['persistence_timeout'] = persistenceTimeout;
        return this;
    }
    public set persistenceTimeout(persistenceTimeout: number  | undefined) {
        this['persistence_timeout'] = persistenceTimeout;
    }
    public get persistenceTimeout(): number | undefined {
        return this['persistence_timeout'];
    }
}