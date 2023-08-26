

export class DocFailedOfUpload {
    public key?: string;
    public labels?: object;
    private 'error_code'?: string;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withKey(key: string): DocFailedOfUpload {
        this['key'] = key;
        return this;
    }
    public withLabels(labels: object): DocFailedOfUpload {
        this['labels'] = labels;
        return this;
    }
    public withErrorCode(errorCode: string): DocFailedOfUpload {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): DocFailedOfUpload {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}