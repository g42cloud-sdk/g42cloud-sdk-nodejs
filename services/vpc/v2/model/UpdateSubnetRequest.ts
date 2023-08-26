import { UpdateSubnetRequestBody } from './UpdateSubnetRequestBody';


export class UpdateSubnetRequest {
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public body?: UpdateSubnetRequestBody;
    public constructor(vpcId?: string, subnetId?: string) { 
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
    }
    public withVpcId(vpcId: string): UpdateSubnetRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): UpdateSubnetRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withBody(body: UpdateSubnetRequestBody): UpdateSubnetRequest {
        this['body'] = body;
        return this;
    }
}