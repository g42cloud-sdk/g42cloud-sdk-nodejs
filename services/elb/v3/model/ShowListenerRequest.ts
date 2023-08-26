

export class ShowListenerRequest {
    private 'listener_id'?: string;
    public constructor(listenerId?: string) { 
        this['listener_id'] = listenerId;
    }
    public withListenerId(listenerId: string): ShowListenerRequest {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
}