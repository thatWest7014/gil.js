import { ChannelCategoryRolePermissionPayload } from "../typings";
import { Client } from "./Client";

export class CategoryRolePermission {
    permissions: object;
    createdAt: Date;
    updatedAt?: Date;
    roleId: number;
    categoryId: number;

    constructor(data: ChannelCategoryRolePermissionPayload, public client: Client) {
        this.permissions = data.permissions;
        this.createdAt = new Date(data.createdAt);
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
        this.roleId = data.roleId;
        this.categoryId = data.categoryId;
    };
};