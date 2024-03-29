import { ServerGroupMember } from './ServerGroupMember';


export class AddServerGroupMemberRequestBody {
    private 'add_member'?: ServerGroupMember;
    public constructor(addMember?: ServerGroupMember) { 
        this['add_member'] = addMember;
    }
    public withAddMember(addMember: ServerGroupMember): AddServerGroupMemberRequestBody {
        this['add_member'] = addMember;
        return this;
    }
    public set addMember(addMember: ServerGroupMember  | undefined) {
        this['add_member'] = addMember;
    }
    public get addMember(): ServerGroupMember | undefined {
        return this['add_member'];
    }
}