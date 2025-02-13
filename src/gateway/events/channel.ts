import { Channel } from "../../structures/Channel";
import { ChannelRolePermission } from "../../structures/ChannelRolePermission";
import { ChannelUserPermission } from "../../structures/ChannelUserPermission";
import { Client } from "../../structures/Client";
import { 
    ChannelArchivedPayload,
    ChannelRestoredPayload,
    ChannelRolePermissionCreatedPayload,
    ChannelRolePermissionDeletedPayload,
    ChannelRolePermissionUpdatedPayload,
    ChannelUserPermissionCreatedPayload,
    ChannelUserPermissionDeletedPayload,
    ChannelUserPermissionUpdatedPayload,
    ServerChannelCreatedPayload, 
    ServerChannelDeletedPayload, 
    ServerChannelUpdatedPayload,
} from "../../typings";

export const created = (data: ServerChannelCreatedPayload, client: Client) => {
    const channel = new Channel(data.channel, client);
    client.emit("channelCreated", channel);
};

export const updated = (data: ServerChannelUpdatedPayload, client: Client) => {
    const channel = new Channel(data.channel, client);
    client.emit("channelCreated", channel);
};

export const deleted = (data: ServerChannelDeletedPayload, client: Client) => {
    const channel = new Channel(data.channel, client);
    client.emit("channelDeleted", channel);

    client.channels.cache.delete(channel.id);
};

export const archived = (data: ChannelArchivedPayload, client: Client) => {
    const channel = new Channel(data.channel, client);
    client.emit("channelArchived", channel);
};

export const restored = (data: ChannelRestoredPayload, client: Client) => {
    const channel = new Channel(data.channel, client);
    client.emit("channelRestored", channel);
};

/** Role & User Permissions */

export const rolePermissionCreated = (data: ChannelRolePermissionCreatedPayload, client: Client) => {
    const rolePermission = new ChannelRolePermission(data.channelRolePermission, client);
    client.emit("channelRolePermissionCreated", rolePermission);
};

export const rolePermissionUpdated = (data: ChannelRolePermissionUpdatedPayload, client: Client) => {
    const rolePermission = new ChannelRolePermission(data.channelRolePermission, client);
    client.emit("channelRolePermissionCreated", rolePermission);
};

export const rolePermissionDeleted = (data: ChannelRolePermissionDeletedPayload, client: Client) => {
    const rolePermission = new ChannelRolePermission(data.channelRolePermission, client);
    client.emit("channelRolePermissionCreated", rolePermission);
};

export const userPermissionCreated = (data: ChannelUserPermissionCreatedPayload, client: Client) => {
    const userPermission = new ChannelUserPermission(data.channelUserPermission, client);
    client.emit("channelUserPermissionCreated", userPermission);
};

export const userPermissionUpdated = (data: ChannelUserPermissionUpdatedPayload, client: Client) => {
    const userPermission = new ChannelUserPermission(data.channelUserPermission, client);
    client.emit("channelUserPermissionCreated", userPermission);
};

export const userPermissionDeleted = (data: ChannelUserPermissionDeletedPayload, client: Client) => {
    const userPermission = new ChannelUserPermission(data.channelUserPermission, client);
    client.emit("channelUserPermissionCreated", userPermission);
};