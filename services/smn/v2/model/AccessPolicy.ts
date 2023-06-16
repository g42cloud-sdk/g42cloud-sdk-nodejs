import { Statement } from './Statement';


export class AccessPolicy {
    private 'Version': string | undefined;
    private 'Id': string | undefined;
    private 'Statement': Array<Statement> | undefined;
    public constructor(version?: any, id?: any, statement?: any) { 
        this['Version'] = version;
        this['Id'] = id;
        this['Statement'] = statement;
    }
    public withVersion(version: string): AccessPolicy {
        this['Version'] = version;
        return this;
    }
    public set version(version: string | undefined) {
        this['Version'] = version;
    }
    public get version() {
        return this['Version'];
    }
    public withId(id: string): AccessPolicy {
        this['Id'] = id;
        return this;
    }
    public set id(id: string | undefined) {
        this['Id'] = id;
    }
    public get id() {
        return this['Id'];
    }
    public withStatement(statement: Array<Statement>): AccessPolicy {
        this['Statement'] = statement;
        return this;
    }
    public set statement(statement: Array<Statement> | undefined) {
        this['Statement'] = statement;
    }
    public get statement() {
        return this['Statement'];
    }
}