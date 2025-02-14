import { ServerChannelPayload, ServerChannelType, ServerChannelVisibility } from "../../typings";
import { BaseRouter } from "./BaseRouter";

export type CreateChannelBody = {
    /** The name of the channel. */
    name: string;
    /** The topic of the channel. */
    topic?: string;
    /** The visibility of the channel. */
    visibility?: ServerChannelVisibility;
    /** The type of the channel. */
    type: ServerChannelType;
    /** The ID of the server where this channel exists in. */
    serverId?: string;
    /** The ID of the group where this channel exists in. */
    groupId?: string;
    /** The ID of the category where this channel exists in. */
    categoryId?: number;
    /** The ID of the parent channel where this channel exists in. (applicable to chat, voice and stream channels) */
    parentId?: string;
    /** The ID of the message that this channel was created from. */
    messageId?: string;
};

export type UpdateChannelBody = {
    /** The name of the channel. */
    name: string;
    /** The topic of the channel. */
    topic?: string;
    /** The visibility of the channel. */
    visibility?: ServerChannelVisibility;
    /** The priority of the channel. */
    priority?: number;
};

export class ChannelRouter extends BaseRouter {
    async create(data: CreateChannelBody) {
        return await this.rest.post<{ channel: ServerChannelPayload }, CreateChannelBody>(`/channels`, data);
    };

    async get(channelId: string) {
        return await this.rest.get<{ channel: ServerChannelPayload }>(`/channels/${channelId}`);
    };

    async update(channelId: string, data: UpdateChannelBody) {
        return await this.rest.patch<{ channel: ServerChannelPayload }, UpdateChannelBody>(`/channels/${channelId}`, data);
    };

    async delete(channelId: string) {
        return await this.rest.delete(`/channels/${channelId}`);
    };

    async archive(channelId: string) {
        return await this.rest.put(`/channels/${channelId}/archive`);
    };

    async restore(channelId: string) {
        return await this.rest.delete(`/channels/${channelId}/archive`);
    };
};