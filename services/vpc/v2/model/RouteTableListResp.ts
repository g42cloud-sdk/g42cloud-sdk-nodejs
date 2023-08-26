import { SubnetList } from './SubnetList';


export class RouteTableListResp {
    public id?: string;
    public name?: string;
    private 'default'?: boolean;
    public subnets?: Array<SubnetList>;
    private 'tenant_id'?: string;
    private 'vpc_id'?: string;
    public description?: string;
    public constructor(id?: string, name?: string, _default?: boolean, subnets?: Array<SubnetList>, tenantId?: string, vpcId?: string, description?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['default'] = _default;
        this['subnets'] = subnets;
        this['tenant_id'] = tenantId;
        this['vpc_id'] = vpcId;
        this['description'] = description;
    }
    public withId(id: string): RouteTableListResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RouteTableListResp {
        this['name'] = name;
        return this;
    }
    public withDefault(_default: boolean): RouteTableListResp {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: boolean  | undefined) {
        this['default'] = _default;
    }
    public get _default(): boolean | undefined {
        return this['default'];
    }
    public withSubnets(subnets: Array<SubnetList>): RouteTableListResp {
        this['subnets'] = subnets;
        return this;
    }
    public withTenantId(tenantId: string): RouteTableListResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withVpcId(vpcId: string): RouteTableListResp {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withDescription(description: string): RouteTableListResp {
        this['description'] = description;
        return this;
    }
}