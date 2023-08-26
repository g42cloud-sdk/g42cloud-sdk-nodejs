

export class ListSecurityGroupsRequest {
    public limit?: number;
    public marker?: string;
    private 'vpc_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListSecurityGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSecurityGroupsRequest {
        this['marker'] = marker;
        return this;
    }
    public withVpcId(vpcId: string): ListSecurityGroupsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListSecurityGroupsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}