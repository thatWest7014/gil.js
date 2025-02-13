import { RolePayload } from "../typings";
import { Client } from "./Client";

export class Role {
    id: number;
    serverId: string;
    createdAt: Date;
    updatedAt?: Date;
    name: string;
    displayedSeparately?: boolean;
    selfAssignable?: boolean;
    mentionable?: boolean;
    permissions: string[];
    colors?: number[];
    icon?: string;
    priority?: number;
    base?: boolean;
    botUserId?: string;

    constructor(data: RolePayload, public client: Client) {
        this.id = data.id;
        this.serverId = data.serverId;
        this.createdAt = new Date(data.createdAt);
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
        this.name = data.name;
        this.displayedSeparately = data.isDisplayedSeparately;
        this.selfAssignable = data.isSelfAssignable;
        this.mentionable = data.isMentionable;
        this.permissions = data.permissions;
        this.colors = data.colors;
        this.icon = data.icon;
        this.priority = data.priority;
        this.base = data.isBase;
        this.botUserId = data.botUserId;
    };
};