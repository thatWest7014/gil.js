import { Collection } from "@discordjs/collection";
import { Client } from "../structures/Client";
import { Group } from "../structures/Group";

export class GroupManager {
    cache: Collection<string, Group> = new Collection();

    constructor(public client: Client) {}
};