import { NeutronPageLink } from './NeutronPageLink';
import { VpcRoute } from './VpcRoute';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListVpcRoutesResponse extends SdkResponse {
    public routes?: Array<VpcRoute>;
    private 'routes_links'?: Array<NeutronPageLink>;
    public constructor() { 
        super();
    }
    public withRoutes(routes: Array<VpcRoute>): ListVpcRoutesResponse {
        this['routes'] = routes;
        return this;
    }
    public withRoutesLinks(routesLinks: Array<NeutronPageLink>): ListVpcRoutesResponse {
        this['routes_links'] = routesLinks;
        return this;
    }
    public set routesLinks(routesLinks: Array<NeutronPageLink>  | undefined) {
        this['routes_links'] = routesLinks;
    }
    public get routesLinks(): Array<NeutronPageLink> | undefined {
        return this['routes_links'];
    }
}