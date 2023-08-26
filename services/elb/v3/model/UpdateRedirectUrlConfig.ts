

export class UpdateRedirectUrlConfig {
    public protocol?: UpdateRedirectUrlConfigProtocolEnum | string;
    public host?: string;
    public port?: string;
    public path?: string;
    public query?: string;
    private 'status_code'?: UpdateRedirectUrlConfigStatusCodeEnum | string;
    public constructor() { 
    }
    public withProtocol(protocol: UpdateRedirectUrlConfigProtocolEnum | string): UpdateRedirectUrlConfig {
        this['protocol'] = protocol;
        return this;
    }
    public withHost(host: string): UpdateRedirectUrlConfig {
        this['host'] = host;
        return this;
    }
    public withPort(port: string): UpdateRedirectUrlConfig {
        this['port'] = port;
        return this;
    }
    public withPath(path: string): UpdateRedirectUrlConfig {
        this['path'] = path;
        return this;
    }
    public withQuery(query: string): UpdateRedirectUrlConfig {
        this['query'] = query;
        return this;
    }
    public withStatusCode(statusCode: UpdateRedirectUrlConfigStatusCodeEnum | string): UpdateRedirectUrlConfig {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: UpdateRedirectUrlConfigStatusCodeEnum | string  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): UpdateRedirectUrlConfigStatusCodeEnum | string | undefined {
        return this['status_code'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateRedirectUrlConfigProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS',
    PROTOCOL = '${protocol}'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateRedirectUrlConfigStatusCodeEnum {
    E_301 = '301',
    E_302 = '302',
    E_303 = '303',
    E_307 = '307',
    E_308 = '308'
}
