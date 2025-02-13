import { DocCommentReactionPayload, EmotePayload } from "../../typings";
import { Client } from "../Client";

export class DocCommentReaction {
    /** The ID of the channel where the reaction was created. */
    channelId: string;
    /** The ID of the user who created the reaction. */
    createdBy: string;
    /** The emote of the reaction. */
    emote: EmotePayload;
    /** The ID of the doc where the reaction was created. */
    docId: number;
    /** The ID of the doc comment where the reaction was created. */
    commentId: number;

    constructor(data: DocCommentReactionPayload, public client: Client) {
        this.channelId = data.channelId;
        this.createdBy = data.createdBy;
        this.emote = data.emote;
        this.docId = data.docId;
        this.commentId = data.docCommentId;
    };
};