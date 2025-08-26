import { BaseRouter } from "./BaseRouter";
import { 
    CreateMessageBody, 
    MessagePayload, 
    UpdateMessageBody 
} from "../../typings";

export class MessageRouter extends BaseRouter {
    async create(channelId: string, data: CreateMessageBody) {
        return this.rest.post<{ message: MessagePayload }, CreateMessageBody>(`/channels/${channelId}/messages`, data);
    };

    async getAll(channelId: string) {
        return this.rest.get<{ messages: MessagePayload[] }>(`/channels/${channelId}/messages`);
    };

    async get(channelId: string, messageId: string) {
        return this.rest.get<{ message: MessagePayload }>(`/channels/${channelId}/messages/${messageId}`);
    };

    async update(channelId: string, messageId: string, data: UpdateMessageBody) {
        return this.rest.put<{ message: MessagePayload }, UpdateMessageBody>(`/channels/${channelId}/messages/${messageId}`, data);
    };

    async delete(channelId: string, messageId: string) {
        return this.rest.delete(`/channels/${channelId}/messages/${messageId}`);
    };

    async pin(channelId: string, messageId: string) {
        return this.rest.post(`/channels/${channelId}/messages/${messageId}/pin`);
    };

    async unpin(channelId: string, messageId: string) {
        return this.rest.delete(`/channels/${channelId}/messages/${messageId}/pin`);
    };
};