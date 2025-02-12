import { ServerChannelPayload } from "../../../payloads";
export * from "./doc";
export * from "./calendar";
export * from "./forum-topic";
export * from "./list";

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