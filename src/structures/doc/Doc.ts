import { Client } from "../Client";
import { DocPayload, MentionsPayload } from "../../typings";

export class Doc {
    /** The ID of the doc. */
    id: number;
    /** The ID of the server where the doc was created. */
    serverId: string;
    /** The ID of the group where the doc exists in. */
    groupId: string;
    /** The ID of the channel where the doc exists in. */
    channelId: string;
    /** The title of the doc. */
    title: string;
    /** The content of the doc. */
    content: string;
    /** The mentions in the doc. */
    mentions?: MentionsPayload;
    /** The date of the doc's creation. */
    createdAt: Date;
    /** The ID of the user who created the doc. */
    createdBy: string;
    /** The date when the doc was updated. */
    updatedAt?: Date;
    /** The ID of the user who updated the doc. */
    updatedBy?: string;
    
    constructor(data: DocPayload, public client: Client) {
        this.id = data.id;
        this.serverId = data.serverId;
        this.groupId = data.groupId;
        this.channelId = data.channelId;
        this.title = data.title;
        this.content = data.content;
        this.mentions = data.mentions || {};
        this.createdAt = new Date(data.createdAt);
        this.createdBy = data.createdBy;
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
        this.updatedBy = data.updatedBy;
    };
};