import { MessagePayload } from "../../payloads/message";

export type ChatMessageCreatedPayload = {
    serverId: string;
    message: MessagePayload;
};

export type ChatMessageUpdatedPayload = {
    serverId: string;
    message: MessagePayload;
};

export type ChatMessageDeletedPayload = {
    serverId: string;
    message: MessagePayload;
};