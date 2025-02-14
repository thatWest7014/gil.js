import { ServerMemberPayload, ServerMemberSummaryPayload } from "../../typings";
import { BaseRouter } from "./BaseRouter";

export class MemberRouter extends BaseRouter {
    async updateNickname(serverId: string, userId: string, nickname: string) {
        return await this.rest.put<{ nickname: string }, { nickname: string }>(`/servers/${serverId}/members/${userId}/nickname`, { nickname });
    };

    async deleteNickname(serverId: string, userId: string) {
        return await this.rest.delete(`/servers/${serverId}/members/${userId}/nickname`);
    };

    async get(serverId: string, userId: string) {
        return await this.rest.get<{ member: ServerMemberPayload }>(`/servers/${serverId}/members/${userId}`);
    };

    async kick(serverId: string, userId: string) {
        return await this.rest.delete(`/servers/${serverId}/members/${userId}`);
    };

    async getAll(serverId: string) {
        return await this.rest.get<{ members: ServerMemberSummaryPayload[] }>(`/servers/${serverId}/members`);
    };

    async assignRole(serverId: string, userId: string, roleId: number) {
        return await this.rest.put(`/servers/${serverId}/members/${userId}/roles/${roleId}`);
    };

    async removeRole(serverId: string, userId: string, roleId: number) {
        return await this.rest.delete(`/servers/${serverId}/members/${userId}/roles/${roleId}`);
    };

    async getAllRoles(serverId: string, userId: string) {
        return await this.rest.put<{ roleIds: number[] }, {}>(`/servers/${serverId}/members/${userId}/roles`);
    };
};