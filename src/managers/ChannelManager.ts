import { Channel } from "../structures/channel/Channel";
import { CreateChannelBody, UpdateChannelBody } from "../typings";
import { BaseManager } from "./BaseManager";

export class ChannelManager extends BaseManager<string, Channel> {
    /**
     * Create a Guilded channel.
     * @param data Channel data.
     * @returns {Channel} The channel.
     */
    async create(data: CreateChannelBody): Promise<Channel> {
        const { channel } = await this.client.rest.channels.create(data);
        return new Channel(channel, this.client);
    };

    /**
     * Get a Guilded channel.
     * @param {string} channelId The ID of the Guilded channel.
     * @param {boolean} forced Whether to forcefully fetch the channel from the API, or first attempt to find it in the cache.
     * @returns {Channel} The channel.
     */
    async fetch(channelId: string, forced: boolean = false): Promise<Channel> {
        const cached = this.cache.get(channelId);
        if (cached && !forced) return cached;
        const { channel } = await this.client.rest.channels.get(channelId);
        return new Channel(channel, this.client);
    };

    /**
     * Update a Guilded channel.
     * @param data Channel data.
     * @returns {Channel} The channel.
     */
    async update(channelId: string, data: UpdateChannelBody): Promise<Channel> {
        const { channel } = await this.client.rest.channels.update(channelId, data);
        return new Channel(channel, this.client);
    };

    /**
     * Delete a Guilded channel.
     * @param channelId The ID of the Guilded channel..
     */
    async delete(channelId: string) {
        await this.client.rest.channels.delete(channelId);
    };

    /**
     * Archive a Guilded channel.
     * @param channelId The ID of the Guilded channel..
     */
    async archive(channelId: string) {
        await this.client.rest.channels.archive(channelId);
    };

    /**
     * Restore an archived Guilded channel.
     * @param channelId The ID of the Guilded channel..
     */
    async restore(channelId: string) {
        await this.client.rest.channels.restore(channelId);
    };
};