import { BaseRouter } from "./BaseRouter";
import { 
    AnnouncementCommentPayload, 
    AnnouncementPayload, 
    CreateAnnouncementBody, 
    CreateAnnouncementCommentBody, 
    UpdateAnnouncementBody, 
    UpdateAnnouncementCommentBody,
} from "../../typings";

export class AnnouncementRouter extends BaseRouter {
    async create(channelId: string, body: CreateAnnouncementBody) {
        return await this.rest.post<{ announcement: AnnouncementPayload }, CreateAnnouncementBody>(`/channels/${channelId}/announcements`, body);
    };

    async getAll(channelId: string) {
        return await this.rest.get<{ announcements: AnnouncementPayload[] }>(`/channels/${channelId}/announcements`);
    };

    async get(channelId: string, announcementId: string) {
        return await this.rest.get<{ announcement: AnnouncementPayload }>(`/channels/${channelId}/announcements/${announcementId}`);
    };

    async update(channelId: string, announcementId: string, body: UpdateAnnouncementBody) {
        return await this.rest.patch<{ announcement: AnnouncementPayload }, UpdateAnnouncementBody>(`/channels/${channelId}/announcements/${announcementId}`, body);
    };

    async delete(channelId: string, announcementId: string) {
        return await this.rest.delete(`/channels/${channelId}/announcements/${announcementId}`);
    };

    // Comments

    async createComment(channelId: string, announcementId: string, body: CreateAnnouncementCommentBody) {
        return await this.rest.post<{ announcementComment: AnnouncementCommentPayload }, CreateAnnouncementCommentBody>(`/channels/${channelId}/announcements/${announcementId}/comments`, body);
    };

    async getAllComments(channelId: string, announcementId: string) {
        return await this.rest.get<{ announcementComments: AnnouncementCommentPayload[] }>(`/channels/${channelId}/announcements/${announcementId}/comments`);
    };

    async getComment(channelId: string, announcementId: string, announcementCommentId: number) {
        return await this.rest.get<{ announcementComment: AnnouncementCommentPayload }>(`/channels/${channelId}/announcements/${announcementId}/comments/${announcementCommentId}`);
    };

    async updateComment(channelId: string, announcementId: string, announcementCommentId: number, body: UpdateAnnouncementCommentBody) {
        return await this.rest.patch<{ announcementComment: AnnouncementCommentPayload }, UpdateAnnouncementCommentBody>(`/channels/${channelId}/announcements/${announcementId}/comments/${announcementCommentId}`, body);
    };

    async deleteComment(channelId: string, announcementId: string, announcementCommentId: number) {
        return await this.rest.delete(`/channels/${channelId}/announcements/${announcementId}/comments/${announcementCommentId}`);
    };
};