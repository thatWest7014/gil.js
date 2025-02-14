import { CategoryPayload } from "../typings";
import { Client } from "./Client";

export class Category {
    id: number;
    serverId: string;
    groupId: string;
    createdAt: Date;
    updatedAt?: Date;
    name: string;
    priority?: number;

    constructor(data: CategoryPayload, public client: Client) {
        this.id = data.id;
        this.serverId = data.serverId;
        this.groupId = data.groupId;
        this.createdAt = new Date(data.createdAt);
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
        this.name = data.name;
        this.priority = data.priority;

        this.client.categories.cache.set(this.id, this);
    };
};