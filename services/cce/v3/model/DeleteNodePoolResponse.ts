import { NodePoolMetadata } from './NodePoolMetadata';
import { NodePoolSpec } from './NodePoolSpec';
import { NodePoolStatus } from './NodePoolStatus';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class DeleteNodePoolResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: NodePoolMetadata;
    public spec?: NodePoolSpec;
    public status?: NodePoolStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): DeleteNodePoolResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): DeleteNodePoolResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: NodePoolMetadata): DeleteNodePoolResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodePoolSpec): DeleteNodePoolResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NodePoolStatus): DeleteNodePoolResponse {
        this['status'] = status;
        return this;
    }
}