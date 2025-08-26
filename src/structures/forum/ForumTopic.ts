import { Client } from "../Client";
import { MentionsPayload, ForumTopicPayload } from "../../typings";

export class ForumTopic {
    /** The ID of the forum topic. */
    id: number;
    /** The ID of the server where the forum topic was created. */
    serverId: string;
    /** The ID of the group where the forum topic exists in. */
    groupId: string;
    /** The ID of the channel where the forum topic exists in. */
    channelId: string;
    /** The title of the forum topic. */
    title: string;
    /** The date of the forum topic's creation. */
    createdAt: Date;
    /** The ID of the user who created the forum topic. */
    createdBy: string;
    /** The date when the forum topic was updated. */
    updatedAt?: Date;
    /** The date when the forum topic was bumped. */
    bumpedAt?: Date;
    /** Whether the forum topic is pinned. */
    pinned?: boolean;
    /** Whether the forum topic is locked. */
    locked?: boolean;
    /** The content of the forum topic. */
    content: string;
    /** The mentions of the forum topic. */
    mentions?: MentionsPayload;

    constructor(data: ForumTopicPayload, public client: Client) {
        this.id = data.id;
        this.serverId = data.serverId;
        this.groupId = data.groupId;
        this.channelId = data.channelId;
        this.title = data.title;
        this.createdAt = new Date(data.createdAt);
        this.createdBy = data.createdBy;
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
        this.bumpedAt = data.bumpedAt ? new Date(data.bumpedAt) : undefined;
        this.pinned = data.isPinned || false;
        this.locked = data.isLocked || false;
        this.content = data.content;
        this.mentions = data.mentions || {};
    };
};