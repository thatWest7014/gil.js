import { ClientUserPayload } from "../payloads/user";
export * from "./events";

export type WebSocketPayload = {
    /** The operation code of the message. */
    op: WebSocketOpCode;
    /** The data of the message. */
    d?: object;
    /** The ID of the message. */
    s?: string;
    /** The name of the event. */
    t?: string;
};

export enum WebSocketOpCode {
    Event = 0,
    Welcome = 1,
    Resume = 2,
};

export type WebSocketWelcomeData = {
    heartbeatIntervalMs: number;
    lastMessageId: string;
    botId: string;
    user: ClientUserPayload;
};