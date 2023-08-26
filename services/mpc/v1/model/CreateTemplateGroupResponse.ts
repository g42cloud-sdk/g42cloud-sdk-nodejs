import { TemplateGroup } from './TemplateGroup';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class CreateTemplateGroupResponse extends SdkResponse {
    private 'template_group'?: TemplateGroup;
    public constructor() { 
        super();
    }
    public withTemplateGroup(templateGroup: TemplateGroup): CreateTemplateGroupResponse {
        this['template_group'] = templateGroup;
        return this;
    }
    public set templateGroup(templateGroup: TemplateGroup  | undefined) {
        this['template_group'] = templateGroup;
    }
    public get templateGroup(): TemplateGroup | undefined {
        return this['template_group'];
    }
}