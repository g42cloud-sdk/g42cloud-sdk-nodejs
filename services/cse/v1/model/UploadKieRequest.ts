import { UploadKieRequestBody } from './UploadKieRequestBody';


export class UploadKieRequest {
    private 'X-Enterprise-Project-ID'?: string;
    private 'x-engine-id'?: string;
    public override?: UploadKieRequestOverrideEnum | string;
    public label?: string;
    public body?: UploadKieRequestBody;
    public constructor(xEngineId?: string, override?: string) { 
        this['x-engine-id'] = xEngineId;
        this['override'] = override;
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): UploadKieRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withXEngineId(xEngineId: string): UploadKieRequest {
        this['x-engine-id'] = xEngineId;
        return this;
    }
    public set xEngineId(xEngineId: string  | undefined) {
        this['x-engine-id'] = xEngineId;
    }
    public get xEngineId(): string | undefined {
        return this['x-engine-id'];
    }
    public withOverride(override: UploadKieRequestOverrideEnum | string): UploadKieRequest {
        this['override'] = override;
        return this;
    }
    public withLabel(label: string): UploadKieRequest {
        this['label'] = label;
        return this;
    }
    public withBody(body: UploadKieRequestBody): UploadKieRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UploadKieRequestOverrideEnum {
    FORCE = 'force',
    ABORT = 'abort',
    SKIP = 'skip'
}
