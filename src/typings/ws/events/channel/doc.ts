import { DocCommentPayload, DocPayload } from "../../../payloads";

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