import { CreateVpcOption } from './CreateVpcOption';


export class CreateVpcRequestBody {
    private 'dry_run'?: boolean;
    public vpc?: CreateVpcOption;
    public constructor(vpc?: CreateVpcOption) { 
        this['vpc'] = vpc;
    }
    public withDryRun(dryRun: boolean): CreateVpcRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withVpc(vpc: CreateVpcOption): CreateVpcRequestBody {
        this['vpc'] = vpc;
        return this;
    }
}