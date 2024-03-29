

export class ListFlavorsRequest {
    private 'spec_type'?: string;
    public constructor() { 
    }
    public withSpecType(specType: string): ListFlavorsRequest {
        this['spec_type'] = specType;
        return this;
    }
    public set specType(specType: string  | undefined) {
        this['spec_type'] = specType;
    }
    public get specType(): string | undefined {
        return this['spec_type'];
    }
}