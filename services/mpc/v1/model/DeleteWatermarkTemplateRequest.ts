

export class DeleteWatermarkTemplateRequest {
    private 'template_id'?: number;
    public constructor(templateId?: number) { 
        this['template_id'] = templateId;
    }
    public withTemplateId(templateId: number): DeleteWatermarkTemplateRequest {
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