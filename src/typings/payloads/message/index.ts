import { EmbedPayload } from "./embed";
import { MentionsPayload } from "./mentions";

export * from "./embed";
export * from "./mentions";

export type MessagePayload = {
    id: string;
    type: MessageType;
    serverId?: string;
    groupId?: string;
    channelId: string;
    content?: string;
    hiddenLinkPreviewUrls?: string[];
    embeds?: EmbedPayload[];
    replyMessageIds?: string[];
    isPrivate?: boolean;
    isSilent?: boolean;
    isPinned?: boolean;
    mentions?: MentionsPayload;
    createdAt: string;
    createdBy: string;
    createdByWebhookId?: string;
    updatedAt?: string;
    deletedAt?: string;
};

export enum MessageType {
    Default = "default",
    System = "system",
};