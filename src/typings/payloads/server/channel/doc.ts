import { EmotePayload, MentionsPayload } from "../../message";

export type DocPayload = {
    id: number;
    serverId: string;
    groupId: string;
    channelId: string;
    title: string;
    content: string;
    mentions?: MentionsPayload;
    createdAt: string;
    createdBy: string;
    updatedAt?: string;
    updatedBy?: string;
};

export type DocReactionPayload = {
    channelId: string;
    createdBy: string;
    emote: EmotePayload;
    docId: number;
};

/** Comment */

export type DocCommentPayload = {
    id: number;
    content: string;
    createdAt: string;
    createdBy: string;
    updatedAt?: string;
    channelId: string;
    docId: number;
    mentions?: MentionsPayload;
};

export type DocCommentReactionPayload = {
    channelId: string;
    createdBy: string;
    emote: EmotePayload;
    docId: number;
    docCommentId: number;
};