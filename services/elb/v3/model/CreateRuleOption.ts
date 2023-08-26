import { CreateRuleCondition } from './CreateRuleCondition';


export class CreateRuleOption {
    private 'admin_state_up'?: boolean;
    private 'compare_type'?: string;
    public key?: string;
    public value?: string;
    private 'project_id'?: string;
    public type?: string;
    public invert?: boolean;
    public conditions?: Array<CreateRuleCondition>;
    public constructor(compareType?: string, value?: string, type?: string) { 
        this['compare_type'] = compareType;
        this['value'] = value;
        this['type'] = type;
    }
    public withAdminStateUp(adminStateUp: boolean): CreateRuleOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withCompareType(compareType: string): CreateRuleOption {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: string  | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType(): string | undefined {
        return this['compare_type'];
    }
    public withKey(key: string): CreateRuleOption {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CreateRuleOption {
        this['value'] = value;
        return this;
    }
    public withProjectId(projectId: string): CreateRuleOption {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withType(type: string): CreateRuleOption {
        this['type'] = type;
        return this;
    }
    public withInvert(invert: boolean): CreateRuleOption {
        this['invert'] = invert;
        return this;
    }
    public withConditions(conditions: Array<CreateRuleCondition>): CreateRuleOption {
        this['conditions'] = conditions;
        return this;
    }
}