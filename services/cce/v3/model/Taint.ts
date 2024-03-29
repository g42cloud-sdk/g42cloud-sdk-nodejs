

export class Taint {
    public key?: string;
    public value?: string;
    public effect?: TaintEffectEnum | string;
    public constructor(key?: string, effect?: string) { 
        this['key'] = key;
        this['effect'] = effect;
    }
    public withKey(key: string): Taint {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): Taint {
        this['value'] = value;
        return this;
    }
    public withEffect(effect: TaintEffectEnum | string): Taint {
        this['effect'] = effect;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TaintEffectEnum {
    NOSCHEDULE = 'NoSchedule',
    PREFERNOSCHEDULE = 'PreferNoSchedule',
    NOEXECUTE = 'NoExecute'
}
