

export class ListQuotaDetailsRequest {
    private 'quota_key'?: Array<string>;
    public constructor() { 
    }
    public withQuotaKey(quotaKey: Array<string>): ListQuotaDetailsRequest {
        this['quota_key'] = quotaKey;
        return this;
    }
    public set quotaKey(quotaKey: Array<string>  | undefined) {
        this['quota_key'] = quotaKey;
    }
    public get quotaKey(): Array<string> | undefined {
        return this['quota_key'];
    }
}