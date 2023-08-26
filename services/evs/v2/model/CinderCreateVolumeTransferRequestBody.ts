import { CreateVolumeTransferOption } from './CreateVolumeTransferOption';


export class CinderCreateVolumeTransferRequestBody {
    public transfer?: CreateVolumeTransferOption;
    public constructor(transfer?: CreateVolumeTransferOption) { 
        this['transfer'] = transfer;
    }
    public withTransfer(transfer: CreateVolumeTransferOption): CinderCreateVolumeTransferRequestBody {
        this['transfer'] = transfer;
        return this;
    }
}