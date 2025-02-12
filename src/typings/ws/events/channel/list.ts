import { ListItemPayload } from "../../../payloads";

export type ListItemCreatedPayload = {
    serverId: string;
    listItem: ListItemPayload;
};

export type ListItemUpdatedPayload = {
    serverId: string;
    listItem: ListItemPayload;
};

export type ListItemDeletedPayload = {
    serverId: string;
    listItem: ListItemPayload;
};

export type ListItemCompletedPayload = {
    serverId: string;
    listItem: ListItemPayload;
};

export type ListItemUncompletedPayload = {
    serverId: string;
    listItem: ListItemPayload;
};