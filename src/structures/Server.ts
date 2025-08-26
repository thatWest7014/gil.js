import { Client } from "./Client";
import { 
    ServerPayload, 
    ServerType 
} from "../typings";

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

        this.client.servers.cache.set(this.id, this);
    };

    /** Fetch this Guilded server. */
    async fetch() {
        return await this.client.servers.fetch(this.id);
    };

    /** Fetch all groups in this Guilded server. */
    async getAllGroups() {
        return await this.client.groups.fetchAll(this.id);
    };

    /** Fetch a group in this Guilded server. */
    async getGroup(groupId: string) {
        return this.client.groups.fetch(this.id, groupId);
    };

    /** Fetch a member in this Guilded server. */
    async fetchMember(userId: string) {
        return this.client.members.fetch(this.id, userId);
    };

    /** Fetch all members in this Guilded server. */
    async fetchAllMembers() {
        return this.client.members.fetchAll(this.id);
    };

    /** Ban a member from this Guilded server. */
    async ban(userId: string, reason?: string) {
        return this.client.servers.ban(this.id, userId, reason);
    };

    /** Unban a member from this Guilded server. */
    async unban(userId: string) {
        return this.client.servers.unban(this.id, userId);
    };

    /** Fetch a ban from this Guilded server. */
    async fetchBan(userId: string) {
        return this.client.servers.getBan(this.id, userId);
    };

    /** Fetch all bans from this Guilded server. */
    async fetchAllBans() {
        return this.client.servers.getAllBans(this.id);
    };
};