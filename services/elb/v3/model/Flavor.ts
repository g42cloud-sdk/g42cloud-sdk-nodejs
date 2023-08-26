import { FlavorInfo } from './FlavorInfo';


export class Flavor {
    public id?: string;
    public info?: FlavorInfo;
    public name?: string;
    public shared?: boolean;
    private 'project_id'?: string;
    public type?: string;
    private 'flavor_sold_out'?: boolean;
    public constructor(id?: string, info?: FlavorInfo, name?: string, shared?: boolean, projectId?: string, type?: string, flavorSoldOut?: boolean) { 
        this['id'] = id;
        this['info'] = info;
        this['name'] = name;
        this['shared'] = shared;
        this['project_id'] = projectId;
        this['type'] = type;
        this['flavor_sold_out'] = flavorSoldOut;
    }
    public withId(id: string): Flavor {
        this['id'] = id;
        return this;
    }
    public withInfo(info: FlavorInfo): Flavor {
        this['info'] = info;
        return this;
    }
    public withName(name: string): Flavor {
        this['name'] = name;
        return this;
    }
    public withShared(shared: boolean): Flavor {
        this['shared'] = shared;
        return this;
    }
    public withProjectId(projectId: string): Flavor {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withType(type: string): Flavor {
        this['type'] = type;
        return this;
    }
    public withFlavorSoldOut(flavorSoldOut: boolean): Flavor {
        this['flavor_sold_out'] = flavorSoldOut;
        return this;
    }
    public set flavorSoldOut(flavorSoldOut: boolean  | undefined) {
        this['flavor_sold_out'] = flavorSoldOut;
    }
    public get flavorSoldOut(): boolean | undefined {
        return this['flavor_sold_out'];
    }
}