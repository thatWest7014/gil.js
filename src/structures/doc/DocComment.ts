import { Client } from "../Client";
import { DocCommentPayload, MentionsPayload } from "../../typings";

export class DocComment {
    /** The ID of the doc comment. */
    id: number;
    /** The content of the doc comment. */
    content: string;
    /** The date of the doc comment's creation. */
    createdAt: Date;
    /** The ID of the user who created the doc comment. */
    createdBy: string;
    /** The date when the doc was updated. */
    updatedAt?: Date;
    /** The ID of the channel where the doc comment exists in. */
    channelId: string;
    /** The ID of the doc where the doc comment exists in. */
    docId: number;
    /** The mentions of the doc comment. */
    mentions?: MentionsPayload;

    constructor(data: DocCommentPayload, public client: Client) {
        this.id = data.id;
        this.content = data.content;
        this.createdAt = new Date(data.createdAt);
        this.createdBy = data.createdBy;
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
        this.channelId = data.channelId;
        this.docId = data.docId;
        this.mentions = data.mentions || {};
    };
};