import { ServerPayload } from "../../payloads";

export type BotServerMembershipCreatedPayload = {
    server: ServerPayload;
    createdBy: string;
};

export type BotServerMembershipDeletedPayload = {
    server: ServerPayload;
    deletedBy: string;
};