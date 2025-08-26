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
import { Channel } from "./channel/Channel";
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
import { RESTManager } from "../rest/RESTManager";
import { CategoryManager } from "../managers/CategoryManager";
import { MessageManager } from "../managers/MessageManager";
import { MemberManager } from "../managers/MemberManager";
import { AnnouncementManager } from "../managers/AnnouncementManager";

/**
 * The main hub for interacting with the Guilded API.
 */
export class Client extends EventEmitter {
    /** The WebSocket Manager for the client. */
    ws: WebSocketManager;
    /** The REST Manager for the client. */
    rest: RESTManager;
    /** The client's user. */
    user: ClientUser | null = null;
    
    /** The servers manager. */
    servers: ServerManager;
    /** The groups manager. */
    groups: GroupManager;
    /** The channels manager. */
    channels: ChannelManager;
    /** The categories manager. */
    categories: CategoryManager;
    /** The messages manager. */
    messages: MessageManager;
    /** The members manager. */
    members: MemberManager;
    /** The announcements manager. */
    announcements: AnnouncementManager;

    /**
     * @param options Options for the client.
     */
    constructor(public options: ClientOptions) {
        super();

        this.ws = new WebSocketManager({
            token: options.token,
        });
        this.rest = new RESTManager({
            token: options.token,
        });

        this.servers = new ServerManager(this);
        this.groups = new GroupManager(this);
        this.channels = new ChannelManager(this);
        this.categories = new CategoryManager(this);
        this.messages = new MessageManager(this);
        this.members = new MemberManager(this);
        this.announcements = new AnnouncementManager(this);
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
    messageReacted: [reaction: MessageReaction, serverId: string];
    messageUnreacted: [reaction: MessageReaction, serverId: string, count: number];
    forumTopicCommentReacted: [reaction: ForumTopicCommentReaction, serverId: string];
    forumTopicCommentUnreacted: [reaction: ForumTopicCommentReaction, serverId: string];
    calendarEventCommentCreated: [comment: CalendarEventComment, serverId: string];
    calendarEventCommentUpdated: [comment: CalendarEventComment, serverId: string];
    calendarEventCommentDeleted: [comment: CalendarEventComment, serverId: string];
    calendarEventReacted: [reaction: CalendarEventReaction, serverId: string];
    calendarEventUnreacted: [reaction: CalendarEventReaction, serverId: string];
    calendarEventCommentReacted: [reaction: CalendarEventCommentReaction, serverId: string];
    calendarEventCommentUnreacted: [reaction: CalendarEventCommentReaction, serverId: string];
    docReacted: [reaction: DocReaction, serverId: string];
    docUnreacted: [reaction: DocReaction, serverId: string];
    docCommentReacted: [reaction: DocCommentReaction, serverId: string];
    docCommentUnreacted: [reaction: DocCommentReaction, serverId: string];
    calendarEventSeriesUpdated: [series: CalendarEventSeries, eventId?: number];
    calendarEventSeriesDeleted: [series: CalendarEventSeries, eventId?: number];
    groupCreated: [group: Group];
    groupUpdated: [group: Group];
    groupDeleted: [group: Group];
    announcementCreated: [announcement: Announcement];
    announcementUpdated: [announcement: Announcement];
    announcementDeleted: [announcement: Announcement];
    announcementReacted: [reaction: AnnouncementReaction];
    announcementUnreacted: [reaction: AnnouncementReaction];
    announcementCommentCreated: [comment: AnnouncementComment];
    announcementCommentUpdated: [comment: AnnouncementComment];
    announcementCommentDeleted: [comment: AnnouncementComment];
    announcementCommentReacted: [reaction: AnnouncementCommentReaction];
    announcementCommentUnreacted: [reaction: AnnouncementCommentReaction];
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