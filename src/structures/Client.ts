import EventEmitter from "node:events";
import { WebSocketManager } from "../gateway/WebSocketManager";
import { ClientUserPayload, SocialLink } from "../typings/payloads/user";
import { ClientUser } from "./User";
import { WebSocketEvent } from "../typings/ws/events";
import { handleWSEvent } from "../gateway/handler";
import { Message } from "./Message";
import { Server } from "./Server";
import { Member } from "./Member";
import { ServerManager } from "../managers/ServerManager";
import { Ban } from "./Ban";
import { Channel } from "./Channel";
import { ChannelManager } from "../managers/ChannelManager";
import { Webhook } from "./Webhook";
import { Doc } from "./doc/Doc";
import { DocComment } from "./doc/DocComment";
import { CalendarEvent } from "./calendar/CalendarEvent";
import { ForumTopic } from "./forum/ForumTopic";
import { ForumTopicComment } from "./forum/ForumTopicComment";
import { ForumTopicReaction } from "./forum/ForumTopicReaction";
import { CalendarEventRsvp } from "./calendar/CalendarEventRsvp";
import { ListItem } from "./ListItem";
import { MessageReaction } from "./MessageReaction";
import { ForumTopicCommentReaction } from "./forum/ForumTopicCommentReaction";
import { CalendarEventComment } from "./calendar/CalendarEventComment";
import { CalendarEventReaction } from "./calendar/CalendarEventReaction";
import { CalendarEventCommentReaction } from "./calendar/CalendarEventCommentReaction";
import { DocReaction } from "./doc/DocReaction";
import { DocCommentReaction } from "./doc/DocCommentReaction";
import { CalendarEventSeries } from "./calendar/CalendarEventSeries";
import { Group } from "./Group";
import { GroupManager } from "../managers/GroupManager";
import { Announcement } from "./announcement/Announcement";
import { AnnouncementReaction } from "./announcement/AnnouncementReaction";
import { AnnouncementComment } from "./announcement/AnnouncementComment";
import { AnnouncementCommentReaction } from "./announcement/AnnouncementCommentReaction";
import { UserStatus } from "./UserStatus";
import { Role } from "./Role";
import { Category } from "./Category";
import { ChannelRolePermission } from "./ChannelRolePermission";
import { ChannelUserPermission } from "./ChannelUserPermission";
import { CategoryRolePermission } from "./CategoryRolePermission";
import { CategoryUserPermission } from "./CategoryUserPermission";

/**
 * The main hub for interacting with the Guilded API.
 */
export class Client extends EventEmitter {
    /** The WebSocket Manager for the client. */
    ws: WebSocketManager;
    /** The client's user. */
    user: ClientUser | null = null;
    
    /** The servers manager. */
    servers: ServerManager;
    /** The groups manager. */
    groups: GroupManager;
    /** The channels manager. */
    channels: ChannelManager;

    /**
     * @param options Options for the client.
     */
    constructor(public options: ClientOptions) {
        super();

        this.ws = new WebSocketManager({
            token: options.token,
        });

        this.servers = new ServerManager(this);
        this.groups = new GroupManager(this);
        this.channels = new ChannelManager(this);
    };

    /** Login to the Guilded bot. */
    login() {
        this.ws.connect();

        this.ws.on("ready", this.handleWSReady.bind(this));
        this.ws.on("event", this.handleWSEvent.bind(this));
    };

    private handleWSReady(user: ClientUserPayload) {
        this.user = new ClientUser(user, this);
        this.emit("ready", this);
    };

    private handleWSEvent(event: WebSocketEvent, data: any) {
        handleWSEvent(event, data, this);
    };
};

export interface Client {
    on<Event extends keyof ClientEvents>(
        event: Event, 
        listener: (...args: ClientEvents[Event]) => void
    ): this;
    emit<Event extends keyof ClientEvents>(
        event: Event, 
        ...args: ClientEvents[Event]
    ): boolean;
};

/** The options for the Client. */
export type ClientOptions = {
    /** The bot token for the Guilded bot. */
    token: string;
};

export type ClientEvents = {
    ready: [client: Client];
    botServerAdded: [server: Server, invitedBy: string];
    botServerRemoved: [server: Server, removedBy: string];
    messageCreated: [message: Message];
    messageUpdated: [message: Message];
    messageDeleted: [message: Message];
    memberJoined: [member: Member, serverId: string, memberCount: number];
    memberRemoved: [userId: string, serverId: string, kicked: boolean, banned: boolean];
    memberBanned: [ban: Ban, serverId: string];
    memberUnbanned: [ban: Ban, serverId: string];
    memberUpdated: [member: { serverId: string, userId: string, nickname?: string, socialLink?: SocialLink }];
    membersRolesUpdated: [serverId: string, members: { userId: string, roleIds: number[] }[]];
    channelCreated: [channel: Channel];
    channelUpdated: [channel: Channel];
    channelDeleted: [channel: Channel];
    webhookCreated: [webhook: Webhook];
    webhookUpdated: [webhook: Webhook];
    docCreated: [doc: Doc];
    docUpdated: [doc: Doc];
    docDeleted: [doc: Doc];
    docCommentCreated: [comment: DocComment];
    docCommentDeleted: [comment: DocComment];
    docCommentUpdated: [comment: DocComment];
    calendarEventCreated: [event: CalendarEvent];
    calendarEventUpdated: [event: CalendarEvent];
    calendarEventDeleted: [event: CalendarEvent];
    forumTopicCreated: [topic: ForumTopic];
    forumTopicUpdated: [topic: ForumTopic];
    forumTopicDeleted: [topic: ForumTopic];
    forumTopicPinned: [topic: ForumTopic];
    forumTopicUnpinned: [topic: ForumTopic];
    forumTopicReacted: [reaction: ForumTopicReaction];
    forumTopicUnreacted: [reaction: ForumTopicReaction];
    forumTopicLocked: [topic: ForumTopic];
    forumTopicUnlocked: [topic: ForumTopic];
    forumTopicCommentCreated: [comment: ForumTopicComment];
    forumTopicCommentUpdated: [comment: ForumTopicComment];
    forumTopicCommentDeleted: [comment: ForumTopicComment];
    calendarEventRsvpUpdated: [rsvps: CalendarEventRsvp[]];
    calendarEventRsvpDeleted: [rsvp: CalendarEventRsvp];
    listItemCreated: [item: ListItem];
    listItemUpdated: [item: ListItem];
    listItemDeleted: [item: ListItem];
    listItemCompleted: [item: ListItem];
    listItemUncompleted: [item: ListItem];
    messageReact: [reaction: MessageReaction, serverId: string];
    messageUnreact: [reaction: MessageReaction, serverId: string, count: number];
    forumTopicCommentReact: [reaction: ForumTopicCommentReaction, serverId: string];
    forumTopicCommentUnreact: [reaction: ForumTopicCommentReaction, serverId: string];
    calendarEventCommentCreated: [comment: CalendarEventComment, serverId: string];
    calendarEventCommentUpdated: [comment: CalendarEventComment, serverId: string];
    calendarEventCommentDeleted: [comment: CalendarEventComment, serverId: string];
    calendarEventReact: [reaction: CalendarEventReaction, serverId: string];
    calendarEventUnreact: [reaction: CalendarEventReaction, serverId: string];
    calendarEventCommentReact: [reaction: CalendarEventCommentReaction, serverId: string];
    calendarEventCommentUnreact: [reaction: CalendarEventCommentReaction, serverId: string];
    docReact: [reaction: DocReaction, serverId: string];
    docUnreact: [reaction: DocReaction, serverId: string];
    docCommentReact: [reaction: DocCommentReaction, serverId: string];
    docCommentUnreact: [reaction: DocCommentReaction, serverId: string];
    calendarEventSeriesUpdated: [series: CalendarEventSeries, eventId?: number];
    calendarEventSeriesDeleted: [series: CalendarEventSeries, eventId?: number];
    groupCreated: [group: Group];
    groupUpdated: [group: Group];
    groupDeleted: [group: Group];
    announcementCreated: [announcement: Announcement];
    announcementUpdated: [announcement: Announcement];
    announcementDeleted: [announcement: Announcement];
    announcementReact: [reaction: AnnouncementReaction];
    announcementUnreact: [reaction: AnnouncementReaction];
    announcementCommentCreated: [comment: AnnouncementComment];
    announcementCommentUpdated: [comment: AnnouncementComment];
    announcementCommentDeleted: [comment: AnnouncementComment];
    announcementCommentReact: [reaction: AnnouncementCommentReaction];
    announcementCommentUnreact: [reaction: AnnouncementCommentReaction];
    userStatusCreated: [status: UserStatus, userId: string, expiresAt?: Date];
    userStatusDeleted: [status: UserStatus, userId: string];
    roleCreated: [role: Role];
    roleUpdated: [role: Role];
    roleDeleted: [role: Role];
    channelArchived: [channel: Channel];
    channelRestored: [channel: Channel];
    categoryCreated: [category: Category];
    categoryUpdated: [category: Category];
    categoryDeleted: [category: Category];
    messagePinned: [message: Message];
    messageUnpinned: [message: Message];
    channelRolePermissionCreated: [rolePermission: ChannelRolePermission];
    channelRolePermissionUpdated: [rolePermission: ChannelRolePermission];
    channelRolePermissionDeleted: [rolePermission: ChannelRolePermission];
    channelUserPermissionCreated: [userPermission: ChannelUserPermission];
    channelUserPermissionUpdated: [userPermission: ChannelUserPermission];
    channelUserPermissionDeleted: [userPermission: ChannelUserPermission];
    categoryRolePermissionCreated: [rolePermission: CategoryRolePermission];
    categoryRolePermissionUpdated: [rolePermission: CategoryRolePermission];
    categoryRolePermissionDeleted: [rolePermission: CategoryRolePermission];
    categoryUserPermissionCreated: [userPermission: CategoryUserPermission];
    categoryUserPermissionUpdated: [userPermission: CategoryUserPermission];
    categoryUserPermissionDeleted: [userPermission: CategoryUserPermission];
};