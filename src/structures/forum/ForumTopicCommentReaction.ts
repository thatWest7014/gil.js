import { EmotePayload, ForumTopicCommentReactionPayload } from "../../typings";
import { Client } from "../Client";

export class ForumTopicCommentReaction {
    /** The ID of the channel where the reaction was created. */
    channelId: string;
    /** The ID of the user who created the reaction. */
    createdBy: string;
    /** The emote of the reaction. */
    emote: EmotePayload;
    /** The ID of the forum topic where the reaction was created. */
    topicId: number;
    /** The ID of the forum topic comment where the reaction was created. */
    commentId: number;

    constructor(data: ForumTopicCommentReactionPayload, public client: Client) {
        this.channelId = data.channelId;
        this.createdBy = data.createdBy;
        this.emote = data.emote;
        this.topicId = data.forumTopicId;
        this.commentId = data.forumTopicCommentId;
    };
};