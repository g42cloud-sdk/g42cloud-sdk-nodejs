import { TemplateInfo } from './TemplateInfo';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListTemplateResponse extends SdkResponse {
    private 'template_array'?: Array<TemplateInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTemplateArray(templateArray: Array<TemplateInfo>): ListTemplateResponse {
        this['template_array'] = templateArray;
        return this;
    }
    public set templateArray(templateArray: Array<TemplateInfo>  | undefined) {
        this['template_array'] = templateArray;
    }
    public get templateArray(): Array<TemplateInfo> | undefined {
        return this['template_array'];
    }
    public withTotal(total: number): ListTemplateResponse {
        this['total'] = total;
        return this;
    }
}