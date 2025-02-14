import { CreateAnnouncementBody, UpdateAnnouncementCommentBody } from "../../rest/routers/AnnouncementRouter";
import { AnnouncementPayload, MentionsPayload } from "../../typings";
import { Client } from "../Client";

export class Announcement {
    id: string;
    serverId: string;
    groupId: string;
    channelId: string;
    createdAt: Date;
    createdBy: string;
    content: string;
    mentions?: MentionsPayload;
    title: string;

    constructor(data: AnnouncementPayload, public client: Client) {
        this.id = data.id;
        this.serverId = data.serverId;
        this.groupId = data.groupId;
        this.channelId = data.channelId;
        this.createdAt = new Date(data.createdAt);
        this.createdBy = data.createdBy;
        this.content = data.content;
        this.mentions = data.mentions ?? {};
        this.title = data.title;
    };

    /**
     * Create a comment in a Guilded channel's announcement.
     * @param data Comment data.
     * @returns {AnnouncementComment} The comment.
     */
    async createComment(data: CreateAnnouncementBody) {
        return await this.client.announcements.createComment(this.channelId, this.id, data);
    };

    /**
     * Get all comments in a Guilded channel's announcement.
     * @param channelId The ID of the Guilded channel.
     * @param announcementId The ID of the announcement.
     * @returns {AnnouncementComment[]} The comments.
     */
    async getAllComments() {
        return await this.client.announcements.getAllComments(this.channelId, this.id);
    };

    /**
     * Get a comment in a Guilded channel's announcement.
     * @param channelId The ID of the Guilded channel.
     * @param commentId The ID of the comment.
     * @returns {AnnouncementComment} The comment.
     */
    async getComment(commentId: number) {
        return await this.client.announcements.getComment(this.channelId, this.id, commentId);
    };

    /**
     * Update a comment in a Guilded channel's announcement.
     * @param commentId The ID of the comment.
     * @param data Comment data.
     * @returns {AnnouncementComment} The comment.
     */
    async updateComment(commentId: number, data: UpdateAnnouncementCommentBody) {
        return await this.client.announcements.updateComment(this.channelId, this.id, commentId, data);
    };

    /**
     * Delete a comment of a Guilded channel's announcement.
     * @param commentId The ID of the comment.
     */
    async deleteComment(commentId: number) {
        return await this.client.rest.announcements.deleteComment(this.channelId, this.id, commentId);
    };
};