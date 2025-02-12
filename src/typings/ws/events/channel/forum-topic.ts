import { ForumTopicReaction } from "../../../../structures/ForumTopicReaction";
import { ForumTopicCommentPayload, ForumTopicCommentReactionPayload, ForumTopicPayload } from "../../../payloads";

export type ForumTopicCreatedPayload = {
    serverId: string;
    forumTopic: ForumTopicPayload;
};

export type ForumTopicUpdatedPayload = {
    serverId: string;
    forumTopic: ForumTopicPayload;
};

export type ForumTopicDeletedPayload = {
    serverId: string;
    forumTopic: ForumTopicPayload;
};

export type ForumTopicPinnedPayload = {
    serverId: string;
    forumTopic: ForumTopicPayload;
};

export type ForumTopicUnpinnedPayload = {
    serverId: string;
    forumTopic: ForumTopicPayload;
};

/** Reactions */

export type ForumTopicReactionCreatedPayload = {
    serverId: string;
    reaction: ForumTopicReaction;
};

export type ForumTopicReactionDeletedPayload = {
    serverId: string;
    reaction: ForumTopicReaction;
};

/** Locked/Unlocked */

export type ForumTopicLockedPayload = {
    serverId: string;
    forumTopic: ForumTopicPayload;
};

export type ForumTopicUnlockedPayload = {
    serverId: string;
    forumTopic: ForumTopicPayload;
};

/** Comments */

export type ForumTopicCommentCreatedPayload = {
    serverId: string;
    forumTopicComment: ForumTopicCommentPayload;
};

export type ForumTopicCommentUpdatedPayload = {
    serverId: string;
    forumTopicComment: ForumTopicCommentPayload;
};

export type ForumTopicCommentDeletedPayload = {
    serverId: string;
    forumTopicComment: ForumTopicCommentPayload;
};

/** Comment Reactions */

export type ForumTopicCommentReactionCreatedPayload = {
    serverId: string;
    reaction: ForumTopicCommentReactionPayload;
};

export type ForumTopicCommentReactionDeletedPayload = {
    serverId: string;
    reaction: ForumTopicCommentReactionPayload;
};