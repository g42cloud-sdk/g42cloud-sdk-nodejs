

export class NovaServerVolume {
    public id?: string;
    private 'delete_on_termination'?: boolean;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): NovaServerVolume {
        this['id'] = id;
        return this;
    }
    public withDeleteOnTermination(deleteOnTermination: boolean): NovaServerVolume {
        this['delete_on_termination'] = deleteOnTermination;
        return this;
    }
    public set deleteOnTermination(deleteOnTermination: boolean  | undefined) {
        this['delete_on_termination'] = deleteOnTermination;
    }
    public get deleteOnTermination(): boolean | undefined {
        return this['delete_on_termination'];
    }
}