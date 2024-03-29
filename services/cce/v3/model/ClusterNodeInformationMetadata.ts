

export class ClusterNodeInformationMetadata {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ClusterNodeInformationMetadata {
        this['name'] = name;
        return this;
    }
}