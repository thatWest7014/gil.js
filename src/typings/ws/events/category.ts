import { CategoryPayload, ChannelCategoryRolePermissionPayload, ChannelCategoryUserPermissionPayload } from "../../payloads";

export type CategoryCreatedPayload = {
    serverId: string;
    category: CategoryPayload;
};

export type CategoryUpdatedPayload = {
    serverId: string;
    category: CategoryPayload;
};

export type CategoryDeletedPayload = {
    serverId: string;
    category: CategoryPayload;
};

/** Permissions */

export type ChannelCategoryUserPermissionCreatedPayload = {
    serverId: string;
    channelCategoryUserPermission: ChannelCategoryUserPermissionPayload;
};

export type ChannelCategoryUserPermissionUpdatedPayload = {
    serverId: string;
    channelCategoryUserPermission: ChannelCategoryUserPermissionPayload;
};

export type ChannelCategoryUserPermissionDeletedPayload = {
    serverId: string;
    channelCategoryUserPermission: ChannelCategoryUserPermissionPayload;
};

export type ChannelCategoryRolePermissionCreatedPayload = {
    serverId: string;
    channelCategoryRolePermission: ChannelCategoryRolePermissionPayload;
};

export type ChannelCategoryRolePermissionUpdatedPayload = {
    serverId: string;
    channelCategoryRolePermission: ChannelCategoryRolePermissionPayload;
};

export type ChannelCategoryRolePermissionDeletedPayload = {
    serverId: string;
    channelCategoryRolePermission: ChannelCategoryRolePermissionPayload;
};