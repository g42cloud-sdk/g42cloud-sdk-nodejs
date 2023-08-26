import { GlanceUpdateImageMemberRequestBody } from './GlanceUpdateImageMemberRequestBody';


export class GlanceUpdateImageMemberRequest {
    private 'image_id'?: string;
    private 'member_id'?: string;
    public body?: GlanceUpdateImageMemberRequestBody;
    public constructor(imageId?: string, memberId?: string) { 
        this['image_id'] = imageId;
        this['member_id'] = memberId;
    }
    public withImageId(imageId: string): GlanceUpdateImageMemberRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withMemberId(memberId: string): GlanceUpdateImageMemberRequest {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): string | undefined {
        return this['member_id'];
    }
    public withBody(body: GlanceUpdateImageMemberRequestBody): GlanceUpdateImageMemberRequest {
        this['body'] = body;
        return this;
    }
}