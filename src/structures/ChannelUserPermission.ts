import { ChannelUserPermissionPayload } from "../typings";
import { Client } from "./Client";

export class ChannelUserPermission {
    permissions: object;
    createdAt: Date;
    updatedAt?: Date;
    userId: string;
    channelId: string;

    constructor(data: ChannelUserPermissionPayload, public client: Client) {
        this.permissions = data.permissions;
        this.createdAt = new Date(data.createdAt);
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
        this.userId = data.userId;
        this.channelId = data.channelId;
    };
};