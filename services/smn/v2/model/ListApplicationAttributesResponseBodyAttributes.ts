

export class ListApplicationAttributesResponseBodyAttributes {
    public enabled?: string;
    private 'apple_certificate_expiration_date'?: string;
    public constructor(enabled?: string) { 
        this['enabled'] = enabled;
    }
    public withEnabled(enabled: string): ListApplicationAttributesResponseBodyAttributes {
        this['enabled'] = enabled;
        return this;
    }
    public withAppleCertificateExpirationDate(appleCertificateExpirationDate: string): ListApplicationAttributesResponseBodyAttributes {
        this['apple_certificate_expiration_date'] = appleCertificateExpirationDate;
        return this;
    }
    public set appleCertificateExpirationDate(appleCertificateExpirationDate: string  | undefined) {
        this['apple_certificate_expiration_date'] = appleCertificateExpirationDate;
    }
    public get appleCertificateExpirationDate(): string | undefined {
        return this['apple_certificate_expiration_date'];
    }
}