

export class ListHealthMonitorsRequest {
    public marker?: string;
    public limit?: number;
    private 'page_reverse'?: boolean;
    public id?: Array<string>;
    private 'monitor_port'?: Array<number>;
    private 'domain_name'?: Array<string>;
    public name?: Array<string>;
    public delay?: Array<number>;
    private 'max_retries'?: Array<number>;
    private 'admin_state_up'?: boolean;
    private 'max_retries_down'?: Array<number>;
    public timeout?: number;
    public type?: Array<string>;
    private 'expected_codes'?: Array<string>;
    private 'url_path'?: Array<string>;
    private 'http_method'?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    public constructor() { 
    }
    public withMarker(marker: string): ListHealthMonitorsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListHealthMonitorsRequest {
        this['limit'] = limit;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListHealthMonitorsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean  | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse(): boolean | undefined {
        return this['page_reverse'];
    }
    public withId(id: Array<string>): ListHealthMonitorsRequest {
        this['id'] = id;
        return this;
    }
    public withMonitorPort(monitorPort: Array<number>): ListHealthMonitorsRequest {
        this['monitor_port'] = monitorPort;
        return this;
    }
    public set monitorPort(monitorPort: Array<number>  | undefined) {
        this['monitor_port'] = monitorPort;
    }
    public get monitorPort(): Array<number> | undefined {
        return this['monitor_port'];
    }
    public withDomainName(domainName: Array<string>): ListHealthMonitorsRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: Array<string>  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): Array<string> | undefined {
        return this['domain_name'];
    }
    public withName(name: Array<string>): ListHealthMonitorsRequest {
        this['name'] = name;
        return this;
    }
    public withDelay(delay: Array<number>): ListHealthMonitorsRequest {
        this['delay'] = delay;
        return this;
    }
    public withMaxRetries(maxRetries: Array<number>): ListHealthMonitorsRequest {
        this['max_retries'] = maxRetries;
        return this;
    }
    public set maxRetries(maxRetries: Array<number>  | undefined) {
        this['max_retries'] = maxRetries;
    }
    public get maxRetries(): Array<number> | undefined {
        return this['max_retries'];
    }
    public withAdminStateUp(adminStateUp: boolean): ListHealthMonitorsRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withMaxRetriesDown(maxRetriesDown: Array<number>): ListHealthMonitorsRequest {
        this['max_retries_down'] = maxRetriesDown;
        return this;
    }
    public set maxRetriesDown(maxRetriesDown: Array<number>  | undefined) {
        this['max_retries_down'] = maxRetriesDown;
    }
    public get maxRetriesDown(): Array<number> | undefined {
        return this['max_retries_down'];
    }
    public withTimeout(timeout: number): ListHealthMonitorsRequest {
        this['timeout'] = timeout;
        return this;
    }
    public withType(type: Array<string>): ListHealthMonitorsRequest {
        this['type'] = type;
        return this;
    }
    public withExpectedCodes(expectedCodes: Array<string>): ListHealthMonitorsRequest {
        this['expected_codes'] = expectedCodes;
        return this;
    }
    public set expectedCodes(expectedCodes: Array<string>  | undefined) {
        this['expected_codes'] = expectedCodes;
    }
    public get expectedCodes(): Array<string> | undefined {
        return this['expected_codes'];
    }
    public withUrlPath(urlPath: Array<string>): ListHealthMonitorsRequest {
        this['url_path'] = urlPath;
        return this;
    }
    public set urlPath(urlPath: Array<string>  | undefined) {
        this['url_path'] = urlPath;
    }
    public get urlPath(): Array<string> | undefined {
        return this['url_path'];
    }
    public withHttpMethod(httpMethod: Array<string>): ListHealthMonitorsRequest {
        this['http_method'] = httpMethod;
        return this;
    }
    public set httpMethod(httpMethod: Array<string>  | undefined) {
        this['http_method'] = httpMethod;
    }
    public get httpMethod(): Array<string> | undefined {
        return this['http_method'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListHealthMonitorsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
}