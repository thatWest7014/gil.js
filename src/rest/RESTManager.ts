import { BanRouter } from "./routers/BanRouter";
import { CategoryRouter } from "./routers/CategoryRouter";
import { ChannelRouter } from "./routers/ChannelRouter";
import { GroupRouter } from "./routers/GroupRouter";
import { MemberRouter } from "./routers/MemberRouter";
import { MessageRouter } from "./routers/MessageRouter";
import { ServerRouter } from "./routers/ServerRouter";
import packageInfo from "../../package.json";
import { AnnouncementRouter } from "./routers/AnnouncementRouter";

/** https://www.guilded.gg/docs/api/http_methods */
export enum RESTMethod {
    Get = "GET",
    Head = "HEAD",
    Post = "POST",
    Put = "PUT",
    Patch = "PATCH",
    Delete = "DELETE",
};

export class RESTManager {
    servers: ServerRouter;
    groups: GroupRouter;
    channels: ChannelRouter;
    categories: CategoryRouter;
    messages: MessageRouter;
    members: MemberRouter;
    bans: BanRouter;
    announcements: AnnouncementRouter;

    constructor(public options: RESTManagerOptions) {
        this.servers = new ServerRouter(this);
        this.groups = new GroupRouter(this);
        this.channels = new ChannelRouter(this);
        this.categories = new CategoryRouter(this);
        this.messages = new MessageRouter(this);
        this.members = new MemberRouter(this);
        this.bans = new BanRouter(this);
        this.announcements = new AnnouncementRouter(this);
    };

    get version(): number {
        return this.options.version || 1;
    };

    get url(): string {
        return this.options.url || `https://www.guilded.gg/api/v${this.version}`;
    };

    async get<T>(path: string): Promise<T> {
        return this.request<T>(path, RESTMethod.Get);
    };

    async post<T, D = unknown>(path: string, body?: D): Promise<T> {
        return this.request<T>(path, RESTMethod.Post, body);
    };

    async put<T, D>(path: string, body?: D): Promise<T> {
        return this.request<T>(path, RESTMethod.Put, body);
    };

    async patch<T, D>(path: string, body: D): Promise<T> {
        return this.request<T>(path, RESTMethod.Patch, body);
    };

    async delete<T = unknown>(path: string): Promise<T | null> {
        return this.request<T>(path, RESTMethod.Delete);
    };

    async request<T, D = unknown>(path: string, method: RESTMethod, body?: D): Promise<T> {
        const response = await fetch(this.url + path, {
            method,
            headers: {
                Authorization: `Bearer ${this.options.token}`,
                "User-Agent": `gil.js@${packageInfo.version} Node.js@${process.versions.node}`,
                "Content-Type": "application/json",
            },
            body: body && method !== RESTMethod.Get ? JSON.stringify(body) : undefined,
        });
        if (!response.ok) throw new Error("Response was not OK.");
        if (response.status === 204) return null as T;

        return response.json() as Promise<T>;
    };
};

export type RESTManagerOptions = {
    /** The bot token for the Guilded bot. */
    token: string;
    /** The URL of the Guilded API. */
    url?: string;
    /** The version of the Guilded API. */
    version?: number;
};