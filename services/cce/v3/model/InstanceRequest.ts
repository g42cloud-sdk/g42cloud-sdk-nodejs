import { InstanceRequestSpec } from './InstanceRequestSpec';
import { Metadata } from './Metadata';


export class InstanceRequest {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: Metadata;
    public spec?: InstanceRequestSpec;
    public constructor(kind?: string, apiVersion?: string, metadata?: Metadata, spec?: InstanceRequestSpec) { 
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withKind(kind: string): InstanceRequest {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): InstanceRequest {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: Metadata): InstanceRequest {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: InstanceRequestSpec): InstanceRequest {
        this['spec'] = spec;
        return this;
    }
}