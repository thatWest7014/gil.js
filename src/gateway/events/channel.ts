import { Channel } from "../../structures/Channel";
import { Client } from "../../structures/Client";
import { ServerChannelCreatedPayload, ServerChannelDeletedPayload, ServerChannelUpdatedPayload } from "../../typings";

export const created = (data: ServerChannelCreatedPayload, client: Client) => {
    const channel = new Channel(data.channel, client);
    client.emit("channelCreated", channel);
};

export const updated = (data: ServerChannelUpdatedPayload, client: Client) => {
    const channel = new Channel(data.channel, client);
    client.emit("channelCreated", channel);
};

export const deleted = (data: ServerChannelDeletedPayload, client: Client) => {
    const channel = new Channel(data.channel, client);
    client.emit("channelDeleted", channel);
};