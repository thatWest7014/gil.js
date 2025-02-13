export * from "./doc";
export * from "./calendar";
export * from "./forum";
export * from "./list";
export * from "./announcement";

export type ServerChannelPayload = {
    id: string;
    type: ServerChannelType;
    name: string;
    topic?: string;
    createdAt: string;
    createdBy: string;
    updatedAt?: string;
    serverId: string;
    rootId?: string;
    parentId?: string;
    messageId?: string;
    categoryId?: string;
    groupId: string;
    visibility?: ServerChannelVisibility;
    archivedBy?: string;
    archivedAt?: string;
    priority?: number;
};

export enum ServerChannelType {
    Announcements = "announcements",
    Chat = "chat",
    Calendar = "calendar",
    Forums = "forums",
    Media = "media",
    Docs = "docs",
    Voice = "voice",
    List = "list",
    Scheduling = "scheduling",
    Stream = "stream",
};

export enum ServerChannelVisibility {
    Private = "private",
    Public = "public",
};

// Permissions

export type ChannelRolePermissionPayload = {
    permissions: object;
    createdAt: string;
    updatedAt?: string;
    roleId: number;
    channelId: string;
};

export type ChannelUserPermissionPayload = {
    permissions: object;
    createdAt: string;
    updatedAt?: string;
    userId: string;
    channelId: string;
};