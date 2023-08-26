import { Audio } from './Audio';
import { Common } from './Common';
import { Video } from './Video';


export class ModifyTransTemplateReq {
    private 'template_id'?: number;
    private 'template_name'?: string;
    public video?: Video;
    public audio?: Audio;
    public common?: Common;
    public constructor(templateId?: number, templateName?: string, common?: Common) { 
        this['template_id'] = templateId;
        this['template_name'] = templateName;
        this['common'] = common;
    }
    public withTemplateId(templateId: number): ModifyTransTemplateReq {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): ModifyTransTemplateReq {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withVideo(video: Video): ModifyTransTemplateReq {
        this['video'] = video;
        return this;
    }
    public withAudio(audio: Audio): ModifyTransTemplateReq {
        this['audio'] = audio;
        return this;
    }
    public withCommon(common: Common): ModifyTransTemplateReq {
        this['common'] = common;
        return this;
    }
}