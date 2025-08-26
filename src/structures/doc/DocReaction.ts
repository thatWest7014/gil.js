import { Client } from "../Client";
import { DocReactionPayload, EmotePayload } from "../../typings";

export class DocReaction {
    /** The ID of the channel where this reaction was created. */
    channelId: string;
    /** The ID of the user who created the reaction. */
    createdBy: string;
    /** The emote of the reaction. */
    emote: EmotePayload;
    /** The ID of the doc where this reaction was created. */
    docId: number;

    constructor(data: DocReactionPayload, public client: Client) {
        this.channelId = data.channelId;
        this.createdBy = data.createdBy;
        this.emote = data.emote;
        this.docId = data.docId;
    };
};