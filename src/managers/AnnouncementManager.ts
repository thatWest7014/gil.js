import { CreateAnnouncementBody, UpdateAnnouncementBody, UpdateAnnouncementCommentBody } from "../rest/routers/AnnouncementRouter";
import { Announcement } from "../structures/announcement/Announcement";
import { AnnouncementComment } from "../structures/announcement/AnnouncementComment";
import { BaseManager } from "./BaseManager";

export class AnnouncementManager extends BaseManager<string, Announcement> {
    /**
     * Create an announcement in a Guilded channel.
     * @param channelId The ID of the Guilded channel.
     * @param data Announcement data.
     * @returns {Announcement} The announcement.
     */
    async create(channelId: string, data: CreateAnnouncementBody) {
        const { announcement } = await this.client.rest.announcements.create(channelId, data);
        return new Announcement(announcement, this.client);
    };

    /**
     * Get all announcements in a Guilded channel.
     * @param channelId The ID of the Guilded channel.
     * @returns {Announcement[]} The announcements.
     */
    async getAll(channelId: string) {
        const { announcements } = await this.client.rest.announcements.getAll(channelId);
        return announcements.map((announcement) => new Announcement(announcement, this.client));
    };

    /**
     * Get an announcement in a Guilded channel.
     * @param channelId The ID of the Guilded channel.
     * @param announcementId The ID of the announcement.
     * @returns {Announcement} The announcement.
     */
    async get(channelId: string, announcementId: string) {
        const { announcement } = await this.client.rest.announcements.get(channelId, announcementId);
        return new Announcement(announcement, this.client);
    };

    /**
     * Update an announcement in a Guilded channel.
     * @param channelId The ID of the Guilded channel.
     * @param announcementId The ID of the announcement.
     * @param data Announcement data.
     * @returns {Announcement} The announcement.
     */
    async update(channelId: string, announcementId: string, data: UpdateAnnouncementBody) {
        const { announcement } = await this.client.rest.announcements.update(channelId, announcementId, data);
        return new Announcement(announcement, this.client);
    };

    /**
     * Delete an announcement in a Guilded channel.
     * @param channelId The ID of the Guilded channel.
     * @param announcementId The ID of the announcement.
     */
    async delete(channelId: string, announcementId: string) {
        return await this.client.rest.announcements.delete(channelId, announcementId);
    };

    // Comments

    /**
     * Create a comment in a Guilded channel's announcement.
     * @param channelId The ID of the Guilded channel.
     * @param announcementId The ID of the announcement.
     * @param data Comment data.
     * @returns {AnnouncementComment} The comment.
     */
    async createComment(channelId: string, announcementId: string, data: CreateAnnouncementBody) {
        const { announcementComment: comment } = await this.client.rest.announcements.createComment(channelId, announcementId, data);
        return new AnnouncementComment(comment, this.client);
    };

    /**
     * Get all comments in a Guilded channel's announcement.
     * @param channelId The ID of the Guilded channel.
     * @param announcementId The ID of the announcement.
     * @returns {AnnouncementComment[]} The comments.
     */
    async getAllComments(channelId: string, announcementId: string) {
        const { announcementComments: comments } = await this.client.rest.announcements.getAllComments(channelId, announcementId);
        return comments.map((comment) => new AnnouncementComment(comment, this.client));
    };

    /**
     * Get a comment in a Guilded channel's announcement.
     * @param channelId The ID of the Guilded channel.
     * @param announcementId The ID of the announcement.
     * @param commentId The ID of the comment.
     * @returns {AnnouncementComment} The comment.
     */
    async getComment(channelId: string, announcementId: string, commentId: number) {
        const { announcementComment: comment } = await this.client.rest.announcements.getComment(channelId, announcementId, commentId);
        return new AnnouncementComment(comment, this.client);
    };

    /**
     * Update a comment in a Guilded channel's announcement.
     * @param channelId The ID of the Guilded channel.
     * @param announcementId The ID of the announcement.
     * @param commentId The ID of the comment.
     * @param data Comment data.
     * @returns {AnnouncementComment} The comment.
     */
    async updateComment(channelId: string, announcementId: string, commentId: number, data: UpdateAnnouncementCommentBody) {
        const { announcementComment: comment } = await this.client.rest.announcements.updateComment(channelId, announcementId, commentId, data);
        return new AnnouncementComment(comment, this.client);
    };

    /**
     * Delete a comment of a Guilded channel's announcement.
     * @param channelId The ID of the Guilded channel.
     * @param announcementId The ID of the announcement.
     * @param commentId The ID of the comment.
     */
    async deleteComment(channelId: string, announcementId: string, commentId: number) {
        return await this.client.rest.announcements.deleteComment(channelId, announcementId, commentId);
    };
};