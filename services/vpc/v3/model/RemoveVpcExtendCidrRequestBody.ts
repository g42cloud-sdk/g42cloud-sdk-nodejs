import { RemoveExtendCidrOption } from './RemoveExtendCidrOption';


export class RemoveVpcExtendCidrRequestBody {
    private 'dry_run'?: boolean;
    public vpc?: RemoveExtendCidrOption;
    public constructor(vpc?: RemoveExtendCidrOption) { 
        this['vpc'] = vpc;
    }
    public withDryRun(dryRun: boolean): RemoveVpcExtendCidrRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withVpc(vpc: RemoveExtendCidrOption): RemoveVpcExtendCidrRequestBody {
        this['vpc'] = vpc;
        return this;
    }
}