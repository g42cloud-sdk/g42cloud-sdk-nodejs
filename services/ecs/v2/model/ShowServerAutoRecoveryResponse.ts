
import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ShowServerAutoRecoveryResponse extends SdkResponse {
    private 'support_auto_recovery'?: string;
    public constructor() { 
        super();
    }
    public withSupportAutoRecovery(supportAutoRecovery: string): ShowServerAutoRecoveryResponse {
        this['support_auto_recovery'] = supportAutoRecovery;
        return this;
    }
    public set supportAutoRecovery(supportAutoRecovery: string  | undefined) {
        this['support_auto_recovery'] = supportAutoRecovery;
    }
    public get supportAutoRecovery(): string | undefined {
        return this['support_auto_recovery'];
    }
}