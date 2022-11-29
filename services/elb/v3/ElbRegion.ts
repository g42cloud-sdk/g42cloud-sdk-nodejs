import { Region } from "@huaweicloud/huaweicloud-sdk-core/region/region";

export class ElbRegion {
    public static AE_AD_1 = new Region("ae-ad-1", "https://elb.ae-ad-1.g42cloud.com");
    

    private static STATIC_FIELDS = ElbRegion.createStaticFields();
    private static createStaticFields() {
        let map = new Map<String, Region>();
        map.set("ae-ad-1", ElbRegion.AE_AD_1);
        return map;
    }
    public static valueOf(regionId: String) {
        if (!regionId) {
          throw new Error("Unexpected empty parameter: regionId.");
        }
        const result = this.STATIC_FIELDS.get(regionId);
        if (result) {
          return result;
        }
        throw new Error(`Unexpected regionId: ${regionId}.`)
    }
}
