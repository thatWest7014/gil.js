import { Client } from "./Client";
import { 
    ListItemNotePayload, 
    ListItemPayload, 
    MentionsPayload 
} from "../typings";

export class ListItem {
    /** The ID of the list item. */
    id: string;
    /** The ID of the server where the list item exists in. */
    serverId: string;
    /** The ID of the group where the list item exists in */
    groupId: string;
    /** The ID of the channel where the list item exists in */
    channelId: string;
    /** The message of the list item. */
    message: string;
    /** The mentions of the list item. */
    mentions?: MentionsPayload;
    /** The creation date of the list item. */
    createdAt: Date;
    /** The ID of the user who created the list item. */
    createdBy: string;
    /** The ID of the webhook who created the list item. */
    createdByWebhookId?: string;
    /** The date when the list item was updated. */
    updatedAt?: Date;
    /** The ID of the user who updated the list item. */
    updatedBy?: string;
    /** The ID of the parent list item of this list item. */
    parentId?: string;
    /** The date when the list item was completed. */
    completedAt?: Date;
    /** The ID of the user who completed the list item. */
    completedBy?: string;
    /** The note of the list item. */
    note?: ListItemNote;
    
    constructor(data: ListItemPayload, public client: Client) {
        this.id = data.id;
        this.serverId = data.serverId;
        this.groupId = data.groupId;
        this.channelId = data.channelId;
        this.message = data.message;
        this.mentions = data.mentions;
        this.createdAt = new Date(data.createdAt);
        this.createdBy = data.createdBy;
        this.createdByWebhookId = data.createdByWebhookId;
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
        this.updatedBy = data.updatedBy;
        this.parentId = data.parentListItemId;
        this.completedAt = data.completedAt ? new Date(data.completedAt) : undefined;
        this.note = data.note ? new ListItemNote(data.note, client) : undefined;
    };
};

export class ListItemNote {
    createdAt: Date;
    createdBy: string;
    updatedAt?: Date;
    updatedBy?: string;
    mentions?: MentionsPayload;
    content: string;

    constructor(data: ListItemNotePayload, public client: Client) {
        this.createdAt = new Date(data.createdAt);
        this.createdBy = data.createdBy;
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
        this.updatedBy = data.updatedBy;
        this.mentions = data.mentions;
        this.content = data.content;
    };
};