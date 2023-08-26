import { MigrationErrors } from './MigrationErrors';

import { SdkResponse } from "@g42cloud/g42cloud-sdk-core/SdkResponse";

export class ListErrorServersResponse extends SdkResponse {
    public count?: number;
    private 'migration_errors'?: Array<MigrationErrors>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListErrorServersResponse {
        this['count'] = count;
        return this;
    }
    public withMigrationErrors(migrationErrors: Array<MigrationErrors>): ListErrorServersResponse {
        this['migration_errors'] = migrationErrors;
        return this;
    }
    public set migrationErrors(migrationErrors: Array<MigrationErrors>  | undefined) {
        this['migration_errors'] = migrationErrors;
    }
    public get migrationErrors(): Array<MigrationErrors> | undefined {
        return this['migration_errors'];
    }
}