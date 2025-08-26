import { Announcement } from "../../structures/announcement/Announcement";
import { AnnouncementComment } from "../../structures/announcement/AnnouncementComment";
import { AnnouncementCommentReaction } from "../../structures/announcement/AnnouncementCommentReaction";
import { AnnouncementReaction } from "../../structures/announcement/AnnouncementReaction";
import { Client } from "../../structures/Client";
import { 
    AnnouncementCommentCreatedPayload,
    AnnouncementCommentDeletedPayload,
    AnnouncementCommentReactionCreatedPayload,
    AnnouncementCommentReactionDeletedPayload,
    AnnouncementCommentUpdatedPayload,
    AnnouncementCreatedPayload, 
    AnnouncementDeletedPayload, 
    AnnouncementReactionCreatedPayload, 
    AnnouncementReactionDeletedPayload, 
    AnnouncementUpdatedPayload 
} from "../../typings";

export const created = (data: AnnouncementCreatedPayload, client: Client) => {
    const announcement = new Announcement(data.announcement, client);
    client.emit("announcementCreated", announcement);
};

export const updated = (data: AnnouncementUpdatedPayload, client: Client) => {
    const announcement = new Announcement(data.announcement, client);
    client.emit("announcementUpdated", announcement);
};

export const deleted = (data: AnnouncementDeletedPayload, client: Client) => {
    const announcement = new Announcement(data.announcement, client);
    client.emit("announcementDeleted", announcement);
};

export const reactionCreated = (data: AnnouncementReactionCreatedPayload, client: Client) => {
    const reaction = new AnnouncementReaction(data.reaction, client);
    client.emit("announcementReacted", reaction);
};

export const reactionDeleted = (data: AnnouncementReactionDeletedPayload, client: Client) => {
    const reaction = new AnnouncementReaction(data.reaction, client);
    client.emit("announcementUnreacted", reaction);
};

export const commentCreated = (data: AnnouncementCommentCreatedPayload, client: Client) => {
    const comment = new AnnouncementComment(data.announcementComment, client);
    client.emit("announcementCommentCreated", comment);
};

export const commentUpdated = (data: AnnouncementCommentUpdatedPayload, client: Client) => {
    const comment = new AnnouncementComment(data.announcementComment, client);
    client.emit("announcementCommentUpdated", comment);
};

export const commentDeleted = (data: AnnouncementCommentDeletedPayload, client: Client) => {
    const comment = new AnnouncementComment(data.announcementComment, client);
    client.emit("announcementCommentDeleted", comment);
};

export const commentReactionCreated = (data: AnnouncementCommentReactionCreatedPayload, client: Client) => {
    const reaction = new AnnouncementCommentReaction(data.reaction, client);
    client.emit("announcementCommentReacted", reaction);
};

export const commentReactionDeleted = (data: AnnouncementCommentReactionDeletedPayload, client: Client) => {
    const reaction = new AnnouncementCommentReaction(data.reaction, client);
    client.emit("announcementCommentUnreacted", reaction);
};