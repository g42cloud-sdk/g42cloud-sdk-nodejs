import { PoolRef } from './PoolRef';


export class HealthMonitor {
    private 'admin_state_up'?: boolean;
    public delay?: number;
    private 'domain_name'?: string;
    private 'expected_codes'?: string;
    private 'http_method'?: string;
    public id?: string;
    private 'max_retries'?: number;
    private 'max_retries_down'?: number;
    private 'monitor_port'?: number;
    public name?: string;
    public pools?: Array<PoolRef>;
    private 'project_id'?: string;
    public timeout?: number;
    public type?: string;
    private 'url_path'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor(adminStateUp?: boolean, delay?: number, domainName?: string, expectedCodes?: string, httpMethod?: string, id?: string, maxRetries?: number, maxRetriesDown?: number, monitorPort?: number, name?: string, pools?: Array<PoolRef>, projectId?: string, timeout?: number, type?: string, urlPath?: string) { 
        this['admin_state_up'] = adminStateUp;
        this['delay'] = delay;
        this['domain_name'] = domainName;
        this['expected_codes'] = expectedCodes;
        this['http_method'] = httpMethod;
        this['id'] = id;
        this['max_retries'] = maxRetries;
        this['max_retries_down'] = maxRetriesDown;
        this['monitor_port'] = monitorPort;
        this['name'] = name;
        this['pools'] = pools;
        this['project_id'] = projectId;
        this['timeout'] = timeout;
        this['type'] = type;
        this['url_path'] = urlPath;
    }
    public withAdminStateUp(adminStateUp: boolean): HealthMonitor {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withDelay(delay: number): HealthMonitor {
        this['delay'] = delay;
        return this;
    }
    public withDomainName(domainName: string): HealthMonitor {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withExpectedCodes(expectedCodes: string): HealthMonitor {
        this['expected_codes'] = expectedCodes;
        return this;
    }
    public set expectedCodes(expectedCodes: string  | undefined) {
        this['expected_codes'] = expectedCodes;
    }
    public get expectedCodes(): string | undefined {
        return this['expected_codes'];
    }
    public withHttpMethod(httpMethod: string): HealthMonitor {
        this['http_method'] = httpMethod;
        return this;
    }
    public set httpMethod(httpMethod: string  | undefined) {
        this['http_method'] = httpMethod;
    }
    public get httpMethod(): string | undefined {
        return this['http_method'];
    }
    public withId(id: string): HealthMonitor {
        this['id'] = id;
        return this;
    }
    public withMaxRetries(maxRetries: number): HealthMonitor {
        this['max_retries'] = maxRetries;
        return this;
    }
    public set maxRetries(maxRetries: number  | undefined) {
        this['max_retries'] = maxRetries;
    }
    public get maxRetries(): number | undefined {
        return this['max_retries'];
    }
    public withMaxRetriesDown(maxRetriesDown: number): HealthMonitor {
        this['max_retries_down'] = maxRetriesDown;
        return this;
    }
    public set maxRetriesDown(maxRetriesDown: number  | undefined) {
        this['max_retries_down'] = maxRetriesDown;
    }
    public get maxRetriesDown(): number | undefined {
        return this['max_retries_down'];
    }
    public withMonitorPort(monitorPort: number): HealthMonitor {
        this['monitor_port'] = monitorPort;
        return this;
    }
    public set monitorPort(monitorPort: number  | undefined) {
        this['monitor_port'] = monitorPort;
    }
    public get monitorPort(): number | undefined {
        return this['monitor_port'];
    }
    public withName(name: string): HealthMonitor {
        this['name'] = name;
        return this;
    }
    public withPools(pools: Array<PoolRef>): HealthMonitor {
        this['pools'] = pools;
        return this;
    }
    public withProjectId(projectId: string): HealthMonitor {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTimeout(timeout: number): HealthMonitor {
        this['timeout'] = timeout;
        return this;
    }
    public withType(type: string): HealthMonitor {
        this['type'] = type;
        return this;
    }
    public withUrlPath(urlPath: string): HealthMonitor {
        this['url_path'] = urlPath;
        return this;
    }
    public set urlPath(urlPath: string  | undefined) {
        this['url_path'] = urlPath;
    }
    public get urlPath(): string | undefined {
        return this['url_path'];
    }
    public withCreatedAt(createdAt: string): HealthMonitor {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): HealthMonitor {
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