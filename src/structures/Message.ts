import { SendMessageOptions } from "../managers/MessageManager";
import { MessagePayload, MessageType } from "../typings/payloads/message";
import { MentionsPayload } from "../typings/payloads/message/mentions";
import { Channel } from "./Channel";
import { Client } from "./Client";
import { Embed } from "./Embed";
import { Server } from "./Server";

export class Message {
    /** The ID of the message. */
    id: string;
    /** The type of the message (default or system). */
    type: MessageType;
    /** The server ID where the message was sent. */
    serverId?: string;
    /** The group ID where the message was sent. */
    groupId?: string;
    /** The channel ID where the message was sent. */
    channelId: string;
    /** The content of the message. */
    content?: string;
    /** The hidden link preview URLs of the message. */
    hiddenLinkPreviewUrls?: string[];
    /** The embeds of the message. */
    embeds?: Embed[];
    /** The IDs of the messages which the message was replying to. */
    replyMessageIds?: string[];
    /** Whether the message was privately sent. */
    private?: boolean;
    /** Whether the message was silently sent. */
    silent?: boolean;
    /** Whether the message is pinned. */
    pinned?: boolean;
    /** The mentions of the message. */
    mentions?: MentionsPayload;
    /** The date when the message was created. */
    createdAt: Date;
    /** The ID of the user who sent the message. */
    createdBy: string;
    /** The ID of the webhook who sent the message (if it exists). */
    createdByWebhookId?: string;
    /** The date when the message was last updated. */
    updatedAt?: Date;
    /** The date when the message was deleted. */
    deletedAt?: Date;

    constructor(data: MessagePayload, public client: Client) {
        this.id = data.id;
        this.type = data.type;
        this.serverId = data.serverId;
        this.groupId = data.groupId;
        this.channelId = data.channelId;
        this.content = data.content;
        this.hiddenLinkPreviewUrls = data.hiddenLinkPreviewUrls || [];
        this.embeds = data.embeds?.map((embed) => new Embed(embed)) || [];
        this.replyMessageIds = data.replyMessageIds || [];
        this.private = data.isPrivate || false;
        this.silent = data.isSilent || false;
        this.pinned = data.isPinned || false;
        this.mentions = data.mentions || {};
        this.createdAt = new Date(data.createdAt);
        this.createdBy = data.createdBy;
        this.createdByWebhookId = data.createdByWebhookId;
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
        this.deletedAt = data.deletedAt ? new Date(data.deletedAt) : undefined;

        this.client.messages.cache.set(this.id, this);
    };

    /**
     * The Guilded server where this message exists in.
     */
    get server(): Server | null {
        return this.serverId ? this.client.servers.cache.get(this.serverId) || null : null;
    };

    /**
     * The Guilded channel where this message exists in.
     */
    get channel(): Channel | null {
        return this.client.channels.cache.get(this.channelId) || null;
    };

    /**
     * Reply to this Guilded message.
     * @param data Message data.
     */
    reply(data: SendMessageOptions) {
        return this.client.messages.create(this.channelId, {
            replyMessageIds: [this.id],
            ...data,
        });
    };

    /** Pin this Guilded message. */
    pin() {
        return this.client.messages.pin(this.channelId, this.id);
    };

    /** Unpin this Guilded message. */
    unpin() {
        return this.client.messages.unpin(this.channelId, this.id);
    };
};