

export class UpdateMessageTemplateRequestBody {
    public content?: string;
    public constructor(content?: string) { 
        this['content'] = content;
    }
    public withContent(content: string): UpdateMessageTemplateRequestBody {
        this['content'] = content;
        return this;
    }
}