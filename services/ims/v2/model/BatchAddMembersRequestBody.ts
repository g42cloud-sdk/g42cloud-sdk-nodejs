

export class BatchAddMembersRequestBody {
    public images?: Array<string>;
    public projects?: Array<string>;
    public constructor(images?: Array<string>, projects?: Array<string>) { 
        this['images'] = images;
        this['projects'] = projects;
    }
    public withImages(images: Array<string>): BatchAddMembersRequestBody {
        this['images'] = images;
        return this;
    }
    public withProjects(projects: Array<string>): BatchAddMembersRequestBody {
        this['projects'] = projects;
        return this;
    }
}