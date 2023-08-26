import { CreateMemberOption } from './CreateMemberOption';


export class CreateMemberRequestBody {
    public member?: CreateMemberOption;
    public constructor(member?: CreateMemberOption) { 
        this['member'] = member;
    }
    public withMember(member: CreateMemberOption): CreateMemberRequestBody {
        this['member'] = member;
        return this;
    }
}