import EventEmitter from "node:events";
import { WebSocketManager } from "../gateway/WebSocketManager";
import { ClientUserPayload, SocialLink } from "../typings/payloads/user";
import { ClientUser } from "./User";
import { WebSocketEvent } from "../typings/ws/events";
import { handleWSEvent } from "../gateway/handler";
import { Message } from "./Message";
import { Server } from "./Server";
import { Member } from "./Member";
import { ServersManager } from "../managers/ServersManager";
import { Ban } from "./Ban";
import { Channel } from "./Channel";
import { ChannelsManager } from "../managers/ChannelsManager";
import { Webhook } from "./Webhook";
import { Doc } from "./Doc";
import { DocComment } from "./DocComment";
import { CalendarEvent } from "./CalendarEvent";
import { ForumTopic } from "./ForumTopic";
import { ForumTopicComment } from "./ForumTopicComment";
import { ForumTopicReaction } from "./ForumTopicReaction";
import { CalendarEventRsvp } from "./CalendarEventRsvp";
import { ListItem } from "./ListItem";
import { MessageReaction } from "./MessageReaction";
import { ForumTopicCommentReaction } from "./ForumTopicCommentReaction";

/**
 * The main hub for interacting with the Guilded API.
 */
export class Client extends EventEmitter {
    /** The WebSocket Manager for the client. */
    ws: WebSocketManager;
    /** The client's user. */
    user: ClientUser | null = null;
    
    /** The servers manager. */
    servers: ServersManager;
    /** The channels manager. */
    channels: ChannelsManager;

    /**
     * @param options Options for the client.
     */
    constructor(public options: ClientOptions) {
        super();

        this.ws = new WebSocketManager({
            token: options.token,
        });

        this.servers = new ServersManager(this);
        this.channels = new ChannelsManager(this);
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
};