

export class RuleCondition {
    public key?: string;
    public value?: string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: string): RuleCondition {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): RuleCondition {
        this['value'] = value;
        return this;
    }
}