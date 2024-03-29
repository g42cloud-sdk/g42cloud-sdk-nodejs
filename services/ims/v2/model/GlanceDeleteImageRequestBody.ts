

export class GlanceDeleteImageRequestBody {
    private 'delete_backup'?: boolean;
    public constructor() { 
    }
    public withDeleteBackup(deleteBackup: boolean): GlanceDeleteImageRequestBody {
        this['delete_backup'] = deleteBackup;
        return this;
    }
    public set deleteBackup(deleteBackup: boolean  | undefined) {
        this['delete_backup'] = deleteBackup;
    }
    public get deleteBackup(): boolean | undefined {
        return this['delete_backup'];
    }
}