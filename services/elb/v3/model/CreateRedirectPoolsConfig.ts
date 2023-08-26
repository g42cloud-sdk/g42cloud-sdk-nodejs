

export class CreateRedirectPoolsConfig {
    private 'pool_id'?: string;
    public weight?: number;
    public constructor(poolId?: string, weight?: number) { 
        this['pool_id'] = poolId;
        this['weight'] = weight;
    }
    public withPoolId(poolId: string): CreateRedirectPoolsConfig {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withWeight(weight: number): CreateRedirectPoolsConfig {
        this['weight'] = weight;
        return this;
    }
}