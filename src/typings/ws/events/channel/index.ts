import { ChannelRolePermissionPayload, ChannelUserPermissionPayload, ServerChannelPayload } from "../../../payloads";
export * from "./doc";
export * from "./calendar";
export * from "./forum-topic";
export * from "./list";
export * from "./announcement";

export type ServerChannelCreatedPayload = {
    serverId: string;
    channel: ServerChannelPayload;
};

export type ServerChannelUpdatedPayload = {
    serverId: string;
    channel: ServerChannelPayload;
};

export type ServerChannelDeletedPayload = {
    serverId: string;
    channel: ServerChannelPayload;
};

export type ChannelArchivedPayload = {
    serverId: string;
    channel: ServerChannelPayload;
};

export type ChannelRestoredPayload = {
    serverId: string;
    channel: ServerChannelPayload;
};

/** Permissions */

export type ChannelRolePermissionCreatedPayload = {
    serverId: string;
    channelRolePermission: ChannelRolePermissionPayload;
};

export type ChannelRolePermissionUpdatedPayload = {
    serverId: string;
    channelRolePermission: ChannelRolePermissionPayload;
};

export type ChannelRolePermissionDeletedPayload = {
    serverId: string;
    channelRolePermission: ChannelRolePermissionPayload;
};

export type ChannelUserPermissionCreatedPayload = {
    serverId: string;
    channelUserPermission: ChannelUserPermissionPayload;
};

export type ChannelUserPermissionUpdatedPayload = {
    serverId: string;
    channelUserPermission: ChannelUserPermissionPayload;
};

export type ChannelUserPermissionDeletedPayload = {
    serverId: string;
    channelUserPermission: ChannelUserPermissionPayload;
};