import { Client } from "../../structures/Client";
import { Message } from "../../structures/Message";
import { MessageReaction } from "../../structures/MessageReaction";
import { 
    ChatMessageCreatedPayload, 
    ChatMessageDeletedPayload, 
    ChatMessageUpdatedPayload,
    ChannelMessageReactionCreated,
    ChannelMessageReactionManyDeleted,
    ChannelMessageReactionDeleted,
    ChannelMessagePinnedPayload,
    ChannelMessageUnpinnedPayload,
} from "../../typings";

export const created = (data: ChatMessageCreatedPayload, client: Client) => {
    const message = new Message(data.message, client);
    client.emit("messageCreated", message);
};

export const updated = (data: ChatMessageUpdatedPayload, client: Client) => {
    const message = new Message(data.message, client);
    client.emit("messageUpdated", message);
};

export const deleted = (data: ChatMessageDeletedPayload, client: Client) => {
    const message = new Message(data.message, client);
    client.emit("messageDeleted", message);
};

/** Reactions */

export const reactionCreated = (data: ChannelMessageReactionCreated, client: Client) => {
    const reaction = new MessageReaction(data.reaction, client);
    client.emit("messageReacted", reaction, data.serverId);
};

export const reactionDeleted = (data: ChannelMessageReactionDeleted, client: Client) => {
    const reaction = new MessageReaction({ ...data.reaction, deletedBy: data.deletedBy }, client);
    client.emit("messageUnreacted", reaction, data.serverId, 1);
};

export const reactionDeletedMany = (data: ChannelMessageReactionManyDeleted, client: Client) => {
    const reaction = new MessageReaction({
        channelId: data.channelId,
        messageId: data.messageId,
        deletedBy: data.deletedBy,
        emote: data.emote,
    }, client);

    client.emit("messageUnreacted", reaction, data.serverId, data.count);
};

export const pinned = (data: ChannelMessagePinnedPayload, client: Client) => {
    const message = new Message(data.message, client);
    client.emit("messagePinned", message);
};

export const unpinned = (data: ChannelMessageUnpinnedPayload, client: Client) => {
    const message = new Message(data.message, client);
    client.emit("messageUnpinned", message);
};