import { ListSubscriptionsItem } from './ListSubscriptionsItem';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListSubscriptionsByTopicResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'subscription_count'?: number;
    public subscriptions?: Array<ListSubscriptionsItem>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListSubscriptionsByTopicResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSubscriptionCount(subscriptionCount: number): ListSubscriptionsByTopicResponse {
        this['subscription_count'] = subscriptionCount;
        return this;
    }
    public set subscriptionCount(subscriptionCount: number  | undefined) {
        this['subscription_count'] = subscriptionCount;
    }
    public get subscriptionCount(): number | undefined {
        return this['subscription_count'];
    }
    public withSubscriptions(subscriptions: Array<ListSubscriptionsItem>): ListSubscriptionsByTopicResponse {
        this['subscriptions'] = subscriptions;
        return this;
    }
}