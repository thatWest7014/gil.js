import { EmbedPayload } from "../payloads";

export interface CreateMessageBody extends UpdateMessageBody {
    isPrivate?: boolean;
    isSilent?: boolean;
    replyMessageIds?: string[];
};

export type UpdateMessageBody = {
    content?: string;
    hiddenLinkPreviewUrls?: string[];
    embeds?: EmbedPayload[];
};