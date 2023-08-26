

export class CreateServerGroupOption {
    public name?: string;
    public policies?: Array<CreateServerGroupOptionPoliciesEnum> | Array<string>;
    public constructor(name?: string, policies?: Array<string>) { 
        this['name'] = name;
        this['policies'] = policies;
    }
    public withName(name: string): CreateServerGroupOption {
        this['name'] = name;
        return this;
    }
    public withPolicies(policies: Array<CreateServerGroupOptionPoliciesEnum> | Array<string>): CreateServerGroupOption {
        this['policies'] = policies;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateServerGroupOptionPoliciesEnum {
    ANTI_AFFINITY = 'anti-affinity'
}
