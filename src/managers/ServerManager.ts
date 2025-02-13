import { Collection } from "@discordjs/collection";
import { Server } from "../structures/Server";
import { Client } from "../structures/Client";

export class ServerManager {
    cache: Collection<string, Server> = new Collection();

    constructor(public client: Client) {}
};