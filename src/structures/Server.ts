import { ServerPayload, ServerType } from "../typings";
import { Client } from "./Client";

export class Server {
    /** The ID of the server. */
    id: string;
    /** The ID of the server's owner. */
    ownerId: string;
    /** The type of the server. */
    type?: ServerType;
    /** The name of the server. */
    name: string;
    /** The URL/subdomain of the server. */
    url?: string;
    /** The about section of the server. */
    about?: string;
    /** The URL of the server's avatar. */    
    avatar?: string;
    /** The URL of the server's banner. */
    banner?: string;
    /** The timezone of the server. */
    timezone?: string;
    /** Whether the server is verified. */
    verified?: boolean;
    /** The ID of the server's default channel. */
    defaultChannelId?: string;
    /** The date of the server's creation. */
    createdAt: Date

    constructor(data: ServerPayload, public client: Client) {
        this.id = data.id;
        this.ownerId = data.ownerId;
        this.type = data.type;
        this.name = data.name;
        this.url = data.url;
        this.about = data.about;
        this.avatar = data.avatar;
        this.banner = data.banner;
        this.timezone = data.timezone;
        this.verified = data.isVerified || false;
        this.defaultChannelId = data.defaultChannelId;
        this.createdAt = new Date(data.createdAt);

        client.servers.cache.set(this.id, this);
    };
};