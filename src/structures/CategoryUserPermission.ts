import { ChannelCategoryUserPermissionPayload } from "../typings";
import { Client } from "./Client";

export class CategoryUserPermission {
    permissions: object;
    createdAt: Date;
    updatedAt?: Date;
    userId: string;
    categoryId: number;

    constructor(data: ChannelCategoryUserPermissionPayload, public client: Client) {
        this.permissions = data.permissions;
        this.createdAt = new Date(data.createdAt);
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
        this.userId = data.userId;
        this.categoryId = data.categoryId;
    };
};