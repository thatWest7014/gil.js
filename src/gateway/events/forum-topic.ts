import { Client } from "../../structures/Client";
import { ForumTopic } from "../../structures/forum/ForumTopic";
import { ForumTopicComment } from "../../structures/forum/ForumTopicComment";
import { ForumTopicCommentReaction } from "../../structures/forum/ForumTopicCommentReaction";
import { ForumTopicReaction } from "../../structures/forum/ForumTopicReaction";
import { 
    ForumTopicCommentCreatedPayload,
    ForumTopicCommentDeletedPayload,
    ForumTopicCommentReactionCreatedPayload,
    ForumTopicCommentReactionDeletedPayload,
    ForumTopicCommentUpdatedPayload,
    ForumTopicCreatedPayload, 
    ForumTopicDeletedPayload, 
    ForumTopicLockedPayload, 
    ForumTopicPinnedPayload, 
    ForumTopicReactionCreatedPayload, 
    ForumTopicReactionDeletedPayload, 
    ForumTopicUnlockedPayload, 
    ForumTopicUnpinnedPayload, 
    ForumTopicUpdatedPayload,
} from "../../typings";

export const created = (data: ForumTopicCreatedPayload, client: Client) => {
    const topic = new ForumTopic(data.forumTopic, client);
    client.emit("forumTopicCreated", topic);
};

export const updated = (data: ForumTopicUpdatedPayload, client: Client) => {
    const topic = new ForumTopic(data.forumTopic, client);
    client.emit("forumTopicUpdated", topic);
};

export const deleted = (data: ForumTopicDeletedPayload, client: Client) => {
    const topic = new ForumTopic(data.forumTopic, client);
    client.emit("forumTopicDeleted", topic);
};

export const pinned = (data: ForumTopicPinnedPayload, client: Client) => {
    const topic = new ForumTopic(data.forumTopic, client);
    client.emit("forumTopicPinned", topic);
};

export const unpinned = (data: ForumTopicUnpinnedPayload, client: Client) => {
    const topic = new ForumTopic(data.forumTopic, client);
    client.emit("forumTopicUnpinned", topic);
};

export const reactionCreated = (data: ForumTopicReactionCreatedPayload, client: Client) => {
    const reaction = new ForumTopicReaction(data.reaction, client);
    client.emit("forumTopicReacted", reaction);
};

export const reactionDeleted = (data: ForumTopicReactionDeletedPayload, client: Client) => {
    const reaction = new ForumTopicReaction(data.reaction, client);
    client.emit("forumTopicUnreacted", reaction);
};

export const locked = (data: ForumTopicLockedPayload, client: Client) => {
    const topic = new ForumTopic(data.forumTopic, client);
    client.emit("forumTopicLocked", topic);
};

export const unlocked = (data: ForumTopicUnlockedPayload, client: Client) => {
    const topic = new ForumTopic(data.forumTopic, client);
    client.emit("forumTopicUnlocked", topic);
};

export const commentCreated = (data: ForumTopicCommentCreatedPayload, client: Client) => {
    const comment = new ForumTopicComment(data.forumTopicComment, client);
    client.emit("forumTopicCommentCreated", comment);
};

export const commentUpdated = (data: ForumTopicCommentUpdatedPayload, client: Client) => {
    const comment = new ForumTopicComment(data.forumTopicComment, client);
    client.emit("forumTopicCommentCreated", comment);
};

export const commentDeleted = (data: ForumTopicCommentDeletedPayload, client: Client) => {
    const comment = new ForumTopicComment(data.forumTopicComment, client);
    client.emit("forumTopicCommentCreated", comment);
};

export const commentReactionCreated = (data: ForumTopicCommentReactionCreatedPayload, client: Client) => {
    const reaction = new ForumTopicCommentReaction(data.reaction, client);
    client.emit("forumTopicCommentReact", reaction, data.serverId);
};

export const commentReactionDeleted = (data: ForumTopicCommentReactionDeletedPayload, client: Client) => {
    const reaction = new ForumTopicCommentReaction(data.reaction, client);
    client.emit("forumTopicCommentUnreact", reaction, data.serverId);
};