import { GroupPayload } from "../../payloads/server/group";

export type GroupCreatedPayload = {
    serverId: string;
    group: GroupPayload;
};

export type GroupUpdatedPayload = {
    serverId: string;
    group: GroupPayload;
};

export type GroupDeletedPayload = {
    serverId: string;
    group: GroupPayload;
};