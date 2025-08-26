import { Embed } from "../structures/Embed";
import { Message } from "../structures/Message";
import { UpdateMessageBody } from "../typings";
import { BaseManager } from "./BaseManager";

export type SendMessageOptions = {
    content?: string;
    embeds?: Embed[];
    isPrivate?: boolean;
    isSilent?: boolean;
    replyMessageIds?: string[];
    hiddenLinkPreviewUrls?: string[];
};

export class MessageManager extends BaseManager<string, Message> {
    /**
     * Create a Guilded message.
     * @param channelId The ID of the Guilded channel.
     * @param data Message data.
     * @returns {Message} The message.
     */
    async create(channelId: string, data: SendMessageOptions) {
        const { message } = await this.client.rest.messages.create(channelId, {
            ...data,
            embeds: data.embeds ? data.embeds.map((embed) => embed.toJSON()) : undefined,
        });
        return new Message(message, this.client);
    };

    /**
     * Fetch all of the messages from a Guilded channel.
     * @param channelId The ID of the Guilded channel.
     * @returns {Message[]} The messages.
     */
    async fetchAll(channelId: string) {
        const { messages } = await this.client.rest.messages.getAll(channelId);
        return messages.map((message) => new Message(message, this.client));
    };

    /**
     * Fetch a message from Guilded channel.
     * @param channelId The ID of the Guilded channel.
     * @param forced Whether to forcefully fetch the message from the API, or first attempt to find it in the cache.
     * @returns {Message} The message.
     */
    async fetch(channelId: string, messageId: string, forced: boolean = false) {
        const cached = this.cache.get(messageId);
        if (cached && !forced) return cached;
        const { message } = await this.client.rest.messages.get(channelId, messageId);
        return new Message(message, this.client);
    };

    /**
     * Update a Guilded message.
     * @param channelId The ID of the Guilded channel.
     * @param messageId The ID of the Guilded message.
     * @param data Message data.
     * @returns {Message} The message.
     */
    async update(channelId: string, messageId: string, data: UpdateMessageBody) {
        const { message } = await this.client.rest.messages.update(channelId, messageId, data);
        return new Message(message, this.client);
    };

    /**
     * Delete a Guilded message.
     * @param channelId The ID of the Guilded channel.
     * @param messageId The ID of the Guilded message.
     */
    async delete(channelId: string, messageId: string) {
        await this.client.rest.messages.delete(channelId, messageId);
    };

    /**
     * Pin a Guilded message.
     * @param channelId The ID of the Guilded channel.
     * @param messageId The ID of the Guilded message.
     */
    async pin(channelId: string, messageId: string) {
        await this.client.rest.messages.pin(channelId, messageId);
    };

    /**
     * Unpin a Guilded message.
     * @param channelId The ID of the Guilded channel.
     * @param messageId The ID of the Guilded message.
     */
    async unpin(channelId: string, messageId: string) {
        await this.client.rest.messages.unpin(channelId, messageId);
    };
};