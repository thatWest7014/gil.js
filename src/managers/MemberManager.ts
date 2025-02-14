import { Member } from "../structures/Member";
import { BaseManager } from "./BaseManager";

export type MemberKey = {
    userId: string;
    serverId: string;
};

export class MemberManager extends BaseManager<MemberKey, Member> {
    /**
     * Set the nickname of a Guilded server's member.
     * @param serverId The ID of the Guilded server.
     * @param userId The ID of the Guilded user.
     * @param nickname The nickname.
     */
    async setNickname(serverId: string, userId: string, nickname: string) {
        return await this.client.rest.members.updateNickname(serverId, userId, nickname);
    };

    /**
     * Remove the nickname of a Guilded server's member.
     * @param serverId The ID of the Guilded server.
     * @param userId The ID of the Guilded user.
     */
    async removeNickname(serverId: string, userId: string) {
        return await this.client.rest.members.deleteNickname(serverId, userId);
    };

    /**
     * Fetch a Guilded server's member.
     * @param serverId The ID of the Guilded server.
     * @param userId The ID of the Guilded user.
     * @param forced Whether to forcefully fetch the message from the API, or first attempt to find it in the cache.
     */
    async fetch(serverId: string, userId: string, forced: boolean = false) {
        const cached = this.cache.get({ userId, serverId });
        if (cached && !forced) return cached;
        const { member } = await this.client.rest.members.get(serverId, userId);
        return new Member(member, this.client);
    };

    /**
     * Fetch all of a Guilded server's members.
     * @param serverId The ID of the Guilded server.
     */
    async fetchAll(serverId: string) {
        const { members } = await this.client.rest.members.getAll(serverId);
        return members;
    };

    /**
     * Kick a member from a Guilded server.
     * @param serverId The ID of the Guilded server.
     * @param userId The ID of the Guilded user.
     */
    async kick(serverId: string, userId: string) {
        return await this.client.rest.members.kick(serverId, userId);
    };

    /**
     * Add a role to a Guilded server's member.
     * @param serverId The ID of the Guilded server.
     * @param userId The ID of the Guilded user.
     * @param roleId The ID of the Guilded role.
     */
    async addRole(serverId: string, userId: string, roleId: number) {
        await this.client.rest.members.assignRole(serverId, userId, roleId);
    };

    /**
     * Remove a role from a Guilded server's member.
     * @param serverId The ID of the Guilded server.
     * @param userId The ID of the Guilded user.
     * @param roleId The ID of the Guilded role.
     */
    async removeRole(serverId: string, userId: string, roleId: number) {
        await this.client.rest.members.removeRole(serverId, userId, roleId);
    };

    /**
     * Fetch all roles within a Guilded server's member.
     * @param serverId The ID of the Guilded server.
     * @param userId The ID of the Guilded user.
     */
    async fetchAllRoles(serverId: string, userId: string) {
        const { roleIds } = await this.client.rest.members.getAllRoles(serverId, userId);
        return roleIds;
    };
};