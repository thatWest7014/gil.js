import { ServerChannelPayload } from "../../payloads";

export type ServerChannelCreatedPayload = {
    serverId: string;
    channel: ServerChannelPayload;
};

export type ServerChannelUpdatedPayload = {
    serverId: string;
    channel: ServerChannelPayload;
};

export type ServerChannelDeletedPayload = {
    serverId: string;
    channel: ServerChannelPayload;
};