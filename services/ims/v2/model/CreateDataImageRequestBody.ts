import { ImageTag } from './ImageTag';


export class CreateDataImageRequestBody {
    private 'cmk_id'?: string;
    public description?: string;
    private 'enterprise_project_id'?: string;
    private 'image_tags'?: Array<ImageTag>;
    private 'image_url'?: string;
    private 'min_disk'?: number;
    public name?: string;
    private 'os_type'?: CreateDataImageRequestBodyOsTypeEnum | string;
    public tags?: Array<string>;
    public constructor(imageUrl?: string, minDisk?: number, name?: string) { 
        this['image_url'] = imageUrl;
        this['min_disk'] = minDisk;
        this['name'] = name;
    }
    public withCmkId(cmkId: string): CreateDataImageRequestBody {
        this['cmk_id'] = cmkId;
        return this;
    }
    public set cmkId(cmkId: string  | undefined) {
        this['cmk_id'] = cmkId;
    }
    public get cmkId(): string | undefined {
        return this['cmk_id'];
    }
    public withDescription(description: string): CreateDataImageRequestBody {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateDataImageRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withImageTags(imageTags: Array<ImageTag>): CreateDataImageRequestBody {
        this['image_tags'] = imageTags;
        return this;
    }
    public set imageTags(imageTags: Array<ImageTag>  | undefined) {
        this['image_tags'] = imageTags;
    }
    public get imageTags(): Array<ImageTag> | undefined {
        return this['image_tags'];
    }
    public withImageUrl(imageUrl: string): CreateDataImageRequestBody {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
    public withMinDisk(minDisk: number): CreateDataImageRequestBody {
        this['min_disk'] = minDisk;
        return this;
    }
    public set minDisk(minDisk: number  | undefined) {
        this['min_disk'] = minDisk;
    }
    public get minDisk(): number | undefined {
        return this['min_disk'];
    }
    public withName(name: string): CreateDataImageRequestBody {
        this['name'] = name;
        return this;
    }
    public withOsType(osType: CreateDataImageRequestBodyOsTypeEnum | string): CreateDataImageRequestBody {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: CreateDataImageRequestBodyOsTypeEnum | string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): CreateDataImageRequestBodyOsTypeEnum | string | undefined {
        return this['os_type'];
    }
    public withTags(tags: Array<string>): CreateDataImageRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDataImageRequestBodyOsTypeEnum {
    WINDOWS = 'Windows',
    LINUX = 'Linux'
}
