export * from "./message";
export * from "./server";
export * from "./member";

export enum WebSocketEvent {
    BotServerMembershipCreated = "BotServerMembershipCreated",
    BotServerMembershipDeleted = "BotServerMembershipDeleted",
    ChatMessageCreated = "ChatMessageCreated",
    ChatMessageUpdated = "ChatMessageUpdated",
    ChatMessageDeleted = "ChatMessageDeleted",
    ServerMemberJoined = "ServerMemberJoined",
    ServerMemberRemoved = "ServerMemberRemoved",
    ServerMemberBanned = "ServerMemberBanned",
    ServerMemberUnbanned = "ServerMemberUnbanned",
};