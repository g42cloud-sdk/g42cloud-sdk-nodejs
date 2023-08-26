

export class ClusterCert {
    public server?: string;
    private 'certificate-authority-data'?: string;
    private 'insecure-skip-tls-verify'?: boolean;
    public constructor() { 
    }
    public withServer(server: string): ClusterCert {
        this['server'] = server;
        return this;
    }
    public withCertificateAuthorityData(certificateAuthorityData: string): ClusterCert {
        this['certificate-authority-data'] = certificateAuthorityData;
        return this;
    }
    public set certificateAuthorityData(certificateAuthorityData: string  | undefined) {
        this['certificate-authority-data'] = certificateAuthorityData;
    }
    public get certificateAuthorityData(): string | undefined {
        return this['certificate-authority-data'];
    }
    public withInsecureSkipTlsVerify(insecureSkipTlsVerify: boolean): ClusterCert {
        this['insecure-skip-tls-verify'] = insecureSkipTlsVerify;
        return this;
    }
    public set insecureSkipTlsVerify(insecureSkipTlsVerify: boolean  | undefined) {
        this['insecure-skip-tls-verify'] = insecureSkipTlsVerify;
    }
    public get insecureSkipTlsVerify(): boolean | undefined {
        return this['insecure-skip-tls-verify'];
    }
}