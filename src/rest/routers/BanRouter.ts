import { ServerMemberBanPayload } from "../../typings";
import { BaseRouter } from "./BaseRouter";

export class BanRouter extends BaseRouter {
    async create(serverId: string, userId: string, reason?: string) {
        return await this.rest.post<{ serverMemberBan: ServerMemberBanPayload }, { reason?: string }>(`/servers/${serverId}/bans/${userId}`, { reason });
    };

    async get(serverId: string, userId: string) {
        return await this.rest.get<{ serverMemberBan: ServerMemberBanPayload }>(`/servers/${serverId}/bans/${userId}`);
    };

    async delete(serverId: string, userId: string) {
        return await this.rest.delete(`/servers/${serverId}/bans/${userId}`);
    };

    async getAll(serverId: string) {
        return await this.rest.get<{ serverMemberBans: ServerMemberBanPayload[] }>(`/servers/${serverId}`);
    };
};