import { EmotePayload, MentionsPayload } from "../../message";

export type AnnouncementPayload = {
    id: string;
    serverId: string;
    groupId: string;
    channelId: string;
    createdAt: string;
    createdBy: string;
    content: string;
    mentions?: MentionsPayload;
    title: string;
};

export type AnnouncementReactionPayload = {
    channelId: string;
    createdBy: string;
    emote: EmotePayload;
    announcementId: string;
};

export type AnnouncementCommentPayload = {
    id: number;
    content: string;
    createdAt: string;
    updatedAt?: string;
    createdBy: string;
    channelId: string;
    announcementId: string;
    mentions?: MentionsPayload;
};

export type AnnouncementCommentReactionPayload = {
    channelId: string;
    createdBy: string;
    emote: EmotePayload;
    announcementId: string;
    announcementCommentId: number;
};