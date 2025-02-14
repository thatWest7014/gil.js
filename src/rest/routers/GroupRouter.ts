import { GroupPayload } from "../../typings/payloads/server/group";
import { BaseRouter } from "./BaseRouter";

export type CreateGroupBody = {
    /** The name of the group. */
    name: string;
    /** The description of the group. */
    description?: string;
    /** The ID of the emote of the group. */
    emoteId?: number;
    /** Whether the group is public. */
    isPublic?: boolean;
};

export type UpdateGroupBody = {
    /** The name of the group. */
    name: string;
    /** The description of the group. */
    description?: string;
    /** The ID of the emote of the group. */
    emoteId?: number;
    /** Whether the group is public. */
    isPublic?: boolean;
};

export class GroupRouter extends BaseRouter {
    async create(serverId: string, data: CreateGroupBody) {
        return this.rest.post<{ group: GroupPayload }, CreateGroupBody>(`/servers/${serverId}/groups`, data);
    };

    async getAll(serverId: string) {
        return this.rest.get<{ groups: GroupPayload[] }>(`/servers/${serverId}/groups`);
    };

    async get(serverId: string, groupId: string) {
        return this.rest.get<{ group: GroupPayload }>(`/servers/${serverId}/groups/${groupId}`);
    };

    async update(serverId: string, groupId: string, data: UpdateGroupBody) {
        return this.rest.patch<{ group: GroupPayload }, UpdateGroupBody>(`/servers/${serverId}/groups/${groupId}`, data);
    };
    
    async delete(serverId: string, groupId: string) {
        return this.rest.delete(`/servers/${serverId}/groups/${groupId}`);
    };

    async addMember(groupId: string, userId: string) {
        return this.rest.put(`/groups/${groupId}/members/${userId}`);
    };

    async removeMember(groupId: string, userId: string) {
        return this.rest.delete(`/groups/${groupId}/members/${userId}`);
    };
};