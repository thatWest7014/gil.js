import { DocCommentPayload, DocCommentReactionPayload, DocPayload, DocReactionPayload } from "../../../payloads";

export type DocCreatedPayload = {
    serverId: string;
    doc: DocPayload;
};

export type DocUpdatedPayload = {
    serverId: string;
    doc: DocPayload;
};

export type DocDeletedPayload = {
    serverId: string;
    doc: DocPayload;
};

/** Comment */

export type DocCommentCreatedPayload = {
    serverId: string;
    docComment: DocCommentPayload;
};

export type DocCommentDeletedPayload = {
    serverId: string;
    docComment: DocCommentPayload;
};

export type DocCommentUpdatedPayload = {
    serverId: string;
    docComment: DocCommentPayload;
};

/** Reaction */

export type DocReactionCreatedPayload = {
    serverId: string;
    reaction: DocReactionPayload;
};

export type DocReactionDeletedPayload = {
    serverId: string;
    reaction: DocReactionPayload;
};

/** Comment Reaction */

export type DocCommentReactionCreatedPayload = {
    serverId: string;
    reaction: DocCommentReactionPayload;
};

export type DocCommentReactionDeletedPayload = {
    serverId: string;
    reaction: DocCommentReactionPayload;
};