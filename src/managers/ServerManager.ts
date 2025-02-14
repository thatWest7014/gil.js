import { Ban } from "../structures/Ban";
import { Server } from "../structures/Server";
import { BaseManager } from "./BaseManager";

export class ServerManager extends BaseManager<string, Server> {
    /**
     * Fetch a Guilded server.
     * @param {string} serverId The ID of the Guilded server.
     * @param {boolean} forced Whether to forcefully fetch the server from the API, or first attempt to find it in the cache.
     * @returns {Server} The server.
    */
    async fetch(serverId: string, forced: boolean = false): Promise<Server> {
        const cached = this.cache.get(serverId);
        if (cached && !forced) return cached;
        const { server } = await this.client.rest.servers.get(serverId);
        return new Server(server, this.client);
    };

    /**
     * Ban a Guilded member from a Guilded server.
     * @param serverId The ID of the Guilded server.
     * @param userId The ID of the Guilded user.
     * @param reason The reason.
     * @returns {Ban} The ban.
     */
    async ban(serverId: string, userId: string, reason?: string) {
        const { serverMemberBan } = await this.client.rest.bans.create(serverId, userId, reason);
        return new Ban(serverMemberBan, this.client);
    };

    /**
     * Unban a Guilded member from a Guilded server.
     * @param serverId The ID of the Guilded server.
     * @param userId The ID of the Guilded user.
     */
    async unban(serverId: string, userId: string) {
        await this.client.rest.bans.delete(serverId, userId);
    };

    async getBan(serverId: string, userId: string) {
        const { serverMemberBan } = await this.client.rest.bans.get(serverId, userId);
        return new Ban(serverMemberBan, this.client);
    };

    async getAllBans(serverId: string) {
        const { serverMemberBans } = await this.client.rest.bans.getAll(serverId);
        return serverMemberBans.map((ban) => new Ban(ban, this.client));
    };
};