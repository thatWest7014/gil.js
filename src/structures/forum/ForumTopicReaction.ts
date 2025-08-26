import { Client } from "../Client";
import { EmotePayload, ForumTopicReactionPayload } from "../../typings";

export class ForumTopicReaction {
    /** The ID of the channel where this reaction exists in. */
    channelId: string;
    /** The ID of the user who created the reaction. */
    createdBy: string;
    /** The emote of the reacton. */
    emote: EmotePayload;
    /** The ID of the forum topic where this reaction exists in. */
    forumTopicId: number;

    constructor(data: ForumTopicReactionPayload, public client: Client) {
        this.channelId = data.channelId;
        this.createdBy = data.createdBy;
        this.emote = data.emote;
        this.forumTopicId = data.forumTopicId;
    };
};