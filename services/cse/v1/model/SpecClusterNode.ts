import { ClusterNode } from './ClusterNode';


export class SpecClusterNode {
    private 'cluster_nodes'?: Array<ClusterNode>;
    public constructor() { 
    }
    public withClusterNodes(clusterNodes: Array<ClusterNode>): SpecClusterNode {
        this['cluster_nodes'] = clusterNodes;
        return this;
    }
    public set clusterNodes(clusterNodes: Array<ClusterNode>  | undefined) {
        this['cluster_nodes'] = clusterNodes;
    }
    public get clusterNodes(): Array<ClusterNode> | undefined {
        return this['cluster_nodes'];
    }
}