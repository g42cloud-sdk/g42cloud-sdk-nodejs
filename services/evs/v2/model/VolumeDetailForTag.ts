import { Attachment } from './Attachment';
import { Link } from './Link';
import { VolumeMetadata } from './VolumeMetadata';


export class VolumeDetailForTag {
    public id?: string;
    public links?: Array<Link>;
    public name?: string;
    public status?: string;
    public attachments?: Array<Attachment>;
    private 'availability_zone'?: string;
    private 'os-vol-host-attr:host'?: string;
    private 'source_volid'?: string;
    private 'snapshot_id'?: string;
    public description?: string;
    private 'created_at'?: string;
    private 'os-vol-tenant-attr:tenant_id'?: string;
    private 'volume_image_metadata'?: { [key: string]: object; };
    private 'volume_type'?: string;
    public size?: number;
    private 'consistencygroup_id'?: string;
    public bootable?: string;
    public metadata?: VolumeMetadata;
    private 'updated_at'?: string;
    public encrypted?: boolean;
    private 'replication_status'?: string;
    private 'os-volume-replication:extended_status'?: string;
    private 'os-vol-mig-status-attr:migstat'?: string;
    private 'os-vol-mig-status-attr:name_id'?: string;
    public shareable?: boolean;
    private 'user_id'?: string;
    private 'service_type'?: string;
    public multiattach?: boolean;
    private 'dedicated_storage_id'?: string;
    private 'dedicated_storage_name'?: string;
    public tags?: { [key: string]: string; };
    public wwn?: string;
    private 'enterprise_project_id'?: string;
    public constructor(id?: string, links?: Array<Link>, name?: string, status?: string, attachments?: Array<Attachment>, availabilityZone?: string, osVolHostAttrHost?: string, snapshotId?: string, description?: string, createdAt?: string, osVolTenantAttrTenantId?: string, volumeImageMetadata?: { [key: string]: object; }, volumeType?: string, size?: number, bootable?: string, metadata?: VolumeMetadata, updatedAt?: string, replicationStatus?: string, osVolumeReplicationExtendedStatus?: string, osVolMigStatusAttrMigstat?: string, osVolMigStatusAttrNameId?: string, shareable?: boolean, userId?: string, serviceType?: string, multiattach?: boolean, tags?: { [key: string]: string; }) { 
        this['id'] = id;
        this['links'] = links;
        this['name'] = name;
        this['status'] = status;
        this['attachments'] = attachments;
        this['availability_zone'] = availabilityZone;
        this['os-vol-host-attr:host'] = osVolHostAttrHost;
        this['snapshot_id'] = snapshotId;
        this['description'] = description;
        this['created_at'] = createdAt;
        this['os-vol-tenant-attr:tenant_id'] = osVolTenantAttrTenantId;
        this['volume_image_metadata'] = volumeImageMetadata;
        this['volume_type'] = volumeType;
        this['size'] = size;
        this['bootable'] = bootable;
        this['metadata'] = metadata;
        this['updated_at'] = updatedAt;
        this['replication_status'] = replicationStatus;
        this['os-volume-replication:extended_status'] = osVolumeReplicationExtendedStatus;
        this['os-vol-mig-status-attr:migstat'] = osVolMigStatusAttrMigstat;
        this['os-vol-mig-status-attr:name_id'] = osVolMigStatusAttrNameId;
        this['shareable'] = shareable;
        this['user_id'] = userId;
        this['service_type'] = serviceType;
        this['multiattach'] = multiattach;
        this['tags'] = tags;
    }
    public withId(id: string): VolumeDetailForTag {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<Link>): VolumeDetailForTag {
        this['links'] = links;
        return this;
    }
    public withName(name: string): VolumeDetailForTag {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): VolumeDetailForTag {
        this['status'] = status;
        return this;
    }
    public withAttachments(attachments: Array<Attachment>): VolumeDetailForTag {
        this['attachments'] = attachments;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): VolumeDetailForTag {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withOsVolHostAttrHost(osVolHostAttrHost: string): VolumeDetailForTag {
        this['os-vol-host-attr:host'] = osVolHostAttrHost;
        return this;
    }
    public set osVolHostAttrHost(osVolHostAttrHost: string  | undefined) {
        this['os-vol-host-attr:host'] = osVolHostAttrHost;
    }
    public get osVolHostAttrHost(): string | undefined {
        return this['os-vol-host-attr:host'];
    }
    public withSourceVolid(sourceVolid: string): VolumeDetailForTag {
        this['source_volid'] = sourceVolid;
        return this;
    }
    public set sourceVolid(sourceVolid: string  | undefined) {
        this['source_volid'] = sourceVolid;
    }
    public get sourceVolid(): string | undefined {
        return this['source_volid'];
    }
    public withSnapshotId(snapshotId: string): VolumeDetailForTag {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
    public withDescription(description: string): VolumeDetailForTag {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: string): VolumeDetailForTag {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withOsVolTenantAttrTenantId(osVolTenantAttrTenantId: string): VolumeDetailForTag {
        this['os-vol-tenant-attr:tenant_id'] = osVolTenantAttrTenantId;
        return this;
    }
    public set osVolTenantAttrTenantId(osVolTenantAttrTenantId: string  | undefined) {
        this['os-vol-tenant-attr:tenant_id'] = osVolTenantAttrTenantId;
    }
    public get osVolTenantAttrTenantId(): string | undefined {
        return this['os-vol-tenant-attr:tenant_id'];
    }
    public withVolumeImageMetadata(volumeImageMetadata: { [key: string]: object; }): VolumeDetailForTag {
        this['volume_image_metadata'] = volumeImageMetadata;
        return this;
    }
    public set volumeImageMetadata(volumeImageMetadata: { [key: string]: object; }  | undefined) {
        this['volume_image_metadata'] = volumeImageMetadata;
    }
    public get volumeImageMetadata(): { [key: string]: object; } | undefined {
        return this['volume_image_metadata'];
    }
    public withVolumeType(volumeType: string): VolumeDetailForTag {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withSize(size: number): VolumeDetailForTag {
        this['size'] = size;
        return this;
    }
    public withConsistencygroupId(consistencygroupId: string): VolumeDetailForTag {
        this['consistencygroup_id'] = consistencygroupId;
        return this;
    }
    public set consistencygroupId(consistencygroupId: string  | undefined) {
        this['consistencygroup_id'] = consistencygroupId;
    }
    public get consistencygroupId(): string | undefined {
        return this['consistencygroup_id'];
    }
    public withBootable(bootable: string): VolumeDetailForTag {
        this['bootable'] = bootable;
        return this;
    }
    public withMetadata(metadata: VolumeMetadata): VolumeDetailForTag {
        this['metadata'] = metadata;
        return this;
    }
    public withUpdatedAt(updatedAt: string): VolumeDetailForTag {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withEncrypted(encrypted: boolean): VolumeDetailForTag {
        this['encrypted'] = encrypted;
        return this;
    }
    public withReplicationStatus(replicationStatus: string): VolumeDetailForTag {
        this['replication_status'] = replicationStatus;
        return this;
    }
    public set replicationStatus(replicationStatus: string  | undefined) {
        this['replication_status'] = replicationStatus;
    }
    public get replicationStatus(): string | undefined {
        return this['replication_status'];
    }
    public withOsVolumeReplicationExtendedStatus(osVolumeReplicationExtendedStatus: string): VolumeDetailForTag {
        this['os-volume-replication:extended_status'] = osVolumeReplicationExtendedStatus;
        return this;
    }
    public set osVolumeReplicationExtendedStatus(osVolumeReplicationExtendedStatus: string  | undefined) {
        this['os-volume-replication:extended_status'] = osVolumeReplicationExtendedStatus;
    }
    public get osVolumeReplicationExtendedStatus(): string | undefined {
        return this['os-volume-replication:extended_status'];
    }
    public withOsVolMigStatusAttrMigstat(osVolMigStatusAttrMigstat: string): VolumeDetailForTag {
        this['os-vol-mig-status-attr:migstat'] = osVolMigStatusAttrMigstat;
        return this;
    }
    public set osVolMigStatusAttrMigstat(osVolMigStatusAttrMigstat: string  | undefined) {
        this['os-vol-mig-status-attr:migstat'] = osVolMigStatusAttrMigstat;
    }
    public get osVolMigStatusAttrMigstat(): string | undefined {
        return this['os-vol-mig-status-attr:migstat'];
    }
    public withOsVolMigStatusAttrNameId(osVolMigStatusAttrNameId: string): VolumeDetailForTag {
        this['os-vol-mig-status-attr:name_id'] = osVolMigStatusAttrNameId;
        return this;
    }
    public set osVolMigStatusAttrNameId(osVolMigStatusAttrNameId: string  | undefined) {
        this['os-vol-mig-status-attr:name_id'] = osVolMigStatusAttrNameId;
    }
    public get osVolMigStatusAttrNameId(): string | undefined {
        return this['os-vol-mig-status-attr:name_id'];
    }
    public withShareable(shareable: boolean): VolumeDetailForTag {
        this['shareable'] = shareable;
        return this;
    }
    public withUserId(userId: string): VolumeDetailForTag {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withServiceType(serviceType: string): VolumeDetailForTag {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withMultiattach(multiattach: boolean): VolumeDetailForTag {
        this['multiattach'] = multiattach;
        return this;
    }
    public withDedicatedStorageId(dedicatedStorageId: string): VolumeDetailForTag {
        this['dedicated_storage_id'] = dedicatedStorageId;
        return this;
    }
    public set dedicatedStorageId(dedicatedStorageId: string  | undefined) {
        this['dedicated_storage_id'] = dedicatedStorageId;
    }
    public get dedicatedStorageId(): string | undefined {
        return this['dedicated_storage_id'];
    }
    public withDedicatedStorageName(dedicatedStorageName: string): VolumeDetailForTag {
        this['dedicated_storage_name'] = dedicatedStorageName;
        return this;
    }
    public set dedicatedStorageName(dedicatedStorageName: string  | undefined) {
        this['dedicated_storage_name'] = dedicatedStorageName;
    }
    public get dedicatedStorageName(): string | undefined {
        return this['dedicated_storage_name'];
    }
    public withTags(tags: { [key: string]: string; }): VolumeDetailForTag {
        this['tags'] = tags;
        return this;
    }
    public withWwn(wwn: string): VolumeDetailForTag {
        this['wwn'] = wwn;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): VolumeDetailForTag {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}