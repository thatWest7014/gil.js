import { Client } from "./Client";
import { GroupPayload } from "../typings";

export class Group {
    /** The ID of the group. */
    id: string;
    /** The ID of the server which this group belongs to. */
    serverId: string;
    /** The name of the group. */
    name: string;
    /** The description of the group. */
    description?: string;
    /** The URL of the group's avatar. */
    avatar?: string;
    /** Whether this group is the server's home group. */
    home?: boolean;
    /** The ID of the group's emote. */
    emoteId?: number;
    /** Whether this group is public. */
    public?: boolean;
    /** The creation date of the group. */
    createdAt: Date;
    /** The ID of the user who created the group. */
    createdBy: string;
    /** The date when the group was updated. */
    updatedAt?: Date;
    /** The date when the group was archived. */
    archivedAt?: Date;
    /** The ID of the user who archived the group. */
    archivedBy?: string;

    constructor(data: GroupPayload, public client: Client) {
        this.id = data.id;
        this.serverId = data.serverId;
        this.name = data.name;
        this.description = data.description;
        this.avatar = data.avatar;
        this.home = data.isHome || false;
        this.emoteId = data.emoteId;
        this.public = data.isPublic || false;
        this.createdAt = new Date(data.createdAt);
        this.createdBy = data.createdBy;
        this.archivedAt = data.archivedAt ? new Date(data.archivedAt) : undefined;
        this.archivedBy = data.archivedBy;

        this.client.groups.cache.set(this.id, this);
    };

    /**
     * Add a Guilded server member to this Guilded group.
     * @param userId The ID of the Guilded user.
     */
    async addMember(userId: string) {
        return await this.client.groups.addMember(this.id, userId);
    };

    /**
     * Add a Guilded server member to this Guilded group.
     * @param userId The ID of the Guilded user.
     */
    async removeMember(userId: string) {
        return await this.client.groups.removeMember(this.id, userId);
    };
};