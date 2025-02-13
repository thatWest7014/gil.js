import { ForumTopicCommentPayload, MentionsPayload } from "../../typings";
import { Client } from "../Client";

export class ForumTopicComment {
    /** The ID of the comment. */
    id: number;
    /** The content of the comment. */
    content: string;
    /** The creation date of the comment. */
    createdAt: Date;
    /** The date when the comment was updated. */
    updatedAt?: Date;
    /** The ID of the channel where this comment exists in. */
    channelId: string;
    /** The ID of the forum topic where this comment exists in. */
    forumTopicId: number;
    /** The ID of the user who created this comment. */
    createdBy: string;
    /** The mentions of the comment. */
    mentions?: MentionsPayload;

    constructor(data: ForumTopicCommentPayload, public client: Client) {
        this.id = data.id;
        this.content = data.content;
        this.createdAt = new Date(data.createdAt);
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
        this.channelId = data.channelId;
        this.forumTopicId = data.forumTopicId;
        this.createdBy = data.createdBy;
        this.mentions = data.mentions || {};
    };
};