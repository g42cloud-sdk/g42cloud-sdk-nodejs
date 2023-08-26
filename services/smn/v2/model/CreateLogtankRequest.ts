import { CreateLogtankRequestBody } from './CreateLogtankRequestBody';


export class CreateLogtankRequest {
    private 'topic_urn'?: string;
    public body?: CreateLogtankRequestBody;
    public constructor(topicUrn?: string) { 
        this['topic_urn'] = topicUrn;
    }
    public withTopicUrn(topicUrn: string): CreateLogtankRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withBody(body: CreateLogtankRequestBody): CreateLogtankRequest {
        this['body'] = body;
        return this;
    }
}