import { ServerMemberPayload } from "../typings/payloads/server/member";
import { Client } from "./Client";
import { User } from "./User";

export class Member {
    /** The user info of the member. */
    user: User;
    /** The IDs of the member's roles. */
    roleIds: number[];
    /** The nickname of the member. */
    nickname?: string;
    /** The date when the member joined. */
    joinedAt: Date;
    /** Whether the member is the server owner. */
    owner?: boolean

    constructor(data: ServerMemberPayload, public client: Client) {
        this.user = new User(data.user, client);
        this.roleIds = data.roleIds || [];
        this.nickname = data.nickname;
        this.joinedAt = new Date(data.joinedAt);
        this.owner = data.isOwner || false;
    };

    /**
     * Add a role to this Guilded member.
     * @param serverId The ID of the Guilded server.
     * @param roleId The ID of the Guilded role.
     */
    async addRole(serverId: string, roleId: number) {
        await this.client.members.addRole(serverId, this.user.id, roleId);
    };

    /**
     * Remove a role from this Guilded member.
     * @param serverId The ID of the Guilded server.
     * @param roleId The ID of the Guilded role.
     */
    async removeRole(serverId: string, roleId: number) {
        await this.client.members.removeRole(serverId, this.user.id, roleId);
    };

    /**
     * Fetch all roles within this Guilded member.
     * @param serverId The ID of the Guilded server.
     */
    async fetchAllRoles(serverId: string) {
        return await this.client.members.fetchAllRoles(serverId, this.user.id);
    };

    /** Ban a member from this Guilded server. */
    async ban(serverId: string, reason?: string) {
        return this.client.servers.ban(serverId, this.user.id, reason);
    };

    /** Unban a member from this Guilded server. */
    async unban(serverId: string) {
        return this.client.servers.unban(serverId, this.user.id);
    };
};