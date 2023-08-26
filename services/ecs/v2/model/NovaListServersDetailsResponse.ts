import { NovaServer } from './NovaServer';
import { PageLink } from './PageLink';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class NovaListServersDetailsResponse extends SdkResponse {
    public servers?: Array<NovaServer>;
    private 'servers_links'?: Array<PageLink>;
    public constructor() { 
        super();
    }
    public withServers(servers: Array<NovaServer>): NovaListServersDetailsResponse {
        this['servers'] = servers;
        return this;
    }
    public withServersLinks(serversLinks: Array<PageLink>): NovaListServersDetailsResponse {
        this['servers_links'] = serversLinks;
        return this;
    }
    public set serversLinks(serversLinks: Array<PageLink>  | undefined) {
        this['servers_links'] = serversLinks;
    }
    public get serversLinks(): Array<PageLink> | undefined {
        return this['servers_links'];
    }
}