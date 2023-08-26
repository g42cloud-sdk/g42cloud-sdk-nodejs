

export class GlanceImageMembers {
    public status?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'image_id'?: string;
    private 'member_id'?: string;
    public schema?: string;
    public constructor(status?: string, createdAt?: string, updatedAt?: string, imageId?: string, memberId?: string, schema?: string) { 
        this['status'] = status;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['image_id'] = imageId;
        this['member_id'] = memberId;
        this['schema'] = schema;
    }
    public withStatus(status: string): GlanceImageMembers {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): GlanceImageMembers {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): GlanceImageMembers {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withImageId(imageId: string): GlanceImageMembers {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withMemberId(memberId: string): GlanceImageMembers {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): string | undefined {
        return this['member_id'];
    }
    public withSchema(schema: string): GlanceImageMembers {
        this['schema'] = schema;
        return this;
    }
}