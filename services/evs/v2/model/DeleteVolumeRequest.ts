

export class DeleteVolumeRequest {
    private 'volume_id'?: string;
    public constructor(volumeId?: string) { 
        this['volume_id'] = volumeId;
    }
    public withVolumeId(volumeId: string): DeleteVolumeRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
}