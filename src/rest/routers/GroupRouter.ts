import { BaseRouter } from "./BaseRouter";
import { CreateGroupBody, GroupPayload, UpdateGroupBody } from "../../typings";

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