import { Region } from "@g42cloud/g42cloud-sdk-core/region/region";


interface RegionMap {
    [key: string]: Region;
}

export class MpcRegion {
    public static AE_AD_1 = new Region("ae-ad-1", ["https://mpc.ae-ad-1.g42cloud.com"]);
    

    private static REGION_MAP: RegionMap = {
        "ae-ad-1":MpcRegion.AE_AD_1
    };
  
    public static valueOf(regionId: string) {
        if (!regionId) {  
          throw new Error("Unexpected empty parameter: regionId.");
        }
        const result = this.REGION_MAP[regionId];
        if (result) {
          return result;
        }
        throw new Error(`Unexpected regionId: ${regionId}.`)
    }
}
