import { LoadBalancer } from './LoadBalancer';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class CreateLoadBalancerResponse extends SdkResponse {
    public loadbalancer?: LoadBalancer;
    private 'loadbalancer_id'?: string;
    private 'order_id'?: string;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withLoadbalancer(loadbalancer: LoadBalancer): CreateLoadBalancerResponse {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
    public withLoadbalancerId(loadbalancerId: string): CreateLoadBalancerResponse {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withOrderId(orderId: string): CreateLoadBalancerResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withRequestId(requestId: string): CreateLoadBalancerResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}