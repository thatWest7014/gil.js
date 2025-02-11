import EventEmitter from "node:events";
import { WebSocketManager } from "../gateway/WebSocketManager";
import { ClientUserPayload } from "../typings/payloads/user";
import { ClientUser } from "./User";
import { WebSocketEvent } from "../typings/ws/events";
import { handleWSEvent } from "../gateway/handler";
import { Message } from "./Message";
import { Server } from "./Server";
import { Member } from "./Member";
import { ServersManager } from "../managers/ServersManager";
import { Ban } from "./Ban";

/**
 * The main hub for interacting with the Guilded API.
 */
export class Client extends EventEmitter {
    /** The WebSocket Manager for the client. */
    ws: WebSocketManager;
    /** The client's user. */
    user: ClientUser | null = null;
    
    servers: ServersManager;

    /**
     * @param options Options for the client.
     */
    constructor(public options: ClientOptions) {
        super();

        this.ws = new WebSocketManager({
            token: options.token,
        });

        this.servers = new ServersManager(this);
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
};