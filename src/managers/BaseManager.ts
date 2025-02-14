import { Client } from "../structures/Client";
import { Collection } from "../structures/Collection";

export class BaseManager<K, V> {
    cache: Collection<K, V> = new Collection();

    constructor(public client: Client) {};
};