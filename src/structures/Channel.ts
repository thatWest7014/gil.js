import { ServerChannelPayload, ServerChannelType, ServerChannelVisibility } from "../typings";
import { Client } from "./Client";

export class Channel {
    /** The ID of the channel. */
    id: string;
    /** The type of the channel. */
    type: ServerChannelType;
    /** The name of the channel. */
    name: string;
    /** The topic of the channel. */
    topic?: string;
    /** The date of the channel's creation. */
    createdAt: Date;
    /** The ID of the user who created the channel. */
    createdBy: string;
    /** When the webhook was updated. */
    updatedAt?: Date;
    /** The ID of the server where the channel was created. */
    serverId: string;
    /** The ID of root channel. (applicable to chat, voice & stream channels) */
    rootId?: string;
    /** The ID of the immediate parent channel. (applicable to chat, voice & stream channels) */
    parentId?: string;
    /** The ID of the message that this channel was created off of. (applicable to chat, voice & stream channels) */
    messageId?: string;
    /** The ID of the category which this channel exists in. */
    categoryId?: string;
    /** The ID of the group which this channel exists in. */
    groupId: string;
    /** The visibility of the channel. (public or private) */
    visibility?: ServerChannelVisibility;
    /** The ID of the user who archived the channel. */
    archivedBy?: string;
    /** The date of the channel's archival. */
    archivedAt?: Date;
    /** The priority (position) of the channel. */
    priority?: number;
    
    constructor(data: ServerChannelPayload, public client: Client) {
        this.id = data.id;
        this.type = data.type;
        this.name = data.name;
        this.topic = data.topic;
        this.createdAt = new Date(data.createdAt);
        this.createdBy = data.createdBy;
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
        this.serverId = data.serverId;
        this.rootId = data.rootId;
        this.parentId = data.parentId;
        this.messageId = data.messageId;
        this.categoryId = data.categoryId;
        this.groupId = data.groupId;
        this.visibility = data.visibility;
        this.archivedBy = data.archivedBy;
        this.archivedAt = data.archivedAt ? new Date(data.archivedAt) : undefined;
        this.priority = data.priority;

        client.channels.cache.set(this.id, this);
    };
};