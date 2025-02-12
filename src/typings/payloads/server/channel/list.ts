import { MentionsPayload } from "../../message";

export interface ListItemPayload extends ListItemSummaryPayload {
    groupId: string;
};

export type ListItemSummaryPayload = {
    id: string;
    serverId: string;
    channelId: string;
    message: string;
    mentions?: MentionsPayload;
    createdAt: string;
    createdBy: string;
    createdByWebhookId?: string;
    updatedAt?: string;
    updatedBy?: string;
    parentListItemId?: string;
    completedAt?: string;
    completedBy?: string;
    note: ListItemNotePayload;
};

export interface ListItemNotePayload extends ListItemNoteSummaryPayload {
    mentions?: MentionsPayload;
    content: string;
};

export type ListItemNoteSummaryPayload = {
    createdAt: string;
    createdBy: string;
    updatedAt?: string;
    updatedBy?: string;
};