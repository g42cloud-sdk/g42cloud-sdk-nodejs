import { HcClient } from "@g42cloud/g42cloud-sdk-core/HcClient";
import { ClientBuilder } from "@g42cloud/g42cloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

import { AcceptVpcPeeringRequest } from './model/AcceptVpcPeeringRequest';
import { AcceptVpcPeeringResponse } from './model/AcceptVpcPeeringResponse';
import { AllowedAddressPair } from './model/AllowedAddressPair';
import { AsscoiateReq } from './model/AsscoiateReq';
import { AssociateRouteTableAndSubnetReq } from './model/AssociateRouteTableAndSubnetReq';
import { AssociateRouteTableRequest } from './model/AssociateRouteTableRequest';
import { AssociateRouteTableResponse } from './model/AssociateRouteTableResponse';
import { BatchCreateSubnetTagsRequest } from './model/BatchCreateSubnetTagsRequest';
import { BatchCreateSubnetTagsRequestBody } from './model/BatchCreateSubnetTagsRequestBody';
import { BatchCreateSubnetTagsResponse } from './model/BatchCreateSubnetTagsResponse';
import { BatchCreateVpcTagsRequest } from './model/BatchCreateVpcTagsRequest';
import { BatchCreateVpcTagsRequestBody } from './model/BatchCreateVpcTagsRequestBody';
import { BatchCreateVpcTagsResponse } from './model/BatchCreateVpcTagsResponse';
import { BatchDeleteSubnetTagsRequest } from './model/BatchDeleteSubnetTagsRequest';
import { BatchDeleteSubnetTagsRequestBody } from './model/BatchDeleteSubnetTagsRequestBody';
import { BatchDeleteSubnetTagsResponse } from './model/BatchDeleteSubnetTagsResponse';
import { BatchDeleteVpcTagsRequest } from './model/BatchDeleteVpcTagsRequest';
import { BatchDeleteVpcTagsRequestBody } from './model/BatchDeleteVpcTagsRequestBody';
import { BatchDeleteVpcTagsResponse } from './model/BatchDeleteVpcTagsResponse';
import { BindingVifDetails } from './model/BindingVifDetails';
import { CreatePortOption } from './model/CreatePortOption';
import { CreatePortRequest } from './model/CreatePortRequest';
import { CreatePortRequestBody } from './model/CreatePortRequestBody';
import { CreatePortResponse } from './model/CreatePortResponse';
import { CreatePrivateipOption } from './model/CreatePrivateipOption';
import { CreatePrivateipRequest } from './model/CreatePrivateipRequest';
import { CreatePrivateipRequestBody } from './model/CreatePrivateipRequestBody';
import { CreatePrivateipResponse } from './model/CreatePrivateipResponse';
import { CreateRouteTableReq } from './model/CreateRouteTableReq';
import { CreateRouteTableRequest } from './model/CreateRouteTableRequest';
import { CreateRouteTableResponse } from './model/CreateRouteTableResponse';
import { CreateRoutetableReqBody } from './model/CreateRoutetableReqBody';
import { CreateSecurityGroupOption } from './model/CreateSecurityGroupOption';
import { CreateSecurityGroupRequest } from './model/CreateSecurityGroupRequest';
import { CreateSecurityGroupRequestBody } from './model/CreateSecurityGroupRequestBody';
import { CreateSecurityGroupResponse } from './model/CreateSecurityGroupResponse';
import { CreateSecurityGroupRuleOption } from './model/CreateSecurityGroupRuleOption';
import { CreateSecurityGroupRuleRequest } from './model/CreateSecurityGroupRuleRequest';
import { CreateSecurityGroupRuleRequestBody } from './model/CreateSecurityGroupRuleRequestBody';
import { CreateSecurityGroupRuleResponse } from './model/CreateSecurityGroupRuleResponse';
import { CreateSubnetOption } from './model/CreateSubnetOption';
import { CreateSubnetRequest } from './model/CreateSubnetRequest';
import { CreateSubnetRequestBody } from './model/CreateSubnetRequestBody';
import { CreateSubnetResponse } from './model/CreateSubnetResponse';
import { CreateSubnetTagRequest } from './model/CreateSubnetTagRequest';
import { CreateSubnetTagRequestBody } from './model/CreateSubnetTagRequestBody';
import { CreateSubnetTagResponse } from './model/CreateSubnetTagResponse';
import { CreateVpcOption } from './model/CreateVpcOption';
import { CreateVpcPeeringOption } from './model/CreateVpcPeeringOption';
import { CreateVpcPeeringRequest } from './model/CreateVpcPeeringRequest';
import { CreateVpcPeeringRequestBody } from './model/CreateVpcPeeringRequestBody';
import { CreateVpcPeeringResponse } from './model/CreateVpcPeeringResponse';
import { CreateVpcRequest } from './model/CreateVpcRequest';
import { CreateVpcRequestBody } from './model/CreateVpcRequestBody';
import { CreateVpcResourceTagRequest } from './model/CreateVpcResourceTagRequest';
import { CreateVpcResourceTagRequestBody } from './model/CreateVpcResourceTagRequestBody';
import { CreateVpcResourceTagResponse } from './model/CreateVpcResourceTagResponse';
import { CreateVpcResponse } from './model/CreateVpcResponse';
import { CreateVpcRouteOption } from './model/CreateVpcRouteOption';
import { CreateVpcRouteRequest } from './model/CreateVpcRouteRequest';
import { CreateVpcRouteRequestBody } from './model/CreateVpcRouteRequestBody';
import { CreateVpcRouteResponse } from './model/CreateVpcRouteResponse';
import { DeletePortRequest } from './model/DeletePortRequest';
import { DeletePortResponse } from './model/DeletePortResponse';
import { DeletePrivateipRequest } from './model/DeletePrivateipRequest';
import { DeletePrivateipResponse } from './model/DeletePrivateipResponse';
import { DeleteRouteTableRequest } from './model/DeleteRouteTableRequest';
import { DeleteRouteTableResponse } from './model/DeleteRouteTableResponse';
import { DeleteSecurityGroupRequest } from './model/DeleteSecurityGroupRequest';
import { DeleteSecurityGroupResponse } from './model/DeleteSecurityGroupResponse';
import { DeleteSecurityGroupRuleRequest } from './model/DeleteSecurityGroupRuleRequest';
import { DeleteSecurityGroupRuleResponse } from './model/DeleteSecurityGroupRuleResponse';
import { DeleteSubnetRequest } from './model/DeleteSubnetRequest';
import { DeleteSubnetResponse } from './model/DeleteSubnetResponse';
import { DeleteSubnetTagRequest } from './model/DeleteSubnetTagRequest';
import { DeleteSubnetTagResponse } from './model/DeleteSubnetTagResponse';
import { DeleteVpcPeeringRequest } from './model/DeleteVpcPeeringRequest';
import { DeleteVpcPeeringResponse } from './model/DeleteVpcPeeringResponse';
import { DeleteVpcRequest } from './model/DeleteVpcRequest';
import { DeleteVpcResponse } from './model/DeleteVpcResponse';
import { DeleteVpcRouteRequest } from './model/DeleteVpcRouteRequest';
import { DeleteVpcRouteResponse } from './model/DeleteVpcRouteResponse';
import { DeleteVpcTagRequest } from './model/DeleteVpcTagRequest';
import { DeleteVpcTagResponse } from './model/DeleteVpcTagResponse';
import { DisassociateRouteTableRequest } from './model/DisassociateRouteTableRequest';
import { DisassociateRouteTableResponse } from './model/DisassociateRouteTableResponse';
import { DnsAssignMent } from './model/DnsAssignMent';
import { ExtraDhcpOpt } from './model/ExtraDhcpOpt';
import { ExtraDhcpOption } from './model/ExtraDhcpOption';
import { FixedIp } from './model/FixedIp';
import { ListPortsRequest } from './model/ListPortsRequest';
import { ListPortsResponse } from './model/ListPortsResponse';
import { ListPrivateipsRequest } from './model/ListPrivateipsRequest';
import { ListPrivateipsResponse } from './model/ListPrivateipsResponse';
import { ListResourceResp } from './model/ListResourceResp';
import { ListRouteTablesRequest } from './model/ListRouteTablesRequest';
import { ListRouteTablesResponse } from './model/ListRouteTablesResponse';
import { ListSecurityGroupRulesRequest } from './model/ListSecurityGroupRulesRequest';
import { ListSecurityGroupRulesResponse } from './model/ListSecurityGroupRulesResponse';
import { ListSecurityGroupsRequest } from './model/ListSecurityGroupsRequest';
import { ListSecurityGroupsResponse } from './model/ListSecurityGroupsResponse';
import { ListSubnetTagsRequest } from './model/ListSubnetTagsRequest';
import { ListSubnetTagsResponse } from './model/ListSubnetTagsResponse';
import { ListSubnetsByTagsRequest } from './model/ListSubnetsByTagsRequest';
import { ListSubnetsByTagsRequestBody } from './model/ListSubnetsByTagsRequestBody';
import { ListSubnetsByTagsResponse } from './model/ListSubnetsByTagsResponse';
import { ListSubnetsRequest } from './model/ListSubnetsRequest';
import { ListSubnetsResponse } from './model/ListSubnetsResponse';
import { ListTag } from './model/ListTag';
import { ListVpcPeeringsRequest } from './model/ListVpcPeeringsRequest';
import { ListVpcPeeringsResponse } from './model/ListVpcPeeringsResponse';
import { ListVpcRoutesRequest } from './model/ListVpcRoutesRequest';
import { ListVpcRoutesResponse } from './model/ListVpcRoutesResponse';
import { ListVpcTagsRequest } from './model/ListVpcTagsRequest';
import { ListVpcTagsResponse } from './model/ListVpcTagsResponse';
import { ListVpcsByTagsRequest } from './model/ListVpcsByTagsRequest';
import { ListVpcsByTagsRequestBody } from './model/ListVpcsByTagsRequestBody';
import { ListVpcsByTagsResponse } from './model/ListVpcsByTagsResponse';
import { ListVpcsRequest } from './model/ListVpcsRequest';
import { ListVpcsResponse } from './model/ListVpcsResponse';
import { Match } from './model/Match';
import { NetworkIpAvailability } from './model/NetworkIpAvailability';
import { NeutronAddFirewallRuleRequest } from './model/NeutronAddFirewallRuleRequest';
import { NeutronAddFirewallRuleResponse } from './model/NeutronAddFirewallRuleResponse';
import { NeutronCreateFirewallGroupOption } from './model/NeutronCreateFirewallGroupOption';
import { NeutronCreateFirewallGroupRequest } from './model/NeutronCreateFirewallGroupRequest';
import { NeutronCreateFirewallGroupRequestBody } from './model/NeutronCreateFirewallGroupRequestBody';
import { NeutronCreateFirewallGroupResponse } from './model/NeutronCreateFirewallGroupResponse';
import { NeutronCreateFirewallPolicyOption } from './model/NeutronCreateFirewallPolicyOption';
import { NeutronCreateFirewallPolicyRequest } from './model/NeutronCreateFirewallPolicyRequest';
import { NeutronCreateFirewallPolicyRequestBody } from './model/NeutronCreateFirewallPolicyRequestBody';
import { NeutronCreateFirewallPolicyResponse } from './model/NeutronCreateFirewallPolicyResponse';
import { NeutronCreateFirewallRuleOption } from './model/NeutronCreateFirewallRuleOption';
import { NeutronCreateFirewallRuleRequest } from './model/NeutronCreateFirewallRuleRequest';
import { NeutronCreateFirewallRuleRequestBody } from './model/NeutronCreateFirewallRuleRequestBody';
import { NeutronCreateFirewallRuleResponse } from './model/NeutronCreateFirewallRuleResponse';
import { NeutronCreateSecurityGroupOption } from './model/NeutronCreateSecurityGroupOption';
import { NeutronCreateSecurityGroupRequest } from './model/NeutronCreateSecurityGroupRequest';
import { NeutronCreateSecurityGroupRequestBody } from './model/NeutronCreateSecurityGroupRequestBody';
import { NeutronCreateSecurityGroupResponse } from './model/NeutronCreateSecurityGroupResponse';
import { NeutronCreateSecurityGroupRuleOption } from './model/NeutronCreateSecurityGroupRuleOption';
import { NeutronCreateSecurityGroupRuleRequest } from './model/NeutronCreateSecurityGroupRuleRequest';
import { NeutronCreateSecurityGroupRuleRequestBody } from './model/NeutronCreateSecurityGroupRuleRequestBody';
import { NeutronCreateSecurityGroupRuleResponse } from './model/NeutronCreateSecurityGroupRuleResponse';
import { NeutronDeleteFirewallGroupRequest } from './model/NeutronDeleteFirewallGroupRequest';
import { NeutronDeleteFirewallGroupResponse } from './model/NeutronDeleteFirewallGroupResponse';
import { NeutronDeleteFirewallPolicyRequest } from './model/NeutronDeleteFirewallPolicyRequest';
import { NeutronDeleteFirewallPolicyResponse } from './model/NeutronDeleteFirewallPolicyResponse';
import { NeutronDeleteFirewallRuleRequest } from './model/NeutronDeleteFirewallRuleRequest';
import { NeutronDeleteFirewallRuleResponse } from './model/NeutronDeleteFirewallRuleResponse';
import { NeutronDeleteSecurityGroupRequest } from './model/NeutronDeleteSecurityGroupRequest';
import { NeutronDeleteSecurityGroupResponse } from './model/NeutronDeleteSecurityGroupResponse';
import { NeutronDeleteSecurityGroupRuleRequest } from './model/NeutronDeleteSecurityGroupRuleRequest';
import { NeutronDeleteSecurityGroupRuleResponse } from './model/NeutronDeleteSecurityGroupRuleResponse';
import { NeutronFirewallGroup } from './model/NeutronFirewallGroup';
import { NeutronFirewallPolicy } from './model/NeutronFirewallPolicy';
import { NeutronFirewallRule } from './model/NeutronFirewallRule';
import { NeutronInsertFirewallRuleRequestBody } from './model/NeutronInsertFirewallRuleRequestBody';
import { NeutronListFirewallGroupsRequest } from './model/NeutronListFirewallGroupsRequest';
import { NeutronListFirewallGroupsResponse } from './model/NeutronListFirewallGroupsResponse';
import { NeutronListFirewallPoliciesRequest } from './model/NeutronListFirewallPoliciesRequest';
import { NeutronListFirewallPoliciesResponse } from './model/NeutronListFirewallPoliciesResponse';
import { NeutronListFirewallRulesRequest } from './model/NeutronListFirewallRulesRequest';
import { NeutronListFirewallRulesResponse } from './model/NeutronListFirewallRulesResponse';
import { NeutronListSecurityGroupRulesRequest } from './model/NeutronListSecurityGroupRulesRequest';
import { NeutronListSecurityGroupRulesResponse } from './model/NeutronListSecurityGroupRulesResponse';
import { NeutronListSecurityGroupsRequest } from './model/NeutronListSecurityGroupsRequest';
import { NeutronListSecurityGroupsResponse } from './model/NeutronListSecurityGroupsResponse';
import { NeutronPageLink } from './model/NeutronPageLink';
import { NeutronRemoveFirewallRuleRequest } from './model/NeutronRemoveFirewallRuleRequest';
import { NeutronRemoveFirewallRuleRequestBody } from './model/NeutronRemoveFirewallRuleRequestBody';
import { NeutronRemoveFirewallRuleResponse } from './model/NeutronRemoveFirewallRuleResponse';
import { NeutronSecurityGroup } from './model/NeutronSecurityGroup';
import { NeutronSecurityGroupRule } from './model/NeutronSecurityGroupRule';
import { NeutronShowFirewallGroupRequest } from './model/NeutronShowFirewallGroupRequest';
import { NeutronShowFirewallGroupResponse } from './model/NeutronShowFirewallGroupResponse';
import { NeutronShowFirewallPolicyRequest } from './model/NeutronShowFirewallPolicyRequest';
import { NeutronShowFirewallPolicyResponse } from './model/NeutronShowFirewallPolicyResponse';
import { NeutronShowFirewallRuleRequest } from './model/NeutronShowFirewallRuleRequest';
import { NeutronShowFirewallRuleResponse } from './model/NeutronShowFirewallRuleResponse';
import { NeutronShowSecurityGroupRequest } from './model/NeutronShowSecurityGroupRequest';
import { NeutronShowSecurityGroupResponse } from './model/NeutronShowSecurityGroupResponse';
import { NeutronShowSecurityGroupRuleRequest } from './model/NeutronShowSecurityGroupRuleRequest';
import { NeutronShowSecurityGroupRuleResponse } from './model/NeutronShowSecurityGroupRuleResponse';
import { NeutronUpdateFirewallGroupOption } from './model/NeutronUpdateFirewallGroupOption';
import { NeutronUpdateFirewallGroupRequest } from './model/NeutronUpdateFirewallGroupRequest';
import { NeutronUpdateFirewallGroupRequestBody } from './model/NeutronUpdateFirewallGroupRequestBody';
import { NeutronUpdateFirewallGroupResponse } from './model/NeutronUpdateFirewallGroupResponse';
import { NeutronUpdateFirewallPolicyOption } from './model/NeutronUpdateFirewallPolicyOption';
import { NeutronUpdateFirewallPolicyRequest } from './model/NeutronUpdateFirewallPolicyRequest';
import { NeutronUpdateFirewallPolicyRequestBody } from './model/NeutronUpdateFirewallPolicyRequestBody';
import { NeutronUpdateFirewallPolicyResponse } from './model/NeutronUpdateFirewallPolicyResponse';
import { NeutronUpdateFirewallRuleOption } from './model/NeutronUpdateFirewallRuleOption';
import { NeutronUpdateFirewallRuleRequest } from './model/NeutronUpdateFirewallRuleRequest';
import { NeutronUpdateFirewallRuleRequestBody } from './model/NeutronUpdateFirewallRuleRequestBody';
import { NeutronUpdateFirewallRuleResponse } from './model/NeutronUpdateFirewallRuleResponse';
import { NeutronUpdateSecurityGroupOption } from './model/NeutronUpdateSecurityGroupOption';
import { NeutronUpdateSecurityGroupRequest } from './model/NeutronUpdateSecurityGroupRequest';
import { NeutronUpdateSecurityGroupRequestBody } from './model/NeutronUpdateSecurityGroupRequestBody';
import { NeutronUpdateSecurityGroupResponse } from './model/NeutronUpdateSecurityGroupResponse';
import { Port } from './model/Port';
import { Privateip } from './model/Privateip';
import { Quota } from './model/Quota';
import { RejectVpcPeeringRequest } from './model/RejectVpcPeeringRequest';
import { RejectVpcPeeringResponse } from './model/RejectVpcPeeringResponse';
import { ResourceResult } from './model/ResourceResult';
import { ResourceTag } from './model/ResourceTag';
import { Route } from './model/Route';
import { RouteTableListResp } from './model/RouteTableListResp';
import { RouteTableResp } from './model/RouteTableResp';
import { RouteTableRoute } from './model/RouteTableRoute';
import { RoutetableAssociateReqbody } from './model/RoutetableAssociateReqbody';
import { SecurityGroup } from './model/SecurityGroup';
import { SecurityGroupRule } from './model/SecurityGroupRule';
import { ShowNetworkIpAvailabilitiesRequest } from './model/ShowNetworkIpAvailabilitiesRequest';
import { ShowNetworkIpAvailabilitiesResponse } from './model/ShowNetworkIpAvailabilitiesResponse';
import { ShowPortRequest } from './model/ShowPortRequest';
import { ShowPortResponse } from './model/ShowPortResponse';
import { ShowPrivateipRequest } from './model/ShowPrivateipRequest';
import { ShowPrivateipResponse } from './model/ShowPrivateipResponse';
import { ShowQuotaRequest } from './model/ShowQuotaRequest';
import { ShowQuotaResponse } from './model/ShowQuotaResponse';
import { ShowRouteTableRequest } from './model/ShowRouteTableRequest';
import { ShowRouteTableResponse } from './model/ShowRouteTableResponse';
import { ShowSecurityGroupRequest } from './model/ShowSecurityGroupRequest';
import { ShowSecurityGroupResponse } from './model/ShowSecurityGroupResponse';
import { ShowSecurityGroupRuleRequest } from './model/ShowSecurityGroupRuleRequest';
import { ShowSecurityGroupRuleResponse } from './model/ShowSecurityGroupRuleResponse';
import { ShowSubnetRequest } from './model/ShowSubnetRequest';
import { ShowSubnetResponse } from './model/ShowSubnetResponse';
import { ShowSubnetTagsRequest } from './model/ShowSubnetTagsRequest';
import { ShowSubnetTagsResponse } from './model/ShowSubnetTagsResponse';
import { ShowVpcPeeringRequest } from './model/ShowVpcPeeringRequest';
import { ShowVpcPeeringResponse } from './model/ShowVpcPeeringResponse';
import { ShowVpcRequest } from './model/ShowVpcRequest';
import { ShowVpcResponse } from './model/ShowVpcResponse';
import { ShowVpcRouteRequest } from './model/ShowVpcRouteRequest';
import { ShowVpcRouteResponse } from './model/ShowVpcRouteResponse';
import { ShowVpcTagsRequest } from './model/ShowVpcTagsRequest';
import { ShowVpcTagsResponse } from './model/ShowVpcTagsResponse';
import { Subnet } from './model/Subnet';
import { SubnetIpAvailability } from './model/SubnetIpAvailability';
import { SubnetList } from './model/SubnetList';
import { SubnetResult } from './model/SubnetResult';
import { UpdatePortOption } from './model/UpdatePortOption';
import { UpdatePortRequest } from './model/UpdatePortRequest';
import { UpdatePortRequestBody } from './model/UpdatePortRequestBody';
import { UpdatePortResponse } from './model/UpdatePortResponse';
import { UpdateRouteTableReq } from './model/UpdateRouteTableReq';
import { UpdateRouteTableRequest } from './model/UpdateRouteTableRequest';
import { UpdateRouteTableResponse } from './model/UpdateRouteTableResponse';
import { UpdateRoutetableReqBody } from './model/UpdateRoutetableReqBody';
import { UpdateSubnetOption } from './model/UpdateSubnetOption';
import { UpdateSubnetRequest } from './model/UpdateSubnetRequest';
import { UpdateSubnetRequestBody } from './model/UpdateSubnetRequestBody';
import { UpdateSubnetResponse } from './model/UpdateSubnetResponse';
import { UpdateVpcOption } from './model/UpdateVpcOption';
import { UpdateVpcPeeringOption } from './model/UpdateVpcPeeringOption';
import { UpdateVpcPeeringRequest } from './model/UpdateVpcPeeringRequest';
import { UpdateVpcPeeringRequestBody } from './model/UpdateVpcPeeringRequestBody';
import { UpdateVpcPeeringResponse } from './model/UpdateVpcPeeringResponse';
import { UpdateVpcRequest } from './model/UpdateVpcRequest';
import { UpdateVpcRequestBody } from './model/UpdateVpcRequestBody';
import { UpdateVpcResponse } from './model/UpdateVpcResponse';
import { Vpc } from './model/Vpc';
import { VpcInfo } from './model/VpcInfo';
import { VpcPeering } from './model/VpcPeering';
import { VpcRoute } from './model/VpcRoute';

export class VpcClient {
    public static newBuilder(): ClientBuilder<VpcClient> {
            return new ClientBuilder<VpcClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * ??????A?????????VPC???????????????B???VPC???????????????????????????????????????B???????????????????????????????????????????????????????????????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????????????????
     * @param {string} peeringId ????????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public acceptVpcPeering(acceptVpcPeeringRequest?: AcceptVpcPeeringRequest): Promise<AcceptVpcPeeringResponse> {
        const options = ParamCreater().acceptVpcPeering(acceptVpcPeeringRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ?????????????????????????????????????????????A???????????????B???????????????????????????A???????????????????????????B
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ?????????????????????
     * @param {string} routetableId ?????????ID
     * @param {RoutetableAssociateReqbody} routetableAssociate ?????????????????????????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateRouteTable(associateRouteTableRequest?: AssociateRouteTableRequest): Promise<AssociateRouteTableResponse> {
        const options = ParamCreater().associateRouteTable(associateRouteTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????????????????????????????????????????
     * ??????????????????????????????????????????????????????????????????key?????????????????????????????????????????????key????????????????????????????????????key????????????value?????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????????????????????????????
     * @param {string} subnetId ??????ID
     * @param {BatchCreateSubnetTagsRequestBody} batchCreateSubnetTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateSubnetTags(batchCreateSubnetTagsRequest?: BatchCreateSubnetTagsRequest): Promise<void> {
        const options = ParamCreater().batchCreateSubnetTags(batchCreateSubnetTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????????????????????????????????????????
     * ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????tags????????????????????????key????????????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????????????????????????????
     * @param {string} subnetId ??????ID
     * @param {BatchDeleteSubnetTagsRequestBody} batchDeleteSubnetTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteSubnetTags(batchDeleteSubnetTagsRequest?: BatchDeleteSubnetTagsRequest): Promise<void> {
        const options = ParamCreater().batchDeleteSubnetTags(batchDeleteSubnetTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????
     * @param {CreatePortRequestBody} port ??????????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPort(createPortRequest?: CreatePortRequest): Promise<CreatePortResponse> {
        const options = ParamCreater().createPort(createPortRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ???????????????
     * @param {CreateRoutetableReqBody} routetable ??????????????????????????????CreateRouteTableReq??????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRouteTable(createRouteTableRequest?: CreateRouteTableRequest): Promise<CreateRouteTableResponse> {
        const options = ParamCreater().createRouteTable(createRouteTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ??????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ???????????????
     * @param {CreateSecurityGroupRequestBody} securityGroup ?????????????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecurityGroup(createSecurityGroupRequest?: CreateSecurityGroupRequest): Promise<CreateSecurityGroupResponse> {
        const options = ParamCreater().createSecurityGroup(createSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ?????????????????????
     * @param {CreateSecurityGroupRuleRequestBody} securityGroupRule ???????????????????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecurityGroupRule(createSecurityGroupRuleRequest?: CreateSecurityGroupRuleRequest): Promise<CreateSecurityGroupRuleResponse> {
        const options = ParamCreater().createSecurityGroupRule(createSecurityGroupRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????
     * @param {CreateSubnetRequestBody} subnet ??????????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSubnet(createSubnetRequest?: CreateSubnetRequest): Promise<CreateSubnetResponse> {
        const options = ParamCreater().createSubnet(createSubnetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????????????????????????????????????????
     * ???????????????????????????????????????????????????????????????????????????key????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????????????????
     * @param {string} subnetId ??????ID
     * @param {CreateSubnetTagRequestBody} createSubnetTagRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSubnetTag(createSubnetTagRequest?: CreateSubnetTagRequest): Promise<void> {
        const options = ParamCreater().createSubnetTag(createSubnetTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ?????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????????????????
     * @param {CreateVpcPeeringRequestBody} peering peering??????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpcPeering(createVpcPeeringRequest?: CreateVpcPeeringRequest): Promise<CreateVpcPeeringResponse> {
        const options = ParamCreater().createVpcPeering(createVpcPeeringRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????
     * @param {string} portId ??????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePort(deletePortRequest?: DeletePortRequest): Promise<void> {
        const options = ParamCreater().deletePort(deletePortRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ???????????????
     * @param {string} routetableId ?????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRouteTable(deleteRouteTableRequest?: DeleteRouteTableRequest): Promise<void> {
        const options = ParamCreater().deleteRouteTable(deleteRouteTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ??????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ???????????????
     * @param {string} securityGroupId ?????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecurityGroup(deleteSecurityGroupRequest?: DeleteSecurityGroupRequest): Promise<void> {
        const options = ParamCreater().deleteSecurityGroup(deleteSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ?????????????????????
     * @param {string} securityGroupRuleId ???????????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecurityGroupRule(deleteSecurityGroupRuleRequest?: DeleteSecurityGroupRuleRequest): Promise<void> {
        const options = ParamCreater().deleteSecurityGroupRule(deleteSecurityGroupRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????
     * @param {string} vpcId ???????????????vpc_id
     * @param {string} subnetId ??????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSubnet(deleteSubnetRequest?: DeleteSubnetRequest): Promise<void> {
        const options = ParamCreater().deleteSubnet(deleteSubnetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????????????????????????????????????????
     * ????????????????????????????????????key????????????404???Key??????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????????????????
     * @param {string} subnetId ??????ID
     * @param {string} key ?????????????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSubnetTag(deleteSubnetTagRequest?: DeleteSubnetTagRequest): Promise<void> {
        const options = ParamCreater().deleteSubnetTag(deleteSubnetTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ?????????????????????
     * ????????????????????????????????????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????????????????
     * @param {string} peeringId ????????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpcPeering(deleteVpcPeeringRequest?: DeleteVpcPeeringRequest): Promise<void> {
        const options = ParamCreater().deleteVpcPeering(deleteVpcPeeringRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????????????????
     * @param {string} routetableId ?????????ID
     * @param {RoutetableAssociateReqbody} routetableAssociate ?????????????????????????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateRouteTable(disassociateRouteTableRequest?: DisassociateRouteTableRequest): Promise<DisassociateRouteTableResponse> {
        const options = ParamCreater().disassociateRouteTable(disassociateRouteTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ?????????????????????????????????????????????????????????????????????2000????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????????????????
     * @param {string} [name] ?????????????????????name????????????  ????????????????????????????????????255
     * @param {string} [id] ??????port_id????????????
     * @param {number} [limit] ?????????????????????
     * @param {boolean} [adminStateUp] ??????admin_state_up????????????
     * @param {string} [networkId] ??????network_id????????????
     * @param {string} [macAddress] ??????mac_address????????????
     * @param {string} [deviceId] ??????device_id????????????
     * @param {'network:dhcp' | 'neutron:VIP_PORT' | 'network:router_interface_distributed' | 'network:router_centralized_snat'} [deviceOwner] ??????device_owner????????????
     * @param {'ACTIVE' | 'BUILD' | 'DOWN'} [status] ?????????????????????status????????????  ???????????????ACTIVE???BUILD???DOWN
     * @param {string} [marker] ???????????????????????????ID???????????????????????????
     * @param {string} [fixedIps] ??????fixed_ips&#x3D;ip_address??????fixed_ips&#x3D;subnet_id????????????
     * @param {string} [enterpriseProjectId] ???????????????????????????ID?????????????????????????????????????????????  ???????????????????????????36???????????????-???????????????UUID??????????????????????????????0?????????0??????????????????????????????  ????????????????????????????????????????????????????????????????????????all_granted_eps???
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPorts(listPortsRequest?: ListPortsRequest): Promise<ListPortsResponse> {
        const options = ParamCreater().listPorts(listPortsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????????????????????????????????????????????????????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ?????????????????????
     * @param {number} [limit] ?????????????????????
     * @param {string} [marker] ???????????????????????????ID??????????????????????????????
     * @param {string} [id] ?????????ID??????????????????ID????????????
     * @param {string} [vpcId] ???????????????ID???????????????????????????????????????????????????
     * @param {string} [subnetId] ??????ID??????????????????????????????????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRouteTables(listRouteTablesRequest?: ListRouteTablesRequest): Promise<ListRouteTablesResponse> {
        const options = ParamCreater().listRouteTables(listRouteTablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ??????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ???????????????????????????
     * @param {string} [marker] ??????????????????????????????????????????ID???????????????????????????
     * @param {number} [limit] ?????????????????????
     * @param {string} [securityGroupId] ?????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityGroupRules(listSecurityGroupRulesRequest?: ListSecurityGroupRulesRequest): Promise<ListSecurityGroupRulesResponse> {
        const options = ParamCreater().listSecurityGroupRules(listSecurityGroupRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ?????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ?????????????????????
     * @param {number} [limit] ?????????????????????
     * @param {string} [marker] ???????????????????????????ID???????????????????????????
     * @param {string} [vpcId] ??????vpc_id????????????
     * @param {string} [enterpriseProjectId] ???????????????????????????ID??????????????????????????????????????????????????????????????????  ???????????????????????????36???????????????-???????????????UUID??????????????????????????????0?????????0????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????all_granted_eps???
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityGroups(listSecurityGroupsRequest?: ListSecurityGroupsRequest): Promise<ListSecurityGroupsResponse> {
        const options = ParamCreater().listSecurityGroups(listSecurityGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????????????????????????????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubnetTags(): Promise<ListSubnetTagsResponse> {
        const options = ParamCreater().listSubnetTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ??????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????????????????
     * @param {number} [limit] ?????????????????????
     * @param {string} [marker] ???????????????????????????id???????????????????????????
     * @param {string} [vpcId] ??????vpc_id????????????  ??????????????????????????????????????????????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubnets(listSubnetsRequest?: ListSubnetsRequest): Promise<ListSubnetsResponse> {
        const options = ParamCreater().listSubnets(listSubnetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????????????????
     * @param {ListSubnetsByTagsRequestBody} listSubnetsByTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubnetsByTags(listSubnetsByTagsRequest?: ListSubnetsByTagsRequest): Promise<ListSubnetsByTagsResponse> {
        const options = ParamCreater().listSubnetsByTags(listSubnetsByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????????????????????????????????????????????????????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????????????????
     * @param {number} [limit] ?????????????????????
     * @param {string} [marker] ???????????????????????????ID???????????????????????????
     * @param {string} [id] ??????peering_id????????????
     * @param {string} [name] ?????????????????????peering_name?????????  ????????????????????????????????????64
     * @param {'PENDING_ACCEPTANCE' | 'REJECTED' | 'EXPIRED' | 'DELETED' | 'ACTIVE'} [status] ??????status????????????  - PENDING_ACCEPTANCE??????????????? - REJECTED??????????????? - EXPIRED??????????????? - DELETED??????????????? - ACTIVE???????????????
     * @param {string} [tenantId] ????????????ID????????????
     * @param {string} [vpcId] ??????vpc ID????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpcPeerings(listVpcPeeringsRequest?: ListVpcPeeringsRequest): Promise<ListVpcPeeringsResponse> {
        const options = ParamCreater().listVpcPeerings(listVpcPeeringsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ??????A?????????VPC???????????????B???VPC???????????????????????????????????????B???????????????????????????????????????????????????????????????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????????????????
     * @param {string} peeringId ????????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rejectVpcPeering(rejectVpcPeeringRequest?: RejectVpcPeeringRequest): Promise<RejectVpcPeeringResponse> {
        const options = ParamCreater().rejectVpcPeering(rejectVpcPeeringRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????
     * @param {string} portId ??????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPort(showPortRequest?: ShowPortRequest): Promise<ShowPortResponse> {
        const options = ParamCreater().showPort(showPortRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ??????????????????VPC???????????????????????????????????????vpc??????????????????????????????????????????????????????????????????????????????IP?????????vpn????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????
     * @param {'vpc' | 'subnet' | 'securityGroup' | 'securityGroupRule' | 'publicIp' | 'vpn' | 'vpngw' | 'vpcPeer' | 'firewall' | 'shareBandwidth' | 'shareBandwidthIP' | 'loadbalancer' | 'listener' | 'physicalConnect' | 'virtualInterface' | 'vpcContainRoutetable' | 'routetableContainRoutes'} [type] ?????????????????????type????????????????????????????????? ???????????????vpc???subnet???securityGroup???securityGroupRule???publicIp???vpn???vpngw???vpcPeer???firewall???shareBandwidth???shareBandwidthIP???loadbalancer???listener???physicalConnect???virtualInterface???vpcContainRoutetable???routetableContainRoutes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuota(showQuotaRequest?: ShowQuotaRequest): Promise<ShowQuotaResponse> {
        const options = ParamCreater().showQuota(showQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ?????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ???????????????
     * @param {string} routetableId ?????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRouteTable(showRouteTableRequest?: ShowRouteTableRequest): Promise<ShowRouteTableResponse> {
        const options = ParamCreater().showRouteTable(showRouteTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ??????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ???????????????
     * @param {string} securityGroupId ?????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecurityGroup(showSecurityGroupRequest?: ShowSecurityGroupRequest): Promise<ShowSecurityGroupResponse> {
        const options = ParamCreater().showSecurityGroup(showSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ?????????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ?????????????????????
     * @param {string} securityGroupRuleId ???????????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecurityGroupRule(showSecurityGroupRuleRequest?: ShowSecurityGroupRuleRequest): Promise<ShowSecurityGroupRuleResponse> {
        const options = ParamCreater().showSecurityGroupRule(showSecurityGroupRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ?????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????
     * @param {string} subnetId ??????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSubnet(showSubnetRequest?: ShowSubnetRequest): Promise<ShowSubnetResponse> {
        const options = ParamCreater().showSubnet(showSubnetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ??????????????????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????????????????
     * @param {string} subnetId ??????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSubnetTags(showSubnetTagsRequest?: ShowSubnetTagsRequest): Promise<ShowSubnetTagsResponse> {
        const options = ParamCreater().showSubnetTags(showSubnetTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????????????????
     * @param {string} peeringId ????????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpcPeering(showVpcPeeringRequest?: ShowVpcPeeringRequest): Promise<ShowVpcPeeringResponse> {
        const options = ParamCreater().showVpcPeering(showVpcPeeringRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????
     * @param {string} portId ??????ID
     * @param {UpdatePortRequestBody} port ??????????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePort(updatePortRequest?: UpdatePortRequest): Promise<UpdatePortResponse> {
        const options = ParamCreater().updatePort(updatePortRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????????????????????????????????????????????????????????????????????????????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ???????????????
     * @param {string} routetableId ?????????ID
     * @param {UpdateRoutetableReqBody} routetable ??????????????????????????????UpdateRouteTableReq??????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRouteTable(updateRouteTableRequest?: UpdateRouteTableRequest): Promise<UpdateRouteTableResponse> {
        const options = ParamCreater().updateRouteTable(updateRouteTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????
     * @param {string} vpcId ???????????????vpc_id
     * @param {string} subnetId ??????ID
     * @param {UpdateSubnetRequestBody} subnet ??????????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSubnet(updateSubnetRequest?: UpdateSubnetRequest): Promise<UpdateSubnetResponse> {
        const options = ParamCreater().updateSubnet(updateSubnetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ?????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????????????????
     * @param {string} peeringId ????????????ID
     * @param {UpdateVpcPeeringRequestBody} peering ??????peering??????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVpcPeering(updateVpcPeeringRequest?: UpdateVpcPeeringRequest): Promise<UpdateVpcPeeringResponse> {
        const options = ParamCreater().updateVpcPeering(updateVpcPeeringRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????IP???
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????IP
     * @param {CreatePrivateipRequestBody} privateips ????????????IP??????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPrivateip(createPrivateipRequest?: CreatePrivateipRequest): Promise<CreatePrivateipResponse> {
        const options = ParamCreater().createPrivateip(createPrivateipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????IP???
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????IP
     * @param {string} privateipId ??????IP ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePrivateip(deletePrivateipRequest?: DeletePrivateipRequest): Promise<void> {
        const options = ParamCreater().deletePrivateip(deletePrivateipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ??????????????????????????????IP?????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????IP??????
     * @param {string} subnetId ??????IP???????????????????????????
     * @param {number} [limit] ?????????????????????
     * @param {string} [marker] ???????????????????????????id???????????????????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPrivateips(listPrivateipsRequest?: ListPrivateipsRequest): Promise<ListPrivateipsResponse> {
        const options = ParamCreater().listPrivateips(listPrivateipsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ??????????????????????????????IPv4?????????????????????
     * ?????????????????????IP??????????????????IP??????????????????????????????????????????IP?????????????????????IP???????????????
     * 
     * &gt; ??????
     * 
     * - ???????????????????????????????????????1???????????????4?????????????????????????????????DHCP????????????
     * - ???????????????????????????IP?????????????????????IP??????????????????????????????????????????
     * - ?????????IP???????????????????????????????????????IP?????????????????????IP????????????????????????????????????????????????IP????????????IP???????????????????????????IP???????????????IP??????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????IP????????????
     * @param {string} networkId ??????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNetworkIpAvailabilities(showNetworkIpAvailabilitiesRequest?: ShowNetworkIpAvailabilitiesRequest): Promise<ShowNetworkIpAvailabilitiesResponse> {
        const options = ParamCreater().showNetworkIpAvailabilities(showNetworkIpAvailabilitiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ??????ID????????????IP???
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????IP
     * @param {string} privateipId ??????IP ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPrivateip(showPrivateipRequest?: ShowPrivateipRequest): Promise<ShowPrivateipResponse> {
        const options = ParamCreater().showPrivateip(showPrivateipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ???????????????
     * @param {NeutronCreateSecurityGroupRequestBody} securityGroup ???????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronCreateSecurityGroup(neutronCreateSecurityGroupRequest?: NeutronCreateSecurityGroupRequest): Promise<NeutronCreateSecurityGroupResponse> {
        const options = ParamCreater().neutronCreateSecurityGroup(neutronCreateSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ?????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ?????????????????????
     * @param {NeutronCreateSecurityGroupRuleRequestBody} securityGroupRule ?????????????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronCreateSecurityGroupRule(neutronCreateSecurityGroupRuleRequest?: NeutronCreateSecurityGroupRuleRequest): Promise<NeutronCreateSecurityGroupRuleResponse> {
        const options = ParamCreater().neutronCreateSecurityGroupRule(neutronCreateSecurityGroupRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ???????????????
     * @param {string} securityGroupId ?????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronDeleteSecurityGroup(neutronDeleteSecurityGroupRequest?: NeutronDeleteSecurityGroupRequest): Promise<void> {
        const options = ParamCreater().neutronDeleteSecurityGroup(neutronDeleteSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ?????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ?????????????????????
     * @param {string} securityGroupRuleId ???????????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronDeleteSecurityGroupRule(neutronDeleteSecurityGroupRuleRequest?: NeutronDeleteSecurityGroupRuleRequest): Promise<void> {
        const options = ParamCreater().neutronDeleteSecurityGroupRule(neutronDeleteSecurityGroupRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ?????????????????????????????????????????????????????????????????????????????????????????????2000??????????????????2000????????????????????????????????????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ???????????????????????????
     * @param {number} [limit] ?????????????????????
     * @param {string} [marker] ???????????????????????????ID???????????????????????????
     * @param {string} [id] ??????????????????????????????id??????????????????
     * @param {string} [direction] ?????????????????????????????????????????????????????????ingress???egress????????????
     * @param {string} [protocol] ????????????????????????IP????????????????????????
     * @param {string} [ethertype] ?????????????????????????????????????????????IPv4??????IPv6
     * @param {string} [description] ????????????????????????????????????????????????
     * @param {string} [remoteIpPrefix] ??????????????????????????????????????????IP????????????????????????
     * @param {string} [remoteGroupId] ???????????????????????????????????????????????????ID??????????????????
     * @param {string} [securityGroupId] ?????????????????????????????????????????????ID??????????????????
     * @param {string} [portRangeMax] ????????????????????????????????????
     * @param {string} [portRangeMin] ????????????????????????????????????
     * @param {string} [tenantId] ????????????????????????????????????ID??????????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronListSecurityGroupRules(neutronListSecurityGroupRulesRequest?: NeutronListSecurityGroupRulesRequest): Promise<NeutronListSecurityGroupRulesResponse> {
        const options = ParamCreater().neutronListSecurityGroupRules(neutronListSecurityGroupRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ?????????????????????????????????????????????????????????????????????2000??????????????????2000???????????????????????????????????????????????????????????? ???
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ?????????????????????
     * @param {number} [limit] ?????????????????????
     * @param {string} [marker] ???????????????????????????ID???????????????????????????
     * @param {string} [id] ????????????????????????ID????????????
     * @param {string} [name] ????????????????????????????????????
     * @param {string} [description] ????????????????????????????????????
     * @param {string} [tenantId] ??????????????????????????????ID????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronListSecurityGroups(neutronListSecurityGroupsRequest?: NeutronListSecurityGroupsRequest): Promise<NeutronListSecurityGroupsResponse> {
        const options = ParamCreater().neutronListSecurityGroups(neutronListSecurityGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ?????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ???????????????
     * @param {string} securityGroupId ?????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronShowSecurityGroup(neutronShowSecurityGroupRequest?: NeutronShowSecurityGroupRequest): Promise<NeutronShowSecurityGroupResponse> {
        const options = ParamCreater().neutronShowSecurityGroup(neutronShowSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ??????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ?????????????????????
     * @param {string} securityGroupRuleId ???????????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronShowSecurityGroupRule(neutronShowSecurityGroupRuleRequest?: NeutronShowSecurityGroupRuleRequest): Promise<NeutronShowSecurityGroupRuleResponse> {
        const options = ParamCreater().neutronShowSecurityGroupRule(neutronShowSecurityGroupRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ???????????????
     * @param {string} securityGroupId ?????????ID
     * @param {NeutronUpdateSecurityGroupRequestBody} securityGroup ?????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronUpdateSecurityGroup(neutronUpdateSecurityGroupRequest?: NeutronUpdateSecurityGroupRequest): Promise<NeutronUpdateSecurityGroupResponse> {
        const options = ParamCreater().neutronUpdateSecurityGroup(neutronUpdateSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ??????????????????ACL?????????????????????ACL????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????ACL??????
     * @param {string} firewallPolicyId ??????ACL???????????????ID
     * @param {NeutronInsertFirewallRuleRequestBody} insertFirewallRule ??????ACL???????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronAddFirewallRule(neutronAddFirewallRuleRequest?: NeutronAddFirewallRuleRequest): Promise<NeutronAddFirewallRuleResponse> {
        const options = ParamCreater().neutronAddFirewallRule(neutronAddFirewallRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????ACL???
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????ACL???
     * @param {NeutronCreateFirewallGroupRequestBody} firewallGroup firewall group??????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronCreateFirewallGroup(neutronCreateFirewallGroupRequest?: NeutronCreateFirewallGroupRequest): Promise<NeutronCreateFirewallGroupResponse> {
        const options = ParamCreater().neutronCreateFirewallGroup(neutronCreateFirewallGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????ACL?????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????ACL??????
     * @param {NeutronCreateFirewallPolicyRequestBody} firewallPolicy firewall policy??????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronCreateFirewallPolicy(neutronCreateFirewallPolicyRequest?: NeutronCreateFirewallPolicyRequest): Promise<NeutronCreateFirewallPolicyResponse> {
        const options = ParamCreater().neutronCreateFirewallPolicy(neutronCreateFirewallPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????ACL?????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????ACL??????
     * @param {NeutronCreateFirewallRuleRequestBody} firewallRule firewall rule??????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronCreateFirewallRule(neutronCreateFirewallRuleRequest?: NeutronCreateFirewallRuleRequest): Promise<NeutronCreateFirewallRuleResponse> {
        const options = ParamCreater().neutronCreateFirewallRule(neutronCreateFirewallRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????ACL???
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????ACL???
     * @param {string} firewallGroupId ??????ACL????????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronDeleteFirewallGroup(neutronDeleteFirewallGroupRequest?: NeutronDeleteFirewallGroupRequest): Promise<void> {
        const options = ParamCreater().neutronDeleteFirewallGroup(neutronDeleteFirewallGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????ACL?????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????ACL??????
     * @param {string} firewallPolicyId ??????ACL???????????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronDeleteFirewallPolicy(neutronDeleteFirewallPolicyRequest?: NeutronDeleteFirewallPolicyRequest): Promise<void> {
        const options = ParamCreater().neutronDeleteFirewallPolicy(neutronDeleteFirewallPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????ACL?????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????ACL??????
     * @param {string} firewallRuleId ??????ACL???????????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronDeleteFirewallRule(neutronDeleteFirewallRuleRequest?: NeutronDeleteFirewallRuleRequest): Promise<void> {
        const options = ParamCreater().neutronDeleteFirewallRule(neutronDeleteFirewallRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ?????????????????????????????????????????????????????????ACL????????????????????????????????????2000??????????????????2000???????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????????????????ACL???
     * @param {string} [marker] ???????????????????????????ID???????????????????????????
     * @param {number} [limit] ?????????????????????
     * @param {Array<string>} [id] ??????id????????????ACL???
     * @param {Array<string>} [name] ??????name??????ACL???
     * @param {Array<string>} [description] ??????description??????ACL???
     * @param {string} [ingressFirewallPolicyId] ????????????????????????ACL??????ID????????????ACL???
     * @param {string} [egressFirewallPolicyId] ????????????????????????ACL????????????????????????ACL???
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronListFirewallGroups(neutronListFirewallGroupsRequest?: NeutronListFirewallGroupsRequest): Promise<NeutronListFirewallGroupsResponse> {
        const options = ParamCreater().neutronListFirewallGroups(neutronListFirewallGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ?????????????????????????????????????????????????????????ACL???????????????????????????????????????2000??????????????????2000???????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????????????????ACL??????
     * @param {number} [limit] ?????????????????????
     * @param {string} [marker] ???????????????????????????ID???????????????????????????
     * @param {Array<string>} [id] ????????????ACL??????ID????????????ACL??????
     * @param {Array<string>} [name] ??????name????????????ACL??????
     * @param {Array<string>} [description] ????????????ACL??????????????????????????????ACL??????
     * @param {string} [tenantId] ??????tenant_id??????????????????ACL??????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronListFirewallPolicies(neutronListFirewallPoliciesRequest?: NeutronListFirewallPoliciesRequest): Promise<NeutronListFirewallPoliciesResponse> {
        const options = ParamCreater().neutronListFirewallPolicies(neutronListFirewallPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ?????????????????????????????????????????????????????????ACL???????????????????????????????????????2000??????????????????2000???????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????????????????ACL??????
     * @param {string} [marker] ???????????????????????????ID???????????????????????????
     * @param {number} [limit] ?????????????????????
     * @param {Array<string>} [id] ????????????ACL??????ID????????????ACL??????
     * @param {Array<string>} [name] ????????????ACL??????name????????????ACL??????
     * @param {Array<string>} [description] ????????????ACL?????????description????????????ACL??????
     * @param {string} [action] ??????action??????????????????ACL??????
     * @param {string} [tenantId] ??????tenant_id??????????????????ACL??????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronListFirewallRules(neutronListFirewallRulesRequest?: NeutronListFirewallRulesRequest): Promise<NeutronListFirewallRulesResponse> {
        const options = ParamCreater().neutronListFirewallRules(neutronListFirewallRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????ACL???????????????????????????ACL?????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????ACL??????
     * @param {string} firewallPolicyId ??????ACL???????????????ID
     * @param {NeutronRemoveFirewallRuleRequestBody} removeFirewallRule ??????ACL???????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronRemoveFirewallRule(neutronRemoveFirewallRuleRequest?: NeutronRemoveFirewallRuleRequest): Promise<NeutronRemoveFirewallRuleResponse> {
        const options = ParamCreater().neutronRemoveFirewallRule(neutronRemoveFirewallRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ??????????????????ACL????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????????????????ACL?????????
     * @param {string} firewallGroupId ??????ACL????????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronShowFirewallGroup(neutronShowFirewallGroupRequest?: NeutronShowFirewallGroupRequest): Promise<NeutronShowFirewallGroupResponse> {
        const options = ParamCreater().neutronShowFirewallGroup(neutronShowFirewallGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ??????????????????ACL???????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????????????????ACL????????????
     * @param {string} firewallPolicyId ??????ACL???????????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronShowFirewallPolicy(neutronShowFirewallPolicyRequest?: NeutronShowFirewallPolicyRequest): Promise<NeutronShowFirewallPolicyResponse> {
        const options = ParamCreater().neutronShowFirewallPolicy(neutronShowFirewallPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ??????????????????ACL?????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????????????????ACL??????
     * @param {string} firewallRuleId ??????ACL??????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronShowFirewallRule(neutronShowFirewallRuleRequest?: NeutronShowFirewallRuleRequest): Promise<NeutronShowFirewallRuleResponse> {
        const options = ParamCreater().neutronShowFirewallRule(neutronShowFirewallRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????ACL??????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????ACL???
     * @param {string} firewallGroupId ??????ACL????????????ID
     * @param {NeutronUpdateFirewallGroupRequestBody} firewallGroup firewall group??????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronUpdateFirewallGroup(neutronUpdateFirewallGroupRequest?: NeutronUpdateFirewallGroupRequest): Promise<NeutronUpdateFirewallGroupResponse> {
        const options = ParamCreater().neutronUpdateFirewallGroup(neutronUpdateFirewallGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????ACL?????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????ACL??????
     * @param {string} firewallPolicyId ??????ACL???????????????ID
     * @param {NeutronUpdateFirewallPolicyRequestBody} firewallPolicy firewall policy??????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronUpdateFirewallPolicy(neutronUpdateFirewallPolicyRequest?: NeutronUpdateFirewallPolicyRequest): Promise<NeutronUpdateFirewallPolicyResponse> {
        const options = ParamCreater().neutronUpdateFirewallPolicy(neutronUpdateFirewallPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????ACL?????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????ACL??????
     * @param {string} firewallRuleId ??????ACL???????????????ID
     * @param {NeutronUpdateFirewallRuleRequestBody} firewallRule firewall rule??????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronUpdateFirewallRule(neutronUpdateFirewallRuleRequest?: NeutronUpdateFirewallRuleRequest): Promise<NeutronUpdateFirewallRuleResponse> {
        const options = ParamCreater().neutronUpdateFirewallRule(neutronUpdateFirewallRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????VPC?????????????????????????????????
     * ??????????????????????????????????????????????????????????????????key?????????????????????????????????????????????key????????????????????????????????????key????????????value?????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????VPC????????????
     * @param {string} vpcId ?????????????????????????????????????????? ?????????????????????UUID ?????????ID?????????VPC????????????
     * @param {BatchCreateVpcTagsRequestBody} batchCreateVpcTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateVpcTags(batchCreateVpcTagsRequest?: BatchCreateVpcTagsRequest): Promise<void> {
        const options = ParamCreater().batchCreateVpcTags(batchCreateVpcTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????VPC?????????????????????????????????
     * ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????tags????????????????????????key????????????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ????????????VPC????????????
     * @param {string} vpcId ?????????????????????????????????????????? ?????????????????????UUID ?????????ID?????????VPC????????????
     * @param {BatchDeleteVpcTagsRequestBody} batchDeleteVpcTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteVpcTags(batchDeleteVpcTagsRequest?: BatchDeleteVpcTagsRequest): Promise<void> {
        const options = ParamCreater().batchDeleteVpcTags(batchDeleteVpcTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????VPC
     * @param {CreateVpcRequestBody} vpc ??????VPC??????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpc(createVpcRequest?: CreateVpcRequest): Promise<CreateVpcResponse> {
        const options = ParamCreater().createVpc(createVpcRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ?????????VPC??????????????????????????????
     * ???????????????????????????????????????????????????????????????????????????key????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????VPC????????????
     * @param {string} vpcId ?????????????????????????????????????????? ?????????????????????UUID ?????????ID?????????VPC????????????
     * @param {CreateVpcResourceTagRequestBody} createVpcResourceTagRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpcResourceTag(createVpcResourceTagRequest?: CreateVpcResourceTagRequest): Promise<void> {
        const options = ParamCreater().createVpcResourceTag(createVpcResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????VPC??????
     * @param {CreateVpcRouteRequestBody} route route????????????????????????destination???nexthop???type???vpc_id???
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpcRoute(createVpcRouteRequest?: CreateVpcRouteRequest): Promise<CreateVpcRouteResponse> {
        const options = ParamCreater().createVpcRoute(createVpcRouteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????VPC
     * @param {string} vpcId ???????????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpc(deleteVpcRequest?: DeleteVpcRequest): Promise<void> {
        const options = ParamCreater().deleteVpc(deleteVpcRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????VPC??????
     * @param {string} routeId ??????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpcRoute(deleteVpcRouteRequest?: DeleteVpcRouteRequest): Promise<void> {
        const options = ParamCreater().deleteVpcRoute(deleteVpcRouteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????VPC???????????????????????????
     * ????????????????????????????????????key????????????404???Key??????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????VPC????????????
     * @param {string} vpcId ?????????????????????????????????????????? ?????????????????????UUID ?????????ID?????????VPC????????????
     * @param {string} key ????????????????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpcTag(deleteVpcTagRequest?: DeleteVpcTagRequest): Promise<void> {
        const options = ParamCreater().deleteVpcTag(deleteVpcTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????????????????????????????????????????????????????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????VPC????????????
     * @param {number} [limit] ?????????????????????
     * @param {string} [marker] ???????????????????????????ID???????????????????????????
     * @param {string} [id] ??????routes_id????????????
     * @param {'peering'} [type] ?????????????????????????????????????????????  ???????????????peering
     * @param {string} [vpcId] ??????vpc_id????????????
     * @param {string} [destination] ????????????????????????CIDR????????????
     * @param {string} [tenantId] ????????????ID????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpcRoutes(listVpcRoutesRequest?: ListVpcRoutesRequest): Promise<ListVpcRoutesResponse> {
        const options = ParamCreater().listVpcRoutes(listVpcRoutesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????????????????????????????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????VPC????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpcTags(): Promise<ListVpcTagsResponse> {
        const options = ParamCreater().listVpcTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ??????????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????VPC??????
     * @param {number} [limit] ?????????????????????
     * @param {string} [marker] ???????????????????????????ID???????????????????????????
     * @param {string} [id] ??????????????????????????????ID????????????????????????????????????ID?????????????????????
     * @param {string} [enterpriseProjectId] ???????????????????????????ID????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????  ???????????????????????????36???????????????-???????????????UUID??????????????????????????????0?????????0???????????????????????????????????????????????????????????????????????????????????????????????????????????????all_granted_eps???
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpcs(listVpcsRequest?: ListVpcsRequest): Promise<ListVpcsResponse> {
        const options = ParamCreater().listVpcs(listVpcsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ???????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????VPC????????????
     * @param {ListVpcsByTagsRequestBody} listVpcsByTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpcsByTags(listVpcsByTagsRequest?: ListVpcsByTagsRequest): Promise<ListVpcsByTagsResponse> {
        const options = ParamCreater().listVpcsByTags(listVpcsByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????VPC
     * @param {string} vpcId ???????????????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpc(showVpcRequest?: ShowVpcRequest): Promise<ShowVpcResponse> {
        const options = ParamCreater().showVpc(showVpcRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ??????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????VPC??????
     * @param {string} routeId ??????ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpcRoute(showVpcRouteRequest?: ShowVpcRouteRequest): Promise<ShowVpcRouteResponse> {
        const options = ParamCreater().showVpcRoute(showVpcRouteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????VPC?????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????VPC????????????
     * @param {string} vpcId ?????????????????????????????????????????? ?????????????????????UUID ?????????ID?????????VPC????????????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpcTags(showVpcTagsRequest?: ShowVpcTagsRequest): Promise<ShowVpcTagsResponse> {
        const options = ParamCreater().showVpcTags(showVpcTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ????????????????????????
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ??????VPC
     * @param {string} vpcId ???????????????ID
     * @param {UpdateVpcRequestBody} vpc ??????VPC??????
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVpc(updateVpcRequest?: UpdateVpcRequest): Promise<UpdateVpcResponse> {
        const options = ParamCreater().updateVpc(updateVpcRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * ??????A?????????VPC???????????????B???VPC???????????????????????????????????????B???????????????????????????????????????????????????????????????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        acceptVpcPeering(acceptVpcPeeringRequest?: AcceptVpcPeeringRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/vpc/peerings/{peering_id}/accept",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let peeringId;

            if (acceptVpcPeeringRequest !== null && acceptVpcPeeringRequest !== undefined) {
                if (acceptVpcPeeringRequest instanceof AcceptVpcPeeringRequest) {
                    peeringId = acceptVpcPeeringRequest.peeringId;
                } else {
                    peeringId = acceptVpcPeeringRequest['peering_id'];
                }
            }

        
            if (peeringId === null || peeringId === undefined) {
            throw new RequiredError('peeringId','Required parameter peeringId was null or undefined when calling acceptVpcPeering.');
            }

            options.pathParams = { 'peering_id': peeringId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ?????????????????????????????????????????????A???????????????B???????????????????????????A???????????????????????????B
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateRouteTable(associateRouteTableRequest?: AssociateRouteTableRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/routetables/{routetable_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let routetableId;

            if (associateRouteTableRequest !== null && associateRouteTableRequest !== undefined) {
                if (associateRouteTableRequest instanceof AssociateRouteTableRequest) {
                    routetableId = associateRouteTableRequest.routetableId;
                    body = associateRouteTableRequest.body
                } else {
                    routetableId = associateRouteTableRequest['routetable_id'];
                    body = associateRouteTableRequest['body'];
                }
            }

        
            if (routetableId === null || routetableId === undefined) {
            throw new RequiredError('routetableId','Required parameter routetableId was null or undefined when calling associateRouteTable.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'routetable_id': routetableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????????????????????????????????????????
         * ??????????????????????????????????????????????????????????????????key?????????????????????????????????????????????key????????????????????????????????????key????????????value?????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateSubnetTags(batchCreateSubnetTagsRequest?: BatchCreateSubnetTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/subnets/{subnet_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let subnetId;

            if (batchCreateSubnetTagsRequest !== null && batchCreateSubnetTagsRequest !== undefined) {
                if (batchCreateSubnetTagsRequest instanceof BatchCreateSubnetTagsRequest) {
                    subnetId = batchCreateSubnetTagsRequest.subnetId;
                    body = batchCreateSubnetTagsRequest.body
                } else {
                    subnetId = batchCreateSubnetTagsRequest['subnet_id'];
                    body = batchCreateSubnetTagsRequest['body'];
                }
            }

        
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling batchCreateSubnetTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'subnet_id': subnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????????????????????????????????????????
         * ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????tags????????????????????????key????????????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteSubnetTags(batchDeleteSubnetTagsRequest?: BatchDeleteSubnetTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/subnets/{subnet_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let subnetId;

            if (batchDeleteSubnetTagsRequest !== null && batchDeleteSubnetTagsRequest !== undefined) {
                if (batchDeleteSubnetTagsRequest instanceof BatchDeleteSubnetTagsRequest) {
                    subnetId = batchDeleteSubnetTagsRequest.subnetId;
                    body = batchDeleteSubnetTagsRequest.body
                } else {
                    subnetId = batchDeleteSubnetTagsRequest['subnet_id'];
                    body = batchDeleteSubnetTagsRequest['body'];
                }
            }

        
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling batchDeleteSubnetTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'subnet_id': subnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPort(createPortRequest?: CreatePortRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/ports",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createPortRequest !== null && createPortRequest !== undefined) {
                if (createPortRequest instanceof CreatePortRequest) {
                    body = createPortRequest.body
                } else {
                    body = createPortRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRouteTable(createRouteTableRequest?: CreateRouteTableRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/routetables",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createRouteTableRequest !== null && createRouteTableRequest !== undefined) {
                if (createRouteTableRequest instanceof CreateRouteTableRequest) {
                    body = createRouteTableRequest.body
                } else {
                    body = createRouteTableRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ??????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecurityGroup(createSecurityGroupRequest?: CreateSecurityGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/security-groups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createSecurityGroupRequest !== null && createSecurityGroupRequest !== undefined) {
                if (createSecurityGroupRequest instanceof CreateSecurityGroupRequest) {
                    body = createSecurityGroupRequest.body
                } else {
                    body = createSecurityGroupRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecurityGroupRule(createSecurityGroupRuleRequest?: CreateSecurityGroupRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/security-group-rules",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createSecurityGroupRuleRequest !== null && createSecurityGroupRuleRequest !== undefined) {
                if (createSecurityGroupRuleRequest instanceof CreateSecurityGroupRuleRequest) {
                    body = createSecurityGroupRuleRequest.body
                } else {
                    body = createSecurityGroupRuleRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSubnet(createSubnetRequest?: CreateSubnetRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/subnets",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createSubnetRequest !== null && createSubnetRequest !== undefined) {
                if (createSubnetRequest instanceof CreateSubnetRequest) {
                    body = createSubnetRequest.body
                } else {
                    body = createSubnetRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????????????????????????????????????????
         * ???????????????????????????????????????????????????????????????????????????key????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSubnetTag(createSubnetTagRequest?: CreateSubnetTagRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/subnets/{subnet_id}/tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let subnetId;

            if (createSubnetTagRequest !== null && createSubnetTagRequest !== undefined) {
                if (createSubnetTagRequest instanceof CreateSubnetTagRequest) {
                    subnetId = createSubnetTagRequest.subnetId;
                    body = createSubnetTagRequest.body
                } else {
                    subnetId = createSubnetTagRequest['subnet_id'];
                    body = createSubnetTagRequest['body'];
                }
            }

        
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling createSubnetTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'subnet_id': subnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ?????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpcPeering(createVpcPeeringRequest?: CreateVpcPeeringRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/vpc/peerings",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createVpcPeeringRequest !== null && createVpcPeeringRequest !== undefined) {
                if (createVpcPeeringRequest instanceof CreateVpcPeeringRequest) {
                    body = createVpcPeeringRequest.body
                } else {
                    body = createVpcPeeringRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePort(deletePortRequest?: DeletePortRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/ports/{port_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let portId;

            if (deletePortRequest !== null && deletePortRequest !== undefined) {
                if (deletePortRequest instanceof DeletePortRequest) {
                    portId = deletePortRequest.portId;
                } else {
                    portId = deletePortRequest['port_id'];
                }
            }

        
            if (portId === null || portId === undefined) {
            throw new RequiredError('portId','Required parameter portId was null or undefined when calling deletePort.');
            }

            options.pathParams = { 'port_id': portId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRouteTable(deleteRouteTableRequest?: DeleteRouteTableRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/routetables/{routetable_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let routetableId;

            if (deleteRouteTableRequest !== null && deleteRouteTableRequest !== undefined) {
                if (deleteRouteTableRequest instanceof DeleteRouteTableRequest) {
                    routetableId = deleteRouteTableRequest.routetableId;
                } else {
                    routetableId = deleteRouteTableRequest['routetable_id'];
                }
            }

        
            if (routetableId === null || routetableId === undefined) {
            throw new RequiredError('routetableId','Required parameter routetableId was null or undefined when calling deleteRouteTable.');
            }

            options.pathParams = { 'routetable_id': routetableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ??????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecurityGroup(deleteSecurityGroupRequest?: DeleteSecurityGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/security-groups/{security_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let securityGroupId;

            if (deleteSecurityGroupRequest !== null && deleteSecurityGroupRequest !== undefined) {
                if (deleteSecurityGroupRequest instanceof DeleteSecurityGroupRequest) {
                    securityGroupId = deleteSecurityGroupRequest.securityGroupId;
                } else {
                    securityGroupId = deleteSecurityGroupRequest['security_group_id'];
                }
            }

        
            if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError('securityGroupId','Required parameter securityGroupId was null or undefined when calling deleteSecurityGroup.');
            }

            options.pathParams = { 'security_group_id': securityGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecurityGroupRule(deleteSecurityGroupRuleRequest?: DeleteSecurityGroupRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/security-group-rules/{security_group_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let securityGroupRuleId;

            if (deleteSecurityGroupRuleRequest !== null && deleteSecurityGroupRuleRequest !== undefined) {
                if (deleteSecurityGroupRuleRequest instanceof DeleteSecurityGroupRuleRequest) {
                    securityGroupRuleId = deleteSecurityGroupRuleRequest.securityGroupRuleId;
                } else {
                    securityGroupRuleId = deleteSecurityGroupRuleRequest['security_group_rule_id'];
                }
            }

        
            if (securityGroupRuleId === null || securityGroupRuleId === undefined) {
            throw new RequiredError('securityGroupRuleId','Required parameter securityGroupRuleId was null or undefined when calling deleteSecurityGroupRule.');
            }

            options.pathParams = { 'security_group_rule_id': securityGroupRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSubnet(deleteSubnetRequest?: DeleteSubnetRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/vpcs/{vpc_id}/subnets/{subnet_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpcId;
            
            let subnetId;

            if (deleteSubnetRequest !== null && deleteSubnetRequest !== undefined) {
                if (deleteSubnetRequest instanceof DeleteSubnetRequest) {
                    vpcId = deleteSubnetRequest.vpcId;
                    subnetId = deleteSubnetRequest.subnetId;
                } else {
                    vpcId = deleteSubnetRequest['vpc_id'];
                    subnetId = deleteSubnetRequest['subnet_id'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling deleteSubnet.');
            }
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling deleteSubnet.');
            }

            options.pathParams = { 'vpc_id': vpcId,'subnet_id': subnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????????????????????????????????????????
         * ????????????????????????????????????key????????????404???Key??????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSubnetTag(deleteSubnetTagRequest?: DeleteSubnetTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/{project_id}/subnets/{subnet_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let subnetId;
            
            let key;

            if (deleteSubnetTagRequest !== null && deleteSubnetTagRequest !== undefined) {
                if (deleteSubnetTagRequest instanceof DeleteSubnetTagRequest) {
                    subnetId = deleteSubnetTagRequest.subnetId;
                    key = deleteSubnetTagRequest.key;
                } else {
                    subnetId = deleteSubnetTagRequest['subnet_id'];
                    key = deleteSubnetTagRequest['key'];
                }
            }

        
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling deleteSubnetTag.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteSubnetTag.');
            }

            options.pathParams = { 'subnet_id': subnetId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ?????????????????????
         * ????????????????????????????????????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpcPeering(deleteVpcPeeringRequest?: DeleteVpcPeeringRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/vpc/peerings/{peering_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let peeringId;

            if (deleteVpcPeeringRequest !== null && deleteVpcPeeringRequest !== undefined) {
                if (deleteVpcPeeringRequest instanceof DeleteVpcPeeringRequest) {
                    peeringId = deleteVpcPeeringRequest.peeringId;
                } else {
                    peeringId = deleteVpcPeeringRequest['peering_id'];
                }
            }

        
            if (peeringId === null || peeringId === undefined) {
            throw new RequiredError('peeringId','Required parameter peeringId was null or undefined when calling deleteVpcPeering.');
            }

            options.pathParams = { 'peering_id': peeringId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateRouteTable(disassociateRouteTableRequest?: DisassociateRouteTableRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/routetables/{routetable_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let routetableId;

            if (disassociateRouteTableRequest !== null && disassociateRouteTableRequest !== undefined) {
                if (disassociateRouteTableRequest instanceof DisassociateRouteTableRequest) {
                    routetableId = disassociateRouteTableRequest.routetableId;
                    body = disassociateRouteTableRequest.body
                } else {
                    routetableId = disassociateRouteTableRequest['routetable_id'];
                    body = disassociateRouteTableRequest['body'];
                }
            }

        
            if (routetableId === null || routetableId === undefined) {
            throw new RequiredError('routetableId','Required parameter routetableId was null or undefined when calling disassociateRouteTable.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'routetable_id': routetableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ?????????????????????????????????????????????????????????????????????2000????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPorts(listPortsRequest?: ListPortsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ports",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let id;
            
            let limit;
            
            let adminStateUp;
            
            let networkId;
            
            let macAddress;
            
            let deviceId;
            
            let deviceOwner;
            
            let status;
            
            let marker;
            
            let fixedIps;
            
            let enterpriseProjectId;

            if (listPortsRequest !== null && listPortsRequest !== undefined) {
                if (listPortsRequest instanceof ListPortsRequest) {
                    name = listPortsRequest.name;
                    id = listPortsRequest.id;
                    limit = listPortsRequest.limit;
                    adminStateUp = listPortsRequest.adminStateUp;
                    networkId = listPortsRequest.networkId;
                    macAddress = listPortsRequest.macAddress;
                    deviceId = listPortsRequest.deviceId;
                    deviceOwner = listPortsRequest.deviceOwner;
                    status = listPortsRequest.status;
                    marker = listPortsRequest.marker;
                    fixedIps = listPortsRequest.fixedIps;
                    enterpriseProjectId = listPortsRequest.enterpriseProjectId;
                } else {
                    name = listPortsRequest['name'];
                    id = listPortsRequest['id'];
                    limit = listPortsRequest['limit'];
                    adminStateUp = listPortsRequest['admin_state_up'];
                    networkId = listPortsRequest['network_id'];
                    macAddress = listPortsRequest['mac_address'];
                    deviceId = listPortsRequest['device_id'];
                    deviceOwner = listPortsRequest['device_owner'];
                    status = listPortsRequest['status'];
                    marker = listPortsRequest['marker'];
                    fixedIps = listPortsRequest['fixed_ips'];
                    enterpriseProjectId = listPortsRequest['enterprise_project_id'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (adminStateUp !== null && adminStateUp !== undefined) {
                localVarQueryParameter['admin_state_up'] = adminStateUp;
            }
            if (networkId !== null && networkId !== undefined) {
                localVarQueryParameter['network_id'] = networkId;
            }
            if (macAddress !== null && macAddress !== undefined) {
                localVarQueryParameter['mac_address'] = macAddress;
            }
            if (deviceId !== null && deviceId !== undefined) {
                localVarQueryParameter['device_id'] = deviceId;
            }
            if (deviceOwner !== null && deviceOwner !== undefined) {
                localVarQueryParameter['device_owner'] = deviceOwner;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (fixedIps !== null && fixedIps !== undefined) {
                localVarQueryParameter['fixed_ips'] = fixedIps;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????????????????????????????????????????????????????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRouteTables(listRouteTablesRequest?: ListRouteTablesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/routetables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let vpcId;
            
            let subnetId;

            if (listRouteTablesRequest !== null && listRouteTablesRequest !== undefined) {
                if (listRouteTablesRequest instanceof ListRouteTablesRequest) {
                    limit = listRouteTablesRequest.limit;
                    marker = listRouteTablesRequest.marker;
                    id = listRouteTablesRequest.id;
                    vpcId = listRouteTablesRequest.vpcId;
                    subnetId = listRouteTablesRequest.subnetId;
                } else {
                    limit = listRouteTablesRequest['limit'];
                    marker = listRouteTablesRequest['marker'];
                    id = listRouteTablesRequest['id'];
                    vpcId = listRouteTablesRequest['vpc_id'];
                    subnetId = listRouteTablesRequest['subnet_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (subnetId !== null && subnetId !== undefined) {
                localVarQueryParameter['subnet_id'] = subnetId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ??????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityGroupRules(listSecurityGroupRulesRequest?: ListSecurityGroupRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security-group-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let securityGroupId;

            if (listSecurityGroupRulesRequest !== null && listSecurityGroupRulesRequest !== undefined) {
                if (listSecurityGroupRulesRequest instanceof ListSecurityGroupRulesRequest) {
                    marker = listSecurityGroupRulesRequest.marker;
                    limit = listSecurityGroupRulesRequest.limit;
                    securityGroupId = listSecurityGroupRulesRequest.securityGroupId;
                } else {
                    marker = listSecurityGroupRulesRequest['marker'];
                    limit = listSecurityGroupRulesRequest['limit'];
                    securityGroupId = listSecurityGroupRulesRequest['security_group_id'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (securityGroupId !== null && securityGroupId !== undefined) {
                localVarQueryParameter['security_group_id'] = securityGroupId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ?????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityGroups(listSecurityGroupsRequest?: ListSecurityGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let vpcId;
            
            let enterpriseProjectId;

            if (listSecurityGroupsRequest !== null && listSecurityGroupsRequest !== undefined) {
                if (listSecurityGroupsRequest instanceof ListSecurityGroupsRequest) {
                    limit = listSecurityGroupsRequest.limit;
                    marker = listSecurityGroupsRequest.marker;
                    vpcId = listSecurityGroupsRequest.vpcId;
                    enterpriseProjectId = listSecurityGroupsRequest.enterpriseProjectId;
                } else {
                    limit = listSecurityGroupsRequest['limit'];
                    marker = listSecurityGroupsRequest['marker'];
                    vpcId = listSecurityGroupsRequest['vpc_id'];
                    enterpriseProjectId = listSecurityGroupsRequest['enterprise_project_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????????????????????????????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubnetTags() {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/subnets/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ??????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubnets(listSubnetsRequest?: ListSubnetsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/subnets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let vpcId;

            if (listSubnetsRequest !== null && listSubnetsRequest !== undefined) {
                if (listSubnetsRequest instanceof ListSubnetsRequest) {
                    limit = listSubnetsRequest.limit;
                    marker = listSubnetsRequest.marker;
                    vpcId = listSubnetsRequest.vpcId;
                } else {
                    limit = listSubnetsRequest['limit'];
                    marker = listSubnetsRequest['marker'];
                    vpcId = listSubnetsRequest['vpc_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubnetsByTags(listSubnetsByTagsRequest?: ListSubnetsByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/subnets/resource_instances/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (listSubnetsByTagsRequest !== null && listSubnetsByTagsRequest !== undefined) {
                if (listSubnetsByTagsRequest instanceof ListSubnetsByTagsRequest) {
                    body = listSubnetsByTagsRequest.body
                } else {
                    body = listSubnetsByTagsRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????????????????????????????????????????????????????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpcPeerings(listVpcPeeringsRequest?: ListVpcPeeringsRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/vpc/peerings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let name;
            
            let status;
            
            let tenantId;
            
            let vpcId;

            if (listVpcPeeringsRequest !== null && listVpcPeeringsRequest !== undefined) {
                if (listVpcPeeringsRequest instanceof ListVpcPeeringsRequest) {
                    limit = listVpcPeeringsRequest.limit;
                    marker = listVpcPeeringsRequest.marker;
                    id = listVpcPeeringsRequest.id;
                    name = listVpcPeeringsRequest.name;
                    status = listVpcPeeringsRequest.status;
                    tenantId = listVpcPeeringsRequest.tenantId;
                    vpcId = listVpcPeeringsRequest.vpcId;
                } else {
                    limit = listVpcPeeringsRequest['limit'];
                    marker = listVpcPeeringsRequest['marker'];
                    id = listVpcPeeringsRequest['id'];
                    name = listVpcPeeringsRequest['name'];
                    status = listVpcPeeringsRequest['status'];
                    tenantId = listVpcPeeringsRequest['tenant_id'];
                    vpcId = listVpcPeeringsRequest['vpc_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ??????A?????????VPC???????????????B???VPC???????????????????????????????????????B???????????????????????????????????????????????????????????????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rejectVpcPeering(rejectVpcPeeringRequest?: RejectVpcPeeringRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/vpc/peerings/{peering_id}/reject",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let peeringId;

            if (rejectVpcPeeringRequest !== null && rejectVpcPeeringRequest !== undefined) {
                if (rejectVpcPeeringRequest instanceof RejectVpcPeeringRequest) {
                    peeringId = rejectVpcPeeringRequest.peeringId;
                } else {
                    peeringId = rejectVpcPeeringRequest['peering_id'];
                }
            }

        
            if (peeringId === null || peeringId === undefined) {
            throw new RequiredError('peeringId','Required parameter peeringId was null or undefined when calling rejectVpcPeering.');
            }

            options.pathParams = { 'peering_id': peeringId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPort(showPortRequest?: ShowPortRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/ports/{port_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let portId;

            if (showPortRequest !== null && showPortRequest !== undefined) {
                if (showPortRequest instanceof ShowPortRequest) {
                    portId = showPortRequest.portId;
                } else {
                    portId = showPortRequest['port_id'];
                }
            }

        
            if (portId === null || portId === undefined) {
            throw new RequiredError('portId','Required parameter portId was null or undefined when calling showPort.');
            }

            options.pathParams = { 'port_id': portId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ??????????????????VPC???????????????????????????????????????vpc??????????????????????????????????????????????????????????????????????????????IP?????????vpn????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuota(showQuotaRequest?: ShowQuotaRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;

            if (showQuotaRequest !== null && showQuotaRequest !== undefined) {
                if (showQuotaRequest instanceof ShowQuotaRequest) {
                    type = showQuotaRequest.type;
                } else {
                    type = showQuotaRequest['type'];
                }
            }

        
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ?????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRouteTable(showRouteTableRequest?: ShowRouteTableRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/routetables/{routetable_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let routetableId;

            if (showRouteTableRequest !== null && showRouteTableRequest !== undefined) {
                if (showRouteTableRequest instanceof ShowRouteTableRequest) {
                    routetableId = showRouteTableRequest.routetableId;
                } else {
                    routetableId = showRouteTableRequest['routetable_id'];
                }
            }

        
            if (routetableId === null || routetableId === undefined) {
            throw new RequiredError('routetableId','Required parameter routetableId was null or undefined when calling showRouteTable.');
            }

            options.pathParams = { 'routetable_id': routetableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ??????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecurityGroup(showSecurityGroupRequest?: ShowSecurityGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security-groups/{security_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let securityGroupId;

            if (showSecurityGroupRequest !== null && showSecurityGroupRequest !== undefined) {
                if (showSecurityGroupRequest instanceof ShowSecurityGroupRequest) {
                    securityGroupId = showSecurityGroupRequest.securityGroupId;
                } else {
                    securityGroupId = showSecurityGroupRequest['security_group_id'];
                }
            }

        
            if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError('securityGroupId','Required parameter securityGroupId was null or undefined when calling showSecurityGroup.');
            }

            options.pathParams = { 'security_group_id': securityGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ?????????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecurityGroupRule(showSecurityGroupRuleRequest?: ShowSecurityGroupRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security-group-rules/{security_group_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let securityGroupRuleId;

            if (showSecurityGroupRuleRequest !== null && showSecurityGroupRuleRequest !== undefined) {
                if (showSecurityGroupRuleRequest instanceof ShowSecurityGroupRuleRequest) {
                    securityGroupRuleId = showSecurityGroupRuleRequest.securityGroupRuleId;
                } else {
                    securityGroupRuleId = showSecurityGroupRuleRequest['security_group_rule_id'];
                }
            }

        
            if (securityGroupRuleId === null || securityGroupRuleId === undefined) {
            throw new RequiredError('securityGroupRuleId','Required parameter securityGroupRuleId was null or undefined when calling showSecurityGroupRule.');
            }

            options.pathParams = { 'security_group_rule_id': securityGroupRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ?????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSubnet(showSubnetRequest?: ShowSubnetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/subnets/{subnet_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let subnetId;

            if (showSubnetRequest !== null && showSubnetRequest !== undefined) {
                if (showSubnetRequest instanceof ShowSubnetRequest) {
                    subnetId = showSubnetRequest.subnetId;
                } else {
                    subnetId = showSubnetRequest['subnet_id'];
                }
            }

        
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling showSubnet.');
            }

            options.pathParams = { 'subnet_id': subnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ??????????????????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSubnetTags(showSubnetTagsRequest?: ShowSubnetTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/subnets/{subnet_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let subnetId;

            if (showSubnetTagsRequest !== null && showSubnetTagsRequest !== undefined) {
                if (showSubnetTagsRequest instanceof ShowSubnetTagsRequest) {
                    subnetId = showSubnetTagsRequest.subnetId;
                } else {
                    subnetId = showSubnetTagsRequest['subnet_id'];
                }
            }

        
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling showSubnetTags.');
            }

            options.pathParams = { 'subnet_id': subnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpcPeering(showVpcPeeringRequest?: ShowVpcPeeringRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/vpc/peerings/{peering_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let peeringId;

            if (showVpcPeeringRequest !== null && showVpcPeeringRequest !== undefined) {
                if (showVpcPeeringRequest instanceof ShowVpcPeeringRequest) {
                    peeringId = showVpcPeeringRequest.peeringId;
                } else {
                    peeringId = showVpcPeeringRequest['peering_id'];
                }
            }

        
            if (peeringId === null || peeringId === undefined) {
            throw new RequiredError('peeringId','Required parameter peeringId was null or undefined when calling showVpcPeering.');
            }

            options.pathParams = { 'peering_id': peeringId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePort(updatePortRequest?: UpdatePortRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/ports/{port_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let portId;

            if (updatePortRequest !== null && updatePortRequest !== undefined) {
                if (updatePortRequest instanceof UpdatePortRequest) {
                    portId = updatePortRequest.portId;
                    body = updatePortRequest.body
                } else {
                    portId = updatePortRequest['port_id'];
                    body = updatePortRequest['body'];
                }
            }

        
            if (portId === null || portId === undefined) {
            throw new RequiredError('portId','Required parameter portId was null or undefined when calling updatePort.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'port_id': portId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????????????????????????????????????????????????????????????????????????????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRouteTable(updateRouteTableRequest?: UpdateRouteTableRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/routetables/{routetable_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let routetableId;

            if (updateRouteTableRequest !== null && updateRouteTableRequest !== undefined) {
                if (updateRouteTableRequest instanceof UpdateRouteTableRequest) {
                    routetableId = updateRouteTableRequest.routetableId;
                    body = updateRouteTableRequest.body
                } else {
                    routetableId = updateRouteTableRequest['routetable_id'];
                    body = updateRouteTableRequest['body'];
                }
            }

        
            if (routetableId === null || routetableId === undefined) {
            throw new RequiredError('routetableId','Required parameter routetableId was null or undefined when calling updateRouteTable.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'routetable_id': routetableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSubnet(updateSubnetRequest?: UpdateSubnetRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/vpcs/{vpc_id}/subnets/{subnet_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let vpcId;
            
            let subnetId;

            if (updateSubnetRequest !== null && updateSubnetRequest !== undefined) {
                if (updateSubnetRequest instanceof UpdateSubnetRequest) {
                    vpcId = updateSubnetRequest.vpcId;
                    subnetId = updateSubnetRequest.subnetId;
                    body = updateSubnetRequest.body
                } else {
                    vpcId = updateSubnetRequest['vpc_id'];
                    subnetId = updateSubnetRequest['subnet_id'];
                    body = updateSubnetRequest['body'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling updateSubnet.');
            }
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling updateSubnet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_id': vpcId,'subnet_id': subnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ?????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVpcPeering(updateVpcPeeringRequest?: UpdateVpcPeeringRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/vpc/peerings/{peering_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let peeringId;

            if (updateVpcPeeringRequest !== null && updateVpcPeeringRequest !== undefined) {
                if (updateVpcPeeringRequest instanceof UpdateVpcPeeringRequest) {
                    peeringId = updateVpcPeeringRequest.peeringId;
                    body = updateVpcPeeringRequest.body
                } else {
                    peeringId = updateVpcPeeringRequest['peering_id'];
                    body = updateVpcPeeringRequest['body'];
                }
            }

        
            if (peeringId === null || peeringId === undefined) {
            throw new RequiredError('peeringId','Required parameter peeringId was null or undefined when calling updateVpcPeering.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'peering_id': peeringId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????IP???
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPrivateip(createPrivateipRequest?: CreatePrivateipRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/privateips",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createPrivateipRequest !== null && createPrivateipRequest !== undefined) {
                if (createPrivateipRequest instanceof CreatePrivateipRequest) {
                    body = createPrivateipRequest.body
                } else {
                    body = createPrivateipRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????IP???
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePrivateip(deletePrivateipRequest?: DeletePrivateipRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/privateips/{privateip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let privateipId;

            if (deletePrivateipRequest !== null && deletePrivateipRequest !== undefined) {
                if (deletePrivateipRequest instanceof DeletePrivateipRequest) {
                    privateipId = deletePrivateipRequest.privateipId;
                } else {
                    privateipId = deletePrivateipRequest['privateip_id'];
                }
            }

        
            if (privateipId === null || privateipId === undefined) {
            throw new RequiredError('privateipId','Required parameter privateipId was null or undefined when calling deletePrivateip.');
            }

            options.pathParams = { 'privateip_id': privateipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ??????????????????????????????IP?????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPrivateips(listPrivateipsRequest?: ListPrivateipsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/subnets/{subnet_id}/privateips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let subnetId;
            
            let limit;
            
            let marker;

            if (listPrivateipsRequest !== null && listPrivateipsRequest !== undefined) {
                if (listPrivateipsRequest instanceof ListPrivateipsRequest) {
                    subnetId = listPrivateipsRequest.subnetId;
                    limit = listPrivateipsRequest.limit;
                    marker = listPrivateipsRequest.marker;
                } else {
                    subnetId = listPrivateipsRequest['subnet_id'];
                    limit = listPrivateipsRequest['limit'];
                    marker = listPrivateipsRequest['marker'];
                }
            }

        
            if (subnetId === null || subnetId === undefined) {
            throw new RequiredError('subnetId','Required parameter subnetId was null or undefined when calling listPrivateips.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'subnet_id': subnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ??????????????????????????????IPv4?????????????????????
         * ?????????????????????IP??????????????????IP??????????????????????????????????????????IP?????????????????????IP???????????????
         * 
         * &gt; ??????
         * 
         * - ???????????????????????????????????????1???????????????4?????????????????????????????????DHCP????????????
         * - ???????????????????????????IP?????????????????????IP??????????????????????????????????????????
         * - ?????????IP???????????????????????????????????????IP?????????????????????IP????????????????????????????????????????????????IP????????????IP???????????????????????????IP???????????????IP??????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNetworkIpAvailabilities(showNetworkIpAvailabilitiesRequest?: ShowNetworkIpAvailabilitiesRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/network-ip-availabilities/{network_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let networkId;

            if (showNetworkIpAvailabilitiesRequest !== null && showNetworkIpAvailabilitiesRequest !== undefined) {
                if (showNetworkIpAvailabilitiesRequest instanceof ShowNetworkIpAvailabilitiesRequest) {
                    networkId = showNetworkIpAvailabilitiesRequest.networkId;
                } else {
                    networkId = showNetworkIpAvailabilitiesRequest['network_id'];
                }
            }

        
            if (networkId === null || networkId === undefined) {
            throw new RequiredError('networkId','Required parameter networkId was null or undefined when calling showNetworkIpAvailabilities.');
            }

            options.pathParams = { 'network_id': networkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ??????ID????????????IP???
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPrivateip(showPrivateipRequest?: ShowPrivateipRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/privateips/{privateip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let privateipId;

            if (showPrivateipRequest !== null && showPrivateipRequest !== undefined) {
                if (showPrivateipRequest instanceof ShowPrivateipRequest) {
                    privateipId = showPrivateipRequest.privateipId;
                } else {
                    privateipId = showPrivateipRequest['privateip_id'];
                }
            }

        
            if (privateipId === null || privateipId === undefined) {
            throw new RequiredError('privateipId','Required parameter privateipId was null or undefined when calling showPrivateip.');
            }

            options.pathParams = { 'privateip_id': privateipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronCreateSecurityGroup(neutronCreateSecurityGroupRequest?: NeutronCreateSecurityGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/security-groups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (neutronCreateSecurityGroupRequest !== null && neutronCreateSecurityGroupRequest !== undefined) {
                if (neutronCreateSecurityGroupRequest instanceof NeutronCreateSecurityGroupRequest) {
                    body = neutronCreateSecurityGroupRequest.body
                } else {
                    body = neutronCreateSecurityGroupRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ?????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronCreateSecurityGroupRule(neutronCreateSecurityGroupRuleRequest?: NeutronCreateSecurityGroupRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/security-group-rules",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (neutronCreateSecurityGroupRuleRequest !== null && neutronCreateSecurityGroupRuleRequest !== undefined) {
                if (neutronCreateSecurityGroupRuleRequest instanceof NeutronCreateSecurityGroupRuleRequest) {
                    body = neutronCreateSecurityGroupRuleRequest.body
                } else {
                    body = neutronCreateSecurityGroupRuleRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronDeleteSecurityGroup(neutronDeleteSecurityGroupRequest?: NeutronDeleteSecurityGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/security-groups/{security_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let securityGroupId;

            if (neutronDeleteSecurityGroupRequest !== null && neutronDeleteSecurityGroupRequest !== undefined) {
                if (neutronDeleteSecurityGroupRequest instanceof NeutronDeleteSecurityGroupRequest) {
                    securityGroupId = neutronDeleteSecurityGroupRequest.securityGroupId;
                } else {
                    securityGroupId = neutronDeleteSecurityGroupRequest['security_group_id'];
                }
            }

        
            if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError('securityGroupId','Required parameter securityGroupId was null or undefined when calling neutronDeleteSecurityGroup.');
            }

            options.pathParams = { 'security_group_id': securityGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ?????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronDeleteSecurityGroupRule(neutronDeleteSecurityGroupRuleRequest?: NeutronDeleteSecurityGroupRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/security-group-rules/{security_group_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let securityGroupRuleId;

            if (neutronDeleteSecurityGroupRuleRequest !== null && neutronDeleteSecurityGroupRuleRequest !== undefined) {
                if (neutronDeleteSecurityGroupRuleRequest instanceof NeutronDeleteSecurityGroupRuleRequest) {
                    securityGroupRuleId = neutronDeleteSecurityGroupRuleRequest.securityGroupRuleId;
                } else {
                    securityGroupRuleId = neutronDeleteSecurityGroupRuleRequest['security_group_rule_id'];
                }
            }

        
            if (securityGroupRuleId === null || securityGroupRuleId === undefined) {
            throw new RequiredError('securityGroupRuleId','Required parameter securityGroupRuleId was null or undefined when calling neutronDeleteSecurityGroupRule.');
            }

            options.pathParams = { 'security_group_rule_id': securityGroupRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ?????????????????????????????????????????????????????????????????????????????????????????????2000??????????????????2000????????????????????????????????????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronListSecurityGroupRules(neutronListSecurityGroupRulesRequest?: NeutronListSecurityGroupRulesRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/security-group-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let direction;
            
            let protocol;
            
            let ethertype;
            
            let description;
            
            let remoteIpPrefix;
            
            let remoteGroupId;
            
            let securityGroupId;
            
            let portRangeMax;
            
            let portRangeMin;
            
            let tenantId;

            if (neutronListSecurityGroupRulesRequest !== null && neutronListSecurityGroupRulesRequest !== undefined) {
                if (neutronListSecurityGroupRulesRequest instanceof NeutronListSecurityGroupRulesRequest) {
                    limit = neutronListSecurityGroupRulesRequest.limit;
                    marker = neutronListSecurityGroupRulesRequest.marker;
                    id = neutronListSecurityGroupRulesRequest.id;
                    direction = neutronListSecurityGroupRulesRequest.direction;
                    protocol = neutronListSecurityGroupRulesRequest.protocol;
                    ethertype = neutronListSecurityGroupRulesRequest.ethertype;
                    description = neutronListSecurityGroupRulesRequest.description;
                    remoteIpPrefix = neutronListSecurityGroupRulesRequest.remoteIpPrefix;
                    remoteGroupId = neutronListSecurityGroupRulesRequest.remoteGroupId;
                    securityGroupId = neutronListSecurityGroupRulesRequest.securityGroupId;
                    portRangeMax = neutronListSecurityGroupRulesRequest.portRangeMax;
                    portRangeMin = neutronListSecurityGroupRulesRequest.portRangeMin;
                    tenantId = neutronListSecurityGroupRulesRequest.tenantId;
                } else {
                    limit = neutronListSecurityGroupRulesRequest['limit'];
                    marker = neutronListSecurityGroupRulesRequest['marker'];
                    id = neutronListSecurityGroupRulesRequest['id'];
                    direction = neutronListSecurityGroupRulesRequest['direction'];
                    protocol = neutronListSecurityGroupRulesRequest['protocol'];
                    ethertype = neutronListSecurityGroupRulesRequest['ethertype'];
                    description = neutronListSecurityGroupRulesRequest['description'];
                    remoteIpPrefix = neutronListSecurityGroupRulesRequest['remote_ip_prefix'];
                    remoteGroupId = neutronListSecurityGroupRulesRequest['remote_group_id'];
                    securityGroupId = neutronListSecurityGroupRulesRequest['security_group_id'];
                    portRangeMax = neutronListSecurityGroupRulesRequest['port_range_max'];
                    portRangeMin = neutronListSecurityGroupRulesRequest['port_range_min'];
                    tenantId = neutronListSecurityGroupRulesRequest['tenant_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (ethertype !== null && ethertype !== undefined) {
                localVarQueryParameter['ethertype'] = ethertype;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (remoteIpPrefix !== null && remoteIpPrefix !== undefined) {
                localVarQueryParameter['remote_ip_prefix'] = remoteIpPrefix;
            }
            if (remoteGroupId !== null && remoteGroupId !== undefined) {
                localVarQueryParameter['remote_group_id'] = remoteGroupId;
            }
            if (securityGroupId !== null && securityGroupId !== undefined) {
                localVarQueryParameter['security_group_id'] = securityGroupId;
            }
            if (portRangeMax !== null && portRangeMax !== undefined) {
                localVarQueryParameter['port_range_max'] = portRangeMax;
            }
            if (portRangeMin !== null && portRangeMin !== undefined) {
                localVarQueryParameter['port_range_min'] = portRangeMin;
            }
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ?????????????????????????????????????????????????????????????????????2000??????????????????2000???????????????????????????????????????????????????????????? ???
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronListSecurityGroups(neutronListSecurityGroupsRequest?: NeutronListSecurityGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/security-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let name;
            
            let description;
            
            let tenantId;

            if (neutronListSecurityGroupsRequest !== null && neutronListSecurityGroupsRequest !== undefined) {
                if (neutronListSecurityGroupsRequest instanceof NeutronListSecurityGroupsRequest) {
                    limit = neutronListSecurityGroupsRequest.limit;
                    marker = neutronListSecurityGroupsRequest.marker;
                    id = neutronListSecurityGroupsRequest.id;
                    name = neutronListSecurityGroupsRequest.name;
                    description = neutronListSecurityGroupsRequest.description;
                    tenantId = neutronListSecurityGroupsRequest.tenantId;
                } else {
                    limit = neutronListSecurityGroupsRequest['limit'];
                    marker = neutronListSecurityGroupsRequest['marker'];
                    id = neutronListSecurityGroupsRequest['id'];
                    name = neutronListSecurityGroupsRequest['name'];
                    description = neutronListSecurityGroupsRequest['description'];
                    tenantId = neutronListSecurityGroupsRequest['tenant_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ?????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronShowSecurityGroup(neutronShowSecurityGroupRequest?: NeutronShowSecurityGroupRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/security-groups/{security_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let securityGroupId;

            if (neutronShowSecurityGroupRequest !== null && neutronShowSecurityGroupRequest !== undefined) {
                if (neutronShowSecurityGroupRequest instanceof NeutronShowSecurityGroupRequest) {
                    securityGroupId = neutronShowSecurityGroupRequest.securityGroupId;
                } else {
                    securityGroupId = neutronShowSecurityGroupRequest['security_group_id'];
                }
            }

        
            if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError('securityGroupId','Required parameter securityGroupId was null or undefined when calling neutronShowSecurityGroup.');
            }

            options.pathParams = { 'security_group_id': securityGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ??????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronShowSecurityGroupRule(neutronShowSecurityGroupRuleRequest?: NeutronShowSecurityGroupRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/security-group-rules/{security_group_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let securityGroupRuleId;

            if (neutronShowSecurityGroupRuleRequest !== null && neutronShowSecurityGroupRuleRequest !== undefined) {
                if (neutronShowSecurityGroupRuleRequest instanceof NeutronShowSecurityGroupRuleRequest) {
                    securityGroupRuleId = neutronShowSecurityGroupRuleRequest.securityGroupRuleId;
                } else {
                    securityGroupRuleId = neutronShowSecurityGroupRuleRequest['security_group_rule_id'];
                }
            }

        
            if (securityGroupRuleId === null || securityGroupRuleId === undefined) {
            throw new RequiredError('securityGroupRuleId','Required parameter securityGroupRuleId was null or undefined when calling neutronShowSecurityGroupRule.');
            }

            options.pathParams = { 'security_group_rule_id': securityGroupRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronUpdateSecurityGroup(neutronUpdateSecurityGroupRequest?: NeutronUpdateSecurityGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/security-groups/{security_group_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let securityGroupId;

            if (neutronUpdateSecurityGroupRequest !== null && neutronUpdateSecurityGroupRequest !== undefined) {
                if (neutronUpdateSecurityGroupRequest instanceof NeutronUpdateSecurityGroupRequest) {
                    securityGroupId = neutronUpdateSecurityGroupRequest.securityGroupId;
                    body = neutronUpdateSecurityGroupRequest.body
                } else {
                    securityGroupId = neutronUpdateSecurityGroupRequest['security_group_id'];
                    body = neutronUpdateSecurityGroupRequest['body'];
                }
            }

        
            if (securityGroupId === null || securityGroupId === undefined) {
            throw new RequiredError('securityGroupId','Required parameter securityGroupId was null or undefined when calling neutronUpdateSecurityGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'security_group_id': securityGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ??????????????????ACL?????????????????????ACL????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronAddFirewallRule(neutronAddFirewallRuleRequest?: NeutronAddFirewallRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/fwaas/firewall_policies/{firewall_policy_id}/insert_rule",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let firewallPolicyId;

            if (neutronAddFirewallRuleRequest !== null && neutronAddFirewallRuleRequest !== undefined) {
                if (neutronAddFirewallRuleRequest instanceof NeutronAddFirewallRuleRequest) {
                    firewallPolicyId = neutronAddFirewallRuleRequest.firewallPolicyId;
                    body = neutronAddFirewallRuleRequest.body
                } else {
                    firewallPolicyId = neutronAddFirewallRuleRequest['firewall_policy_id'];
                    body = neutronAddFirewallRuleRequest['body'];
                }
            }

        
            if (firewallPolicyId === null || firewallPolicyId === undefined) {
            throw new RequiredError('firewallPolicyId','Required parameter firewallPolicyId was null or undefined when calling neutronAddFirewallRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_policy_id': firewallPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????ACL???
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronCreateFirewallGroup(neutronCreateFirewallGroupRequest?: NeutronCreateFirewallGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/fwaas/firewall_groups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (neutronCreateFirewallGroupRequest !== null && neutronCreateFirewallGroupRequest !== undefined) {
                if (neutronCreateFirewallGroupRequest instanceof NeutronCreateFirewallGroupRequest) {
                    body = neutronCreateFirewallGroupRequest.body
                } else {
                    body = neutronCreateFirewallGroupRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????ACL?????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronCreateFirewallPolicy(neutronCreateFirewallPolicyRequest?: NeutronCreateFirewallPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/fwaas/firewall_policies",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (neutronCreateFirewallPolicyRequest !== null && neutronCreateFirewallPolicyRequest !== undefined) {
                if (neutronCreateFirewallPolicyRequest instanceof NeutronCreateFirewallPolicyRequest) {
                    body = neutronCreateFirewallPolicyRequest.body
                } else {
                    body = neutronCreateFirewallPolicyRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????ACL?????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronCreateFirewallRule(neutronCreateFirewallRuleRequest?: NeutronCreateFirewallRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/fwaas/firewall_rules",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (neutronCreateFirewallRuleRequest !== null && neutronCreateFirewallRuleRequest !== undefined) {
                if (neutronCreateFirewallRuleRequest instanceof NeutronCreateFirewallRuleRequest) {
                    body = neutronCreateFirewallRuleRequest.body
                } else {
                    body = neutronCreateFirewallRuleRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????ACL???
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronDeleteFirewallGroup(neutronDeleteFirewallGroupRequest?: NeutronDeleteFirewallGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/fwaas/firewall_groups/{firewall_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let firewallGroupId;

            if (neutronDeleteFirewallGroupRequest !== null && neutronDeleteFirewallGroupRequest !== undefined) {
                if (neutronDeleteFirewallGroupRequest instanceof NeutronDeleteFirewallGroupRequest) {
                    firewallGroupId = neutronDeleteFirewallGroupRequest.firewallGroupId;
                } else {
                    firewallGroupId = neutronDeleteFirewallGroupRequest['firewall_group_id'];
                }
            }

        
            if (firewallGroupId === null || firewallGroupId === undefined) {
            throw new RequiredError('firewallGroupId','Required parameter firewallGroupId was null or undefined when calling neutronDeleteFirewallGroup.');
            }

            options.pathParams = { 'firewall_group_id': firewallGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????ACL?????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronDeleteFirewallPolicy(neutronDeleteFirewallPolicyRequest?: NeutronDeleteFirewallPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/fwaas/firewall_policies/{firewall_policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let firewallPolicyId;

            if (neutronDeleteFirewallPolicyRequest !== null && neutronDeleteFirewallPolicyRequest !== undefined) {
                if (neutronDeleteFirewallPolicyRequest instanceof NeutronDeleteFirewallPolicyRequest) {
                    firewallPolicyId = neutronDeleteFirewallPolicyRequest.firewallPolicyId;
                } else {
                    firewallPolicyId = neutronDeleteFirewallPolicyRequest['firewall_policy_id'];
                }
            }

        
            if (firewallPolicyId === null || firewallPolicyId === undefined) {
            throw new RequiredError('firewallPolicyId','Required parameter firewallPolicyId was null or undefined when calling neutronDeleteFirewallPolicy.');
            }

            options.pathParams = { 'firewall_policy_id': firewallPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????ACL?????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronDeleteFirewallRule(neutronDeleteFirewallRuleRequest?: NeutronDeleteFirewallRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/fwaas/firewall_rules/{firewall_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let firewallRuleId;

            if (neutronDeleteFirewallRuleRequest !== null && neutronDeleteFirewallRuleRequest !== undefined) {
                if (neutronDeleteFirewallRuleRequest instanceof NeutronDeleteFirewallRuleRequest) {
                    firewallRuleId = neutronDeleteFirewallRuleRequest.firewallRuleId;
                } else {
                    firewallRuleId = neutronDeleteFirewallRuleRequest['firewall_rule_id'];
                }
            }

        
            if (firewallRuleId === null || firewallRuleId === undefined) {
            throw new RequiredError('firewallRuleId','Required parameter firewallRuleId was null or undefined when calling neutronDeleteFirewallRule.');
            }

            options.pathParams = { 'firewall_rule_id': firewallRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ?????????????????????????????????????????????????????????ACL????????????????????????????????????2000??????????????????2000???????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronListFirewallGroups(neutronListFirewallGroupsRequest?: NeutronListFirewallGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/fwaas/firewall_groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let id;
            
            let name;
            
            let description;
            
            let ingressFirewallPolicyId;
            
            let egressFirewallPolicyId;

            if (neutronListFirewallGroupsRequest !== null && neutronListFirewallGroupsRequest !== undefined) {
                if (neutronListFirewallGroupsRequest instanceof NeutronListFirewallGroupsRequest) {
                    marker = neutronListFirewallGroupsRequest.marker;
                    limit = neutronListFirewallGroupsRequest.limit;
                    id = neutronListFirewallGroupsRequest.id;
                    name = neutronListFirewallGroupsRequest.name;
                    description = neutronListFirewallGroupsRequest.description;
                    ingressFirewallPolicyId = neutronListFirewallGroupsRequest.ingressFirewallPolicyId;
                    egressFirewallPolicyId = neutronListFirewallGroupsRequest.egressFirewallPolicyId;
                } else {
                    marker = neutronListFirewallGroupsRequest['marker'];
                    limit = neutronListFirewallGroupsRequest['limit'];
                    id = neutronListFirewallGroupsRequest['id'];
                    name = neutronListFirewallGroupsRequest['name'];
                    description = neutronListFirewallGroupsRequest['description'];
                    ingressFirewallPolicyId = neutronListFirewallGroupsRequest['ingress_firewall_policy_id'];
                    egressFirewallPolicyId = neutronListFirewallGroupsRequest['egress_firewall_policy_id'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (ingressFirewallPolicyId !== null && ingressFirewallPolicyId !== undefined) {
                localVarQueryParameter['ingress_firewall_policy_id'] = ingressFirewallPolicyId;
            }
            if (egressFirewallPolicyId !== null && egressFirewallPolicyId !== undefined) {
                localVarQueryParameter['egress_firewall_policy_id'] = egressFirewallPolicyId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ?????????????????????????????????????????????????????????ACL???????????????????????????????????????2000??????????????????2000???????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronListFirewallPolicies(neutronListFirewallPoliciesRequest?: NeutronListFirewallPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/fwaas/firewall_policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let name;
            
            let description;
            
            let tenantId;

            if (neutronListFirewallPoliciesRequest !== null && neutronListFirewallPoliciesRequest !== undefined) {
                if (neutronListFirewallPoliciesRequest instanceof NeutronListFirewallPoliciesRequest) {
                    limit = neutronListFirewallPoliciesRequest.limit;
                    marker = neutronListFirewallPoliciesRequest.marker;
                    id = neutronListFirewallPoliciesRequest.id;
                    name = neutronListFirewallPoliciesRequest.name;
                    description = neutronListFirewallPoliciesRequest.description;
                    tenantId = neutronListFirewallPoliciesRequest.tenantId;
                } else {
                    limit = neutronListFirewallPoliciesRequest['limit'];
                    marker = neutronListFirewallPoliciesRequest['marker'];
                    id = neutronListFirewallPoliciesRequest['id'];
                    name = neutronListFirewallPoliciesRequest['name'];
                    description = neutronListFirewallPoliciesRequest['description'];
                    tenantId = neutronListFirewallPoliciesRequest['tenant_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ?????????????????????????????????????????????????????????ACL???????????????????????????????????????2000??????????????????2000???????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronListFirewallRules(neutronListFirewallRulesRequest?: NeutronListFirewallRulesRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/fwaas/firewall_rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let id;
            
            let name;
            
            let description;
            
            let action;
            
            let tenantId;

            if (neutronListFirewallRulesRequest !== null && neutronListFirewallRulesRequest !== undefined) {
                if (neutronListFirewallRulesRequest instanceof NeutronListFirewallRulesRequest) {
                    marker = neutronListFirewallRulesRequest.marker;
                    limit = neutronListFirewallRulesRequest.limit;
                    id = neutronListFirewallRulesRequest.id;
                    name = neutronListFirewallRulesRequest.name;
                    description = neutronListFirewallRulesRequest.description;
                    action = neutronListFirewallRulesRequest.action;
                    tenantId = neutronListFirewallRulesRequest.tenantId;
                } else {
                    marker = neutronListFirewallRulesRequest['marker'];
                    limit = neutronListFirewallRulesRequest['limit'];
                    id = neutronListFirewallRulesRequest['id'];
                    name = neutronListFirewallRulesRequest['name'];
                    description = neutronListFirewallRulesRequest['description'];
                    action = neutronListFirewallRulesRequest['action'];
                    tenantId = neutronListFirewallRulesRequest['tenant_id'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????ACL???????????????????????????ACL?????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronRemoveFirewallRule(neutronRemoveFirewallRuleRequest?: NeutronRemoveFirewallRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/fwaas/firewall_policies/{firewall_policy_id}/remove_rule",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let firewallPolicyId;

            if (neutronRemoveFirewallRuleRequest !== null && neutronRemoveFirewallRuleRequest !== undefined) {
                if (neutronRemoveFirewallRuleRequest instanceof NeutronRemoveFirewallRuleRequest) {
                    firewallPolicyId = neutronRemoveFirewallRuleRequest.firewallPolicyId;
                    body = neutronRemoveFirewallRuleRequest.body
                } else {
                    firewallPolicyId = neutronRemoveFirewallRuleRequest['firewall_policy_id'];
                    body = neutronRemoveFirewallRuleRequest['body'];
                }
            }

        
            if (firewallPolicyId === null || firewallPolicyId === undefined) {
            throw new RequiredError('firewallPolicyId','Required parameter firewallPolicyId was null or undefined when calling neutronRemoveFirewallRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_policy_id': firewallPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ??????????????????ACL????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronShowFirewallGroup(neutronShowFirewallGroupRequest?: NeutronShowFirewallGroupRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/fwaas/firewall_groups/{firewall_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let firewallGroupId;

            if (neutronShowFirewallGroupRequest !== null && neutronShowFirewallGroupRequest !== undefined) {
                if (neutronShowFirewallGroupRequest instanceof NeutronShowFirewallGroupRequest) {
                    firewallGroupId = neutronShowFirewallGroupRequest.firewallGroupId;
                } else {
                    firewallGroupId = neutronShowFirewallGroupRequest['firewall_group_id'];
                }
            }

        
            if (firewallGroupId === null || firewallGroupId === undefined) {
            throw new RequiredError('firewallGroupId','Required parameter firewallGroupId was null or undefined when calling neutronShowFirewallGroup.');
            }

            options.pathParams = { 'firewall_group_id': firewallGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ??????????????????ACL???????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronShowFirewallPolicy(neutronShowFirewallPolicyRequest?: NeutronShowFirewallPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/fwaas/firewall_policies/{firewall_policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let firewallPolicyId;

            if (neutronShowFirewallPolicyRequest !== null && neutronShowFirewallPolicyRequest !== undefined) {
                if (neutronShowFirewallPolicyRequest instanceof NeutronShowFirewallPolicyRequest) {
                    firewallPolicyId = neutronShowFirewallPolicyRequest.firewallPolicyId;
                } else {
                    firewallPolicyId = neutronShowFirewallPolicyRequest['firewall_policy_id'];
                }
            }

        
            if (firewallPolicyId === null || firewallPolicyId === undefined) {
            throw new RequiredError('firewallPolicyId','Required parameter firewallPolicyId was null or undefined when calling neutronShowFirewallPolicy.');
            }

            options.pathParams = { 'firewall_policy_id': firewallPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ??????????????????ACL?????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronShowFirewallRule(neutronShowFirewallRuleRequest?: NeutronShowFirewallRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/fwaas/firewall_rules/{firewall_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let firewallRuleId;

            if (neutronShowFirewallRuleRequest !== null && neutronShowFirewallRuleRequest !== undefined) {
                if (neutronShowFirewallRuleRequest instanceof NeutronShowFirewallRuleRequest) {
                    firewallRuleId = neutronShowFirewallRuleRequest.firewallRuleId;
                } else {
                    firewallRuleId = neutronShowFirewallRuleRequest['firewall_rule_id'];
                }
            }

        
            if (firewallRuleId === null || firewallRuleId === undefined) {
            throw new RequiredError('firewallRuleId','Required parameter firewallRuleId was null or undefined when calling neutronShowFirewallRule.');
            }

            options.pathParams = { 'firewall_rule_id': firewallRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????ACL??????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronUpdateFirewallGroup(neutronUpdateFirewallGroupRequest?: NeutronUpdateFirewallGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/fwaas/firewall_groups/{firewall_group_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let firewallGroupId;

            if (neutronUpdateFirewallGroupRequest !== null && neutronUpdateFirewallGroupRequest !== undefined) {
                if (neutronUpdateFirewallGroupRequest instanceof NeutronUpdateFirewallGroupRequest) {
                    firewallGroupId = neutronUpdateFirewallGroupRequest.firewallGroupId;
                    body = neutronUpdateFirewallGroupRequest.body
                } else {
                    firewallGroupId = neutronUpdateFirewallGroupRequest['firewall_group_id'];
                    body = neutronUpdateFirewallGroupRequest['body'];
                }
            }

        
            if (firewallGroupId === null || firewallGroupId === undefined) {
            throw new RequiredError('firewallGroupId','Required parameter firewallGroupId was null or undefined when calling neutronUpdateFirewallGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_group_id': firewallGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????ACL?????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronUpdateFirewallPolicy(neutronUpdateFirewallPolicyRequest?: NeutronUpdateFirewallPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/fwaas/firewall_policies/{firewall_policy_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let firewallPolicyId;

            if (neutronUpdateFirewallPolicyRequest !== null && neutronUpdateFirewallPolicyRequest !== undefined) {
                if (neutronUpdateFirewallPolicyRequest instanceof NeutronUpdateFirewallPolicyRequest) {
                    firewallPolicyId = neutronUpdateFirewallPolicyRequest.firewallPolicyId;
                    body = neutronUpdateFirewallPolicyRequest.body
                } else {
                    firewallPolicyId = neutronUpdateFirewallPolicyRequest['firewall_policy_id'];
                    body = neutronUpdateFirewallPolicyRequest['body'];
                }
            }

        
            if (firewallPolicyId === null || firewallPolicyId === undefined) {
            throw new RequiredError('firewallPolicyId','Required parameter firewallPolicyId was null or undefined when calling neutronUpdateFirewallPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_policy_id': firewallPolicyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????ACL?????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronUpdateFirewallRule(neutronUpdateFirewallRuleRequest?: NeutronUpdateFirewallRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/fwaas/firewall_rules/{firewall_rule_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let firewallRuleId;

            if (neutronUpdateFirewallRuleRequest !== null && neutronUpdateFirewallRuleRequest !== undefined) {
                if (neutronUpdateFirewallRuleRequest instanceof NeutronUpdateFirewallRuleRequest) {
                    firewallRuleId = neutronUpdateFirewallRuleRequest.firewallRuleId;
                    body = neutronUpdateFirewallRuleRequest.body
                } else {
                    firewallRuleId = neutronUpdateFirewallRuleRequest['firewall_rule_id'];
                    body = neutronUpdateFirewallRuleRequest['body'];
                }
            }

        
            if (firewallRuleId === null || firewallRuleId === undefined) {
            throw new RequiredError('firewallRuleId','Required parameter firewallRuleId was null or undefined when calling neutronUpdateFirewallRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'firewall_rule_id': firewallRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????VPC?????????????????????????????????
         * ??????????????????????????????????????????????????????????????????key?????????????????????????????????????????????key????????????????????????????????????key????????????value?????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateVpcTags(batchCreateVpcTagsRequest?: BatchCreateVpcTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/vpcs/{vpc_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let vpcId;

            if (batchCreateVpcTagsRequest !== null && batchCreateVpcTagsRequest !== undefined) {
                if (batchCreateVpcTagsRequest instanceof BatchCreateVpcTagsRequest) {
                    vpcId = batchCreateVpcTagsRequest.vpcId;
                    body = batchCreateVpcTagsRequest.body
                } else {
                    vpcId = batchCreateVpcTagsRequest['vpc_id'];
                    body = batchCreateVpcTagsRequest['body'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling batchCreateVpcTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????VPC?????????????????????????????????
         * ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????tags????????????????????????key????????????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteVpcTags(batchDeleteVpcTagsRequest?: BatchDeleteVpcTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/vpcs/{vpc_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let vpcId;

            if (batchDeleteVpcTagsRequest !== null && batchDeleteVpcTagsRequest !== undefined) {
                if (batchDeleteVpcTagsRequest instanceof BatchDeleteVpcTagsRequest) {
                    vpcId = batchDeleteVpcTagsRequest.vpcId;
                    body = batchDeleteVpcTagsRequest.body
                } else {
                    vpcId = batchDeleteVpcTagsRequest['vpc_id'];
                    body = batchDeleteVpcTagsRequest['body'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling batchDeleteVpcTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpc(createVpcRequest?: CreateVpcRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/vpcs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createVpcRequest !== null && createVpcRequest !== undefined) {
                if (createVpcRequest instanceof CreateVpcRequest) {
                    body = createVpcRequest.body
                } else {
                    body = createVpcRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ?????????VPC??????????????????????????????
         * ???????????????????????????????????????????????????????????????????????????key????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpcResourceTag(createVpcResourceTagRequest?: CreateVpcResourceTagRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/vpcs/{vpc_id}/tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let vpcId;

            if (createVpcResourceTagRequest !== null && createVpcResourceTagRequest !== undefined) {
                if (createVpcResourceTagRequest instanceof CreateVpcResourceTagRequest) {
                    vpcId = createVpcResourceTagRequest.vpcId;
                    body = createVpcResourceTagRequest.body
                } else {
                    vpcId = createVpcResourceTagRequest['vpc_id'];
                    body = createVpcResourceTagRequest['body'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling createVpcResourceTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpcRoute(createVpcRouteRequest?: CreateVpcRouteRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/vpc/routes",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createVpcRouteRequest !== null && createVpcRouteRequest !== undefined) {
                if (createVpcRouteRequest instanceof CreateVpcRouteRequest) {
                    body = createVpcRouteRequest.body
                } else {
                    body = createVpcRouteRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpc(deleteVpcRequest?: DeleteVpcRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/vpcs/{vpc_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpcId;

            if (deleteVpcRequest !== null && deleteVpcRequest !== undefined) {
                if (deleteVpcRequest instanceof DeleteVpcRequest) {
                    vpcId = deleteVpcRequest.vpcId;
                } else {
                    vpcId = deleteVpcRequest['vpc_id'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling deleteVpc.');
            }

            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpcRoute(deleteVpcRouteRequest?: DeleteVpcRouteRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/vpc/routes/{route_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let routeId;

            if (deleteVpcRouteRequest !== null && deleteVpcRouteRequest !== undefined) {
                if (deleteVpcRouteRequest instanceof DeleteVpcRouteRequest) {
                    routeId = deleteVpcRouteRequest.routeId;
                } else {
                    routeId = deleteVpcRouteRequest['route_id'];
                }
            }

        
            if (routeId === null || routeId === undefined) {
            throw new RequiredError('routeId','Required parameter routeId was null or undefined when calling deleteVpcRoute.');
            }

            options.pathParams = { 'route_id': routeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????VPC???????????????????????????
         * ????????????????????????????????????key????????????404???Key??????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpcTag(deleteVpcTagRequest?: DeleteVpcTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/{project_id}/vpcs/{vpc_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpcId;
            
            let key;

            if (deleteVpcTagRequest !== null && deleteVpcTagRequest !== undefined) {
                if (deleteVpcTagRequest instanceof DeleteVpcTagRequest) {
                    vpcId = deleteVpcTagRequest.vpcId;
                    key = deleteVpcTagRequest.key;
                } else {
                    vpcId = deleteVpcTagRequest['vpc_id'];
                    key = deleteVpcTagRequest['key'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling deleteVpcTag.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteVpcTag.');
            }

            options.pathParams = { 'vpc_id': vpcId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????????????????????????????????????????????????????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpcRoutes(listVpcRoutesRequest?: ListVpcRoutesRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/vpc/routes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let type;
            
            let vpcId;
            
            let destination;
            
            let tenantId;

            if (listVpcRoutesRequest !== null && listVpcRoutesRequest !== undefined) {
                if (listVpcRoutesRequest instanceof ListVpcRoutesRequest) {
                    limit = listVpcRoutesRequest.limit;
                    marker = listVpcRoutesRequest.marker;
                    id = listVpcRoutesRequest.id;
                    type = listVpcRoutesRequest.type;
                    vpcId = listVpcRoutesRequest.vpcId;
                    destination = listVpcRoutesRequest.destination;
                    tenantId = listVpcRoutesRequest.tenantId;
                } else {
                    limit = listVpcRoutesRequest['limit'];
                    marker = listVpcRoutesRequest['marker'];
                    id = listVpcRoutesRequest['id'];
                    type = listVpcRoutesRequest['type'];
                    vpcId = listVpcRoutesRequest['vpc_id'];
                    destination = listVpcRoutesRequest['destination'];
                    tenantId = listVpcRoutesRequest['tenant_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (destination !== null && destination !== undefined) {
                localVarQueryParameter['destination'] = destination;
            }
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????????????????????????????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpcTags() {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/vpcs/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ??????????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpcs(listVpcsRequest?: ListVpcsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/vpcs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let enterpriseProjectId;

            if (listVpcsRequest !== null && listVpcsRequest !== undefined) {
                if (listVpcsRequest instanceof ListVpcsRequest) {
                    limit = listVpcsRequest.limit;
                    marker = listVpcsRequest.marker;
                    id = listVpcsRequest.id;
                    enterpriseProjectId = listVpcsRequest.enterpriseProjectId;
                } else {
                    limit = listVpcsRequest['limit'];
                    marker = listVpcsRequest['marker'];
                    id = listVpcsRequest['id'];
                    enterpriseProjectId = listVpcsRequest['enterprise_project_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ???????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpcsByTags(listVpcsByTagsRequest?: ListVpcsByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/vpcs/resource_instances/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (listVpcsByTagsRequest !== null && listVpcsByTagsRequest !== undefined) {
                if (listVpcsByTagsRequest instanceof ListVpcsByTagsRequest) {
                    body = listVpcsByTagsRequest.body
                } else {
                    body = listVpcsByTagsRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpc(showVpcRequest?: ShowVpcRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/vpcs/{vpc_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpcId;

            if (showVpcRequest !== null && showVpcRequest !== undefined) {
                if (showVpcRequest instanceof ShowVpcRequest) {
                    vpcId = showVpcRequest.vpcId;
                } else {
                    vpcId = showVpcRequest['vpc_id'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling showVpc.');
            }

            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ??????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpcRoute(showVpcRouteRequest?: ShowVpcRouteRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/vpc/routes/{route_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let routeId;

            if (showVpcRouteRequest !== null && showVpcRouteRequest !== undefined) {
                if (showVpcRouteRequest instanceof ShowVpcRouteRequest) {
                    routeId = showVpcRouteRequest.routeId;
                } else {
                    routeId = showVpcRouteRequest['route_id'];
                }
            }

        
            if (routeId === null || routeId === undefined) {
            throw new RequiredError('routeId','Required parameter routeId was null or undefined when calling showVpcRoute.');
            }

            options.pathParams = { 'route_id': routeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????VPC?????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpcTags(showVpcTagsRequest?: ShowVpcTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/vpcs/{vpc_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpcId;

            if (showVpcTagsRequest !== null && showVpcTagsRequest !== undefined) {
                if (showVpcTagsRequest instanceof ShowVpcTagsRequest) {
                    vpcId = showVpcTagsRequest.vpcId;
                } else {
                    vpcId = showVpcTagsRequest['vpc_id'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling showVpcTags.');
            }

            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ????????????????????????
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVpc(updateVpcRequest?: UpdateVpcRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/vpcs/{vpc_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let vpcId;

            if (updateVpcRequest !== null && updateVpcRequest !== undefined) {
                if (updateVpcRequest instanceof UpdateVpcRequest) {
                    vpcId = updateVpcRequest.vpcId;
                    body = updateVpcRequest.body
                } else {
                    vpcId = updateVpcRequest['vpc_id'];
                    body = updateVpcRequest['body'];
                }
            }

        
            if (vpcId === null || vpcId === undefined) {
            throw new RequiredError('vpcId','Required parameter vpcId was null or undefined when calling updateVpc.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_id': vpcId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): VpcClient {
    return new VpcClient(client);
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}