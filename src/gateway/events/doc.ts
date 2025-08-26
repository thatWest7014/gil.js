import { Client } from "../../structures/Client";
import { Doc } from "../../structures/doc/Doc";
import { DocComment } from "../../structures/doc/DocComment";
import { DocCommentReaction } from "../../structures/doc/DocCommentReaction";
import { DocReaction } from "../../structures/doc/DocReaction";
import { 
    DocCommentCreatedPayload,
    DocCommentDeletedPayload,
    DocCommentReactionCreatedPayload,
    DocCommentReactionDeletedPayload,
    DocCommentUpdatedPayload,
    DocCreatedPayload, 
    DocDeletedPayload,
    DocReactionCreatedPayload,
    DocReactionDeletedPayload,
    DocUpdatedPayload 
} from "../../typings";

export const created = (data: DocCreatedPayload, client: Client) => {
    const doc = new Doc(data.doc, client);
    client.emit("docCreated", doc);
};

export const updated = (data: DocUpdatedPayload, client: Client) => {
    const doc = new Doc(data.doc, client);
    client.emit("docCreated", doc);
};

export const deleted = (data: DocDeletedPayload, client: Client) => {
    const doc = new Doc(data.doc, client);
    client.emit("docDeleted", doc);
};

export const commentCreated = (data: DocCommentCreatedPayload, client: Client) => {
    const comment = new DocComment(data.docComment, client);
    client.emit("docCommentCreated", comment);
};

export const commentDeleted = (data: DocCommentDeletedPayload, client: Client) => {
    const comment = new DocComment(data.docComment, client);
    client.emit("docCommentDeleted", comment);
};

export const commentUpdated = (data: DocCommentUpdatedPayload, client: Client) => {
    const comment = new DocComment(data.docComment, client);
    client.emit("docCommentUpdated", comment);
};

/** Reaction */

export const reactionCreated = (data: DocReactionCreatedPayload, client: Client) => {
    const reaction = new DocReaction(data.reaction, client);
    client.emit("docReacted", reaction, data.serverId);
};

export const reactionDeleted = (data: DocReactionDeletedPayload, client: Client) => {
    const reaction = new DocReaction(data.reaction, client);
    client.emit("docUnreacted", reaction, data.serverId);
};

/** Comment Reaction */

export const commentReactionCreated = (data: DocCommentReactionCreatedPayload, client: Client) => {
    const reaction = new DocCommentReaction(data.reaction, client);
    client.emit("docCommentReacted", reaction, data.serverId);
};

export const commentReactionDeleted = (data: DocCommentReactionDeletedPayload, client: Client) => {
    const reaction = new DocCommentReaction(data.reaction, client);
    client.emit("docCommentUnreacted", reaction, data.serverId);
};