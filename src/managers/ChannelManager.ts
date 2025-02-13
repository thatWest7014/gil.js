import { Collection } from "@discordjs/collection";
import { Client } from "../structures/Client";
import { Channel } from "../structures/Channel";

export class ChannelManager {
    cache: Collection<string, Channel> = new Collection();

    constructor(public client: Client) {}
};