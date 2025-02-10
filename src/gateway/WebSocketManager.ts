import EventEmitter from "node:events";
import WebSocket from "ws";
import { WebSocketOpCode, WebSocketPayload, WebSocketWelcomeData } from "../typings/ws";
import { ClientUserPayload } from "../typings/payloads/user";
import { WebSocketEvent } from "../typings/ws/events";

export class WebSocketManager extends EventEmitter {
    /** The socket. */
    socket: WebSocket | null = null;
    /** The ID of the last message. */
    lastMessageId: string | null = null;

    constructor(public options: WebSocketManagerOptions) {
        super();
    };

    get version(): number {
        return this.options.version || 1;
    };

    get url(): string {
        return this.options.url || `wss://www.guilded.gg/websocket/v${this.version}`;
    };

    connect() {
        this.socket = new WebSocket(this.url, {
            headers: {
                Authorization: `Bearer ${this.options.token}`,
                "guilded-last-message-id": this.lastMessageId || "",
            },
        });

        this.socket.on("message", (raw) => {
            const data: WebSocketPayload = JSON.parse(raw.toString());
            this.onSocketMessage(data);
        });
    };

    private onSocketMessage(data: WebSocketPayload) {
        if (data.s) this.lastMessageId = data.s;
        switch (data.op) {
            case WebSocketOpCode.Welcome:
                const { user } = data.d as WebSocketWelcomeData;
                this.emit("ready", user);
                break;
            case WebSocketOpCode.Event:
                this.emit("event", data.t as any, data.d as any);
                break;
        };
    };
};

export interface WebSocketManager {
    on<Event extends keyof WebSocketManagerEvents>(
        event: Event, 
        listener: (...args: WebSocketManagerEvents[Event]) => void
    ): this;
    emit<Event extends keyof WebSocketManagerEvents>(
        event: Event, 
        ...args: WebSocketManagerEvents[Event]
    ): boolean;
};

export type WebSocketManagerOptions = {
    /** The bot token for the Guilded bot. */ 
    token: string;
    /** The version of the Guilded API. */
    version?: number;
    /** The URL which the WebSocket connects to. */
    url?: string;
};

export type WebSocketManagerEvents = {
    ready: [user: ClientUserPayload];
    event: [event: WebSocketEvent, data: any];
};