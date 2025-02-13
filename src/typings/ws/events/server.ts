import { RolePayload, ServerPayload } from "../../payloads";

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

/** Role */

export type RoleCreatedPayload = {
    serverId: string;
    role: RolePayload;
};

export type RoleUpdatedPayload = {
    serverId: string;
    role: RolePayload;
};

export type RoleDeletedPayload = {
    serverId: string;
    role: RolePayload;
};