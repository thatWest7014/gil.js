import { Client } from "../../structures/Client";
import { Doc } from "../../structures/Doc";
import { DocComment } from "../../structures/DocComment";
import { 
    DocCommentCreatedPayload,
    DocCommentDeletedPayload,
    DocCommentUpdatedPayload,
    DocCreatedPayload, 
    DocDeletedPayload, 
    DocUpdatedPayload 
} from "../../typings/ws/events/channel/doc";

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