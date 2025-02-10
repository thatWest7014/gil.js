export * from "./message";

export enum WebSocketEvent {
    ChatMessageCreated = "ChatMessageCreated",
    ChatMessageUpdated = "ChatMessageUpdated",
    ChatMessageDeleted = "ChatMessageDeleted",
};