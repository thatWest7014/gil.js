import { Category } from "../../structures/Category";
import { CategoryRolePermission } from "../../structures/CategoryRolePermission";
import { CategoryUserPermission } from "../../structures/CategoryUserPermission";
import { Client } from "../../structures/Client";
import { 
    CategoryCreatedPayload, 
    CategoryDeletedPayload, 
    CategoryUpdatedPayload,
    ChannelCategoryRolePermissionCreatedPayload,
    ChannelCategoryRolePermissionDeletedPayload,
    ChannelCategoryRolePermissionUpdatedPayload,
    ChannelCategoryUserPermissionCreatedPayload,
    ChannelCategoryUserPermissionDeletedPayload,
    ChannelCategoryUserPermissionUpdatedPayload
} from "../../typings";

export const created = (data: CategoryCreatedPayload, client: Client) => {
    const category = new Category(data.category, client);
    client.emit("categoryCreated", category);
};

export const updated = (data: CategoryUpdatedPayload, client: Client) => {
    const category = new Category(data.category, client);
    client.emit("categoryUpdated", category);
};

export const deleted = (data: CategoryDeletedPayload, client: Client) => {
    const category = new Category(data.category, client);
    client.emit("categoryDeleted", category);
};

/** Role & User Permissions */

export const rolePermissionCreated = (data: ChannelCategoryRolePermissionCreatedPayload, client: Client) => {
    const rolePermission = new CategoryRolePermission(data.channelCategoryRolePermission, client);
    client.emit("categoryRolePermissionCreated", rolePermission);
};

export const rolePermissionUpdated = (data: ChannelCategoryRolePermissionUpdatedPayload, client: Client) => {
    const rolePermission = new CategoryRolePermission(data.channelCategoryRolePermission, client);
    client.emit("categoryRolePermissionCreated", rolePermission);
};

export const rolePermissionDeleted = (data: ChannelCategoryRolePermissionDeletedPayload, client: Client) => {
    const rolePermission = new CategoryRolePermission(data.channelCategoryRolePermission, client);
    client.emit("categoryRolePermissionCreated", rolePermission);
};

export const userPermissionCreated = (data: ChannelCategoryUserPermissionCreatedPayload, client: Client) => {
    const userPermission = new CategoryUserPermission(data.channelCategoryUserPermission, client);
    client.emit("categoryUserPermissionCreated", userPermission);
};

export const userPermissionUpdated = (data: ChannelCategoryUserPermissionUpdatedPayload, client: Client) => {
    const userPermission = new CategoryUserPermission(data.channelCategoryUserPermission, client);
    client.emit("categoryUserPermissionCreated", userPermission);
};

export const userPermissionDeleted = (data: ChannelCategoryUserPermissionDeletedPayload, client: Client) => {
    const userPermission = new CategoryUserPermission(data.channelCategoryUserPermission, client);
    client.emit("categoryUserPermissionCreated", userPermission);
};