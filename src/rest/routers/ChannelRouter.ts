import { BaseRouter } from "./BaseRouter";
import { 
    CreateChannelBody, 
    ServerChannelPayload, 
    UpdateChannelBody 
} from "../../typings";

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