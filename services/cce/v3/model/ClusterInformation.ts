import { ClusterInformationSpec } from './ClusterInformationSpec';


export class ClusterInformation {
    public spec?: ClusterInformationSpec;
    public constructor(spec?: ClusterInformationSpec) { 
        this['spec'] = spec;
    }
    public withSpec(spec: ClusterInformationSpec): ClusterInformation {
        this['spec'] = spec;
        return this;
    }
}