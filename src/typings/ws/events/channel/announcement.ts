import { AnnouncementCommentPayload, AnnouncementCommentReactionPayload, AnnouncementPayload, AnnouncementReactionPayload } from "../../../payloads";

export type AnnouncementCreatedPayload = {
    serverId: string;
    announcement: AnnouncementPayload;
};

export type AnnouncementUpdatedPayload = {
    serverId: string;
    announcement: AnnouncementPayload;
};

export type AnnouncementDeletedPayload = {
    serverId: string;
    announcement: AnnouncementPayload;
};

export type AnnouncementReactionCreatedPayload = {
    serverId: string;
    reaction: AnnouncementReactionPayload;
};

export type AnnouncementReactionDeletedPayload = {
    serverId: string;
    reaction: AnnouncementReactionPayload;
};

export type AnnouncementCommentCreatedPayload = {
    serverId: string;
    announcementComment: AnnouncementCommentPayload;
};

export type AnnouncementCommentUpdatedPayload = {
    serverId: string;
    announcementComment: AnnouncementCommentPayload;
};

export type AnnouncementCommentDeletedPayload = {
    serverId: string;
    announcementComment: AnnouncementCommentPayload;
};

export type AnnouncementCommentReactionCreatedPayload = {
    serverId: string;
    reaction: AnnouncementCommentReactionPayload;
};

export type AnnouncementCommentReactionDeletedPayload = {
    serverId: string;
    reaction: AnnouncementCommentReactionPayload;
};