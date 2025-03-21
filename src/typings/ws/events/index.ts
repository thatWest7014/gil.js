export * from "./message";
export * from "./server";
export * from "./member";
export * from "./channel";
export * from "./webhook";
export * from "./group";
export * from "./user";
export * from "./category";

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
    DocCreated = "DocCreated",
    DocUpdated = "DocUpdated",
    DocDeleted = "DocDeleted",
    DocCommentCreated = "DocCommentCreated",
    DocCommentDeleted = "DocCommentDeleted",
    DocCommentUpdated = "DocCommentUpdated",
    CalendarEventCreated = "CalendarEventCreated",
    CalendarEventUpdated = "CalendarEventUpdated",
    CalendarEventDeleted = "CalendarEventDeleted",
    ForumTopicCreated = "ForumTopicCreated",
    ForumTopicUpdated = "ForumTopicUpdated",
    ForumTopicDeleted = "ForumTopicDeleted",
    ForumTopicPinned = "ForumTopicPinned",
    ForumTopicUnpinned = "ForumTopicUnpinned",
    ForumTopicReactionCreated = "ForumTopicReactionCreated",
    ForumTopicReactionDeleted = "ForumTopicReactionDeleted",
    ForumTopicLocked = "ForumTopicLocked",
    ForumTopicUnlocked = "ForumTopicUnlocked",
    ForumTopicCommentCreated = "ForumTopicCommentCreated",
    ForumTopicCommentUpdated = "ForumTopicCommentUpdated",
    ForumTopicCommentDeleted = "ForumTopicCommentDeleted",
    CalendarEventRsvpUpdated = "CalendarEventRsvpUpdated",
    CalendarEventRsvpManyUpdated = "CalendarEventRsvpManyUpdated",
    CalendarEventRsvpDeleted = "CalendarEventRsvpDeleted",
    ListItemCreated = "ListItemCreated",
    ListItemUpdated = "ListItemUpdated",
    ListItemDeleted = "ListItemDeleted",
    ListItemCompleted = "ListItemCompleted",
    ListItemUncompleted = "ListItemUncompleted",
    ChannelMessageReactionCreated = "ChannelMessageReactionCreated",
    ChannelMessageReactionDeleted = "ChannelMessageReactionDeleted",
    ChannelMessageReactionManyDeleted = "ChannelMessageReactionManyDeleted",
    ForumTopicCommentReactionCreated = "ForumTopicCommentReactionCreated",
    ForumTopicCommentReactionDeleted = "ForumTopicCommentReactionDeleted",
    CalendarEventCommentCreated = "CalendarEventCommentCreated",
    CalendarEventCommentDeleted = "CalendarEventCommentDeleted",
    CalendarEventCommentUpdated = "CalendarEventCommentUpdated",
    CalendarEventReactionCreated = "CalendarEventReactionCreated",
    CalendarEventReactionDeleted = "CalendarEventReactionDeleted",
    CalendarEventCommentReactionCreated = "CalendarEventCommentReactionCreated",
    CalendarEventCommentReactionDeleted = "CalendarEventCommentReactionDeleted",
    DocReactionCreated = "DocReactionCreated",
    DocReactionDeleted = "DocReactionDeleted",
    DocCommentReactionCreated = "DocCommentReactionCreated",
    DocCommentReactionDeleted = "DocCommentReactionDeleted",
    CalendarEventSeriesUpdated = "CalendarEventSeriesUpdated",
    CalendarEventSeriesDeleted = "CalendarEventSeriesDeleted",
    GroupCreated = "GroupCreated",
    GroupUpdated = "GroupUpdated",
    GroupDeleted = "GroupDeleted",
    AnnouncementCreated = "AnnouncementCreated",
    AnnouncementUpdated = "AnnouncementUpdated",
    AnnouncementDeleted = "AnnouncementDeleted",
    AnnouncementReactionCreated = "AnnouncementReactionCreated",
    AnnouncementReactionDeleted = "AnnouncementReactionDeleted",
    AnnouncementCommentCreated = "AnnouncementCommentCreated",
    AnnouncementCommentUpdated = "AnnouncementCommentUpdated",
    AnnouncementCommentDeleted = "AnnouncementCommentDeleted",
    AnnouncementCommentReactionCreated = "AnnouncementCommentReactionCreated",
    AnnouncementCommentReactionDeleted = "AnnouncementCommentReactionDeleted",
    UserStatusCreated = "UserStatusCreated",
    UserStatusDeleted = "UserStatusDeleted",
    RoleCreated = "RoleCreated",
    RoleUpdated = "RoleUpdated",
    RoleDeleted = "RoleDeleted",
    ChannelArchived = "ChannelArchived",
    ChannelRestored = "ChannelRestored",
    CategoryCreated = "CategoryCreated",
    CategoryUpdated = "CategoryUpdated",
    CategoryDeleted = "CategoryDeleted",
    ChannelMessagePinned = "ChannelMessagePinned",
    ChannelMessageUnpinned = "ChannelMessageUnpinned",
    ChannelRolePermissionCreated = "ChannelRolePermissionCreated",
    ChannelRolePermissionUpdated = "ChannelRolePermissionUpdated",
    ChannelRolePermissionDeleted = "ChannelRolePermissionDeleted",
    ChannelUserPermissionCreated = "ChannelUserPermissionCreated",
    ChannelUserPermissionUpdated = "ChannelUserPermissionUpdated",
    ChannelUserPermissionDeleted = "ChannelUserPermissionDeleted",
    ChannelCategoryUserPermissionCreated = "ChannelCategoryUserPermissionCreated",
    ChannelCategoryRolePermissionCreated = "ChannelCategoryRolePermissionCreated",
    ChannelCategoryUserPermissionUpdated = "ChannelCategoryUserPermissionUpdated",
    ChannelCategoryRolePermissionUpdated = "ChannelCategoryRolePermissionUpdated",
    ChannelCategoryUserPermissionDeleted = "ChannelCategoryUserPermissionDeleted",
    ChannelCategoryRolePermissionDeleted = "ChannelCategoryRolePermissionDeleted",
};