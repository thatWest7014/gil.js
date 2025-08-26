import { Client } from "./Client";
import { 
    EmotePayload, 
    MessageReactionPayload 
} from "../typings";

export class MessageReaction {
    /** The ID of the channel where this reaction was created. */
    channelId: string;
    /** The ID of the user who created the reaction (if applicable) */
    createdBy?: string;
    /** The emote of the reaction. */
    emote?: EmotePayload | undefined;
    /** The ID of the message where this reaction was created. */
    messageId: string;

    /** The ID of the user who deleted the reaction (if applicable) */
    deletedBy?: string;

    constructor(data: MessageReactionPayload, public client: Client) {
        this.channelId = data.channelId;
        this.createdBy = data.createdBy;
        this.emote = data.emote;
        this.messageId = data.messageId;
        this.deletedBy = data.deletedBy;
    };
};