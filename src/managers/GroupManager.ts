import { Group } from "../structures/Group";
import { CreateGroupBody, UpdateGroupBody } from "../rest/routers/GroupRouter";
import { BaseManager } from "./BaseManager";

export class GroupManager extends BaseManager<string, Group> {
    /**
     * Create a Guilded server group.
     * @param {string} serverId The ID of the Guilded server to create the group in.
     * @param {CreateGroupBody} data Group data.
     * @returns {Group} The group.
     */
    async create(serverId: string, data: CreateGroupBody): Promise<Group> {
        const { group } = await this.client.rest.groups.create(serverId, data);
        return new Group(group, this.client);
    };

    /**
     * Fetch all groups in a Guilded server.
     * @param {string} serverId The ID of the Guilded server.
     * @returns {Group[]} The groups.
     */
    async fetchAll(serverId: string): Promise<Group[]> {
        const { groups } = await this.client.rest.groups.getAll(serverId);
        return groups.map((group) => new Group(group, this.client));
    };

    /**
     * Fetch a Guilded server's group.
     * @param {string} serverId The ID of the Guilded server.
     * @param {string} groupId The ID of the Guilded server's group.
     * @param {boolean} forced Whether to forcefully fetch the server from the API, or first attempt to find it in the cache.
     * @returns {Group} The group. 
    */
    async fetch(serverId: string, groupId: string, forced: boolean = false): Promise<Group> {
        const cached = this.cache.get(groupId);
        if (cached && !forced) return cached;
        const { group } = await this.client.rest.groups.get(serverId, groupId);
        return new Group(group, this.client);
    };

    /**
     * Update a Guilded server's group.
     * @param {string} serverId The ID of the Guilded server.
     * @param {groupId} groupId The ID of the Guilded server's group.
     * @param {UpdateGroupBody} data Group data.
     * @returns {Group} The updated Guilded group.;
     */
    async update(serverId: string, groupId: string, data: UpdateGroupBody): Promise<Group> {
        const { group } = await this.client.rest.groups.update(serverId, groupId, data);
        return new Group(group, this.client);
    };

    
    /**
     * Delete a Guilded server's group.
     * @param serverId The ID of the Guilded server.
     * @param groupId The ID of the Guilded server's group.
     */
    async delete(serverId: string, groupId: string) {
        await this.client.rest.groups.delete(serverId, groupId);
    };

    /**
     * Add a Guilded member to a Guilded group.
     * @param groupId The ID of the Guilded group.
     * @param userId The ID of the Guilded user.
     */
    async addMember(groupId: string, userId: string) {
        await this.client.rest.groups.addMember(groupId, userId);
    };

    /**
     * Remove a member from a Guilded group.
     * @param groupId The ID of the Guilded group.
     * @param userId The ID of the Guilded user.
     */
    async removeMember(groupId: string, userId: string) {
        await this.client.rest.groups.removeMember(groupId, userId);
    };
};