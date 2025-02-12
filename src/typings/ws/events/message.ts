import { EmotePayload, MessagePayload, MessageReactionPayload } from "../../payloads/message";

export type ChatMessageCreatedPayload = {
    serverId: string;
    message: MessagePayload;
};

export type ChatMessageUpdatedPayload = {
    serverId: string;
    message: MessagePayload;
};

export type ChatMessageDeletedPayload = {
    serverId: string;
    message: MessagePayload;
};

/** Reactions */

export type ChannelMessageReactionCreated = {
    serverId: string;
    reaction: MessageReactionPayload;
};

export type ChannelMessageReactionDeleted = {
    serverId: string;
    deletedBy: string;
    reaction: MessageReactionPayload;
};

export type ChannelMessageReactionManyDeleted = {
    serverId: string;
    channelId: string;
    messageId: string;
    deletedBy: string;
    count: number;
    emote?: EmotePayload;
};