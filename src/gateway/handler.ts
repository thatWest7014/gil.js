import { Client } from "../structures/Client";
import { WebSocketEvent } from "../typings/ws/events";
import * as server from "./events/server";
import * as message from "./events/message";
import * as member from "./events/member";
import * as channel from "./events/channel";
import * as doc from "./events/doc";
import * as calendarEvent from "./events/calendar-event";
import * as forumTopic from "./events/forum-topic";
import * as listItem from "./events/list-item";
import * as group from "./events/group";
import * as announcement from "./events/announcement";
import * as user from "./events/user";
import * as role from "./events/role";
import * as category from "./events/category";

/**
 * Credit: Guilded.TS
 * @link https://github.com/guildedts/guilded.ts/blob/49a40b4699d1283d52d385ec6a2f544f19956b9c/packages/guilded.ts/src/ws/index.ts#L16
 */
const WSEventHandler: {
    [event in WebSocketEvent]?: (data: any, client: Client) => void | Promise<void>;
} = {
    [WebSocketEvent.BotServerMembershipCreated]: server.botAdded,
    [WebSocketEvent.BotServerMembershipDeleted]: server.botRemoved,
    [WebSocketEvent.ChatMessageCreated]: message.created,
    [WebSocketEvent.ChatMessageUpdated]: message.updated,
    [WebSocketEvent.ChatMessageDeleted]: message.deleted,
    [WebSocketEvent.ServerMemberJoined]: member.joined,
    [WebSocketEvent.ServerMemberRemoved]: member.removed,
    [WebSocketEvent.ServerMemberBanned]: member.banned,
    [WebSocketEvent.ServerMemberUnbanned]: member.unbanned,
    [WebSocketEvent.ServerMemberUpdated]: member.updated,
    [WebSocketEvent.ServerRolesUpdated]: server.rolesUpdated,
    [WebSocketEvent.ServerChannelCreated]: channel.created,
    [WebSocketEvent.ServerChannelUpdated]: channel.updated,
    [WebSocketEvent.ServerChannelDeleted]: channel.deleted,
    [WebSocketEvent.ServerMemberSocialLinkCreated]: member.socialLinkCreated,
    [WebSocketEvent.ServerMemberSocialLinkUpdated]: member.socialLinkUpdated,
    [WebSocketEvent.ServerMemberSocialLinkDeleted]: member.socialLinkDeleted,
    [WebSocketEvent.ServerWebhookCreated]: server.webhookCreated,
    [WebSocketEvent.ServerWebhookUpdated]: server.webhookUpdated,
    [WebSocketEvent.DocCreated]: doc.created,
    [WebSocketEvent.DocUpdated]: doc.updated,
    [WebSocketEvent.DocDeleted]: doc.deleted,
    [WebSocketEvent.DocCommentCreated]: doc.commentCreated,
    [WebSocketEvent.DocCommentDeleted]: doc.commentDeleted,
    [WebSocketEvent.DocCommentUpdated]: doc.commentUpdated,
    [WebSocketEvent.CalendarEventCreated]: calendarEvent.created,
    [WebSocketEvent.CalendarEventUpdated]: calendarEvent.updated,
    [WebSocketEvent.CalendarEventDeleted]: calendarEvent.deleted,
    [WebSocketEvent.ForumTopicCreated]: forumTopic.created,
    [WebSocketEvent.ForumTopicUpdated]: forumTopic.updated,
    [WebSocketEvent.ForumTopicDeleted]: forumTopic.deleted,
    [WebSocketEvent.ForumTopicPinned]: forumTopic.pinned,
    [WebSocketEvent.ForumTopicUnpinned]: forumTopic.unpinned,
    [WebSocketEvent.ForumTopicReactionCreated]: forumTopic.reactionCreated,
    [WebSocketEvent.ForumTopicReactionDeleted]: forumTopic.reactionDeleted,
    [WebSocketEvent.ForumTopicLocked]: forumTopic.locked,
    [WebSocketEvent.ForumTopicUnlocked]: forumTopic.unlocked,
    [WebSocketEvent.ForumTopicCommentCreated]: forumTopic.commentCreated,
    [WebSocketEvent.ForumTopicCommentUpdated]: forumTopic.commentUpdated,
    [WebSocketEvent.ForumTopicCommentDeleted]: forumTopic.commentDeleted,
    [WebSocketEvent.CalendarEventRsvpUpdated]: calendarEvent.rsvpUpdated,
    [WebSocketEvent.CalendarEventRsvpManyUpdated]: calendarEvent.rsvpManyUpdated,
    [WebSocketEvent.CalendarEventRsvpDeleted]: calendarEvent.rsvpDeleted,
    [WebSocketEvent.ListItemCreated]: listItem.created,
    [WebSocketEvent.ListItemUpdated]: listItem.updated,
    [WebSocketEvent.ListItemDeleted]: listItem.deleted,
    [WebSocketEvent.ListItemCompleted]: listItem.completed,
    [WebSocketEvent.ListItemUncompleted]: listItem.uncompleted,
    [WebSocketEvent.ChannelMessageReactionCreated]: message.reactionCreated,
    [WebSocketEvent.ChannelMessageReactionDeleted]: message.reactionDeleted,
    [WebSocketEvent.ChannelMessageReactionManyDeleted]: message.reactionDeletedMany,
    [WebSocketEvent.ForumTopicCommentReactionCreated]: forumTopic.commentReactionCreated,
    [WebSocketEvent.ForumTopicCommentReactionDeleted]: forumTopic.commentReactionDeleted,
    [WebSocketEvent.CalendarEventCommentCreated]: calendarEvent.commentCreated,
    [WebSocketEvent.CalendarEventCommentUpdated]: calendarEvent.commentUpdated,
    [WebSocketEvent.CalendarEventCommentDeleted]: calendarEvent.commentDeleted,
    [WebSocketEvent.CalendarEventReactionCreated]: calendarEvent.reactionCreated,
    [WebSocketEvent.CalendarEventReactionDeleted]: calendarEvent.reactionDeleted,
    [WebSocketEvent.CalendarEventCommentReactionCreated]: calendarEvent.commentReactionCreated,
    [WebSocketEvent.CalendarEventCommentReactionDeleted]: calendarEvent.commentReactionDeleted,
    [WebSocketEvent.DocReactionCreated]: doc.reactionCreated,
    [WebSocketEvent.DocReactionDeleted]: doc.reactionDeleted,
    [WebSocketEvent.DocCommentReactionCreated]: doc.commentReactionCreated,
    [WebSocketEvent.DocCommentReactionDeleted]: doc.commentReactionDeleted,
    [WebSocketEvent.CalendarEventSeriesUpdated]: calendarEvent.seriesUpdated,
    [WebSocketEvent.CalendarEventSeriesDeleted]: calendarEvent.seriesDeleted,
    [WebSocketEvent.GroupCreated]: group.created,
    [WebSocketEvent.GroupUpdated]: group.updated,
    [WebSocketEvent.GroupDeleted]: group.deleted,
    [WebSocketEvent.AnnouncementCreated]: announcement.created,
    [WebSocketEvent.AnnouncementUpdated]: announcement.updated,
    [WebSocketEvent.AnnouncementDeleted]: announcement.deleted,
    [WebSocketEvent.AnnouncementReactionCreated]: announcement.reactionCreated,
    [WebSocketEvent.AnnouncementReactionDeleted]: announcement.reactionDeleted,
    [WebSocketEvent.AnnouncementCommentCreated]: announcement.commentCreated,
    [WebSocketEvent.AnnouncementCommentUpdated]: announcement.commentUpdated,
    [WebSocketEvent.AnnouncementCommentDeleted]: announcement.commentDeleted,
    [WebSocketEvent.AnnouncementCommentReactionCreated]: announcement.commentReactionCreated,
    [WebSocketEvent.AnnouncementCommentReactionDeleted]: announcement.commentReactionDeleted,
    [WebSocketEvent.UserStatusCreated]: user.statusCreated,
    [WebSocketEvent.UserStatusDeleted]: user.statusDeleted,
    [WebSocketEvent.RoleCreated]: role.created,
    [WebSocketEvent.RoleUpdated]: role.updated,
    [WebSocketEvent.RoleDeleted]: role.deleted,
    [WebSocketEvent.ChannelArchived]: channel.archived,
    [WebSocketEvent.ChannelRestored]: channel.restored,
    [WebSocketEvent.CategoryCreated]: category.created,
    [WebSocketEvent.CategoryUpdated]: category.updated,
    [WebSocketEvent.CategoryDeleted]: category.deleted,
    [WebSocketEvent.ChannelMessagePinned]: message.pinned,
    [WebSocketEvent.ChannelMessageUnpinned]: message.unpinned,
    [WebSocketEvent.ChannelRolePermissionCreated]: channel.rolePermissionCreated,
    [WebSocketEvent.ChannelRolePermissionUpdated]: channel.rolePermissionUpdated,
    [WebSocketEvent.ChannelRolePermissionDeleted]: channel.rolePermissionDeleted,
    [WebSocketEvent.ChannelUserPermissionCreated]: channel.userPermissionCreated,
    [WebSocketEvent.ChannelUserPermissionUpdated]: channel.userPermissionUpdated,
    [WebSocketEvent.ChannelUserPermissionDeleted]: channel.userPermissionDeleted,
    [WebSocketEvent.ChannelCategoryRolePermissionCreated]: category.rolePermissionCreated,
    [WebSocketEvent.ChannelCategoryRolePermissionUpdated]: category.rolePermissionUpdated,
    [WebSocketEvent.ChannelCategoryRolePermissionDeleted]: category.rolePermissionDeleted,
    [WebSocketEvent.ChannelCategoryUserPermissionCreated]: category.userPermissionCreated,
    [WebSocketEvent.ChannelCategoryUserPermissionUpdated]: category.userPermissionUpdated,
    [WebSocketEvent.ChannelCategoryUserPermissionDeleted]: category.userPermissionDeleted,
};

export const handleWSEvent = (event: WebSocketEvent, data: any, client: Client) => {
    return WSEventHandler[event]?.(data as any, client);
};