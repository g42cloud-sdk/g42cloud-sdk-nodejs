import { UpdateTopicAttributeRequestBody } from './UpdateTopicAttributeRequestBody';


export class UpdateTopicAttributeRequest {
    private 'topic_urn'?: string;
    public name?: string;
    public body?: UpdateTopicAttributeRequestBody;
    public constructor(topicUrn?: string, name?: string) { 
        this['topic_urn'] = topicUrn;
        this['name'] = name;
    }
    public withTopicUrn(topicUrn: string): UpdateTopicAttributeRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withName(name: string): UpdateTopicAttributeRequest {
        this['name'] = name;
        return this;
    }
    public withBody(body: UpdateTopicAttributeRequestBody): UpdateTopicAttributeRequest {
        this['body'] = body;
        return this;
    }
}