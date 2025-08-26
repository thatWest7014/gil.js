import { Client } from "./Client";
import { WebhookPayload } from "../typings";

export class Webhook {
    /** The ID of the webhook. */
    id: string;
    /** The name of the webhook. */
    name: string;
    /** The URL of the webhook's avatar. */
    avatar?: string;
    /** The ID of the server where the webhook was created. */
    serverId: string;
    /** The ID of the channel where the webhook was created. */
    channelId: string;
    /** The date of the webhook's creation. */
    createdAt: Date;
    /** The ID of the user who created the webhook. */
    createdBy: string;
    /** When the webhook was deleted. */
    deletedAt?: Date;
    /** The token of the webhook. */
    token?: string;

    constructor(data: WebhookPayload, public client: Client) {
        this.id = data.id;
        this.name = data.name;
        this.avatar = data.avatar;
        this.serverId = data.serverId;
        this.channelId = data.channelId;
        this.createdAt = new Date(data.createdAt);
        this.createdBy = data.createdBy;
        this.deletedAt = data.deletedAt ? new Date(data.deletedAt) : undefined;
        this.token = data.token;
    };
};