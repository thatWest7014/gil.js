import { ChannelRolePermissionPayload } from "../typings";
import { Client } from "./Client";

export class ChannelRolePermission {
    permissions: object;
    createdAt: Date;
    updatedAt?: Date;
    roleId: number;
    channelId: string;

    constructor(data: ChannelRolePermissionPayload, public client: Client) {
        this.permissions = data.permissions;
        this.createdAt = new Date(data.createdAt);
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
        this.roleId = data.roleId;
        this.channelId = data.channelId;
    };
};