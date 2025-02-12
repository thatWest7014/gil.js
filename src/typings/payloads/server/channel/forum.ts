import { EmotePayload, MentionsPayload } from "../../message";

export interface ForumTopicPayload extends ForumTopicSummaryPayload {
    content: string;
    mentions?: MentionsPayload;
};

export type ForumTopicSummaryPayload = {
    id: number;
    serverId: string;
    groupId: string;
    channelId: string;
    title: string;
    createdAt: string;
    createdBy: string;
    updatedAt?: string;
    bumpedAt?: string;
    isPinned?: boolean;
    isLocked?: boolean;
};

export type ForumTopicReactionPayload = {
    channelId: string;
    createdBy: string;
    emote: EmotePayload;
    forumTopicId: number;
};

/** Comment */

export type ForumTopicCommentPayload = {
    id: number;
    content: string;
    createdAt: string;
    updatedAt?: string;
    channelId: string;
    forumTopicId: number;
    createdBy: string;
    mentions?: MentionsPayload;
};

export type ForumTopicCommentReactionPayload = {
    channelId: string;
    createdBy: string;
    emote: EmotePayload;
    forumTopicId: number;
    forumTopicCommentId: number;
};