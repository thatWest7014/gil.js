export * from "./message";
export * from "./server";
export * from "./member";
export * from "./channel";
export * from "./webhook";

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
    ServerMemberUpdated = "ServerMemberUpdated",
    ServerRolesUpdated = "ServerRolesUpdated",
    ServerChannelCreated = "ServerChannelCreated",
    ServerChannelUpdated = "ServerChannelUpdated",
    ServerChannelDeleted = "ServerChannelDeleted",
    ServerMemberSocialLinkCreated = "ServerMemberSocialLinkCreated",
    ServerMemberSocialLinkUpdated = "ServerMemberSocialLinkUpdated",
    ServerMemberSocialLinkDeleted = "ServerMemberSocialLinkDeleted",
    ServerWebhookCreated = "ServerWebhookCreated",
    ServerWebhookUpdated = "ServerWebhookUpdated",
};