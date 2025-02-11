import { ServerPayload } from "../../payloads";

export type BotServerMembershipCreatedPayload = {
    server: ServerPayload;
    createdBy: string;
};

export type BotServerMembershipDeletedPayload = {
    server: ServerPayload;
    deletedBy: string;
};

export type ServerRolesUpdatedPayload = {
    serverId: string;
    memberRoleIds: {
        userId: string;
        roleIds: number[];
    }[];
};