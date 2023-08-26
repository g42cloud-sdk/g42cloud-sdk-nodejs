
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class CreateWatermarkTemplateResponse extends SdkResponse {
    private 'template_id'?: number;
    public constructor() { 
        super();
    }
    public withTemplateId(templateId: number): CreateWatermarkTemplateResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
}