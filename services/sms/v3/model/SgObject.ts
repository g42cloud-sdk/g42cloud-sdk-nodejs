

export class SgObject {
    public id?: string;
    public name?: string;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): SgObject {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SgObject {
        this['name'] = name;
        return this;
    }
}