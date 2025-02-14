import { ServerPayload } from "../../typings";
import { BaseRouter } from "./BaseRouter";

export class ServerRouter extends BaseRouter {
    async get(serverId: string) {
        return await this.rest.get<{ server: ServerPayload, serverMemberCount: number }>(`/servers/${serverId}`);
    };
};