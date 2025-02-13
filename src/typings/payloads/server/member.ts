import { UserPayload, UserSummaryPayload } from "../user";

export interface ServerMemberPayload extends ServerMemberSummaryPayload {
    user: UserPayload;
    nickname?: string;
    joinedAt: string;
    isOwner?: boolean;
};

export type ServerMemberSummaryPayload = {
    user: UserSummaryPayload;
    roleIds: number[];
};

export type ServerMemberBanPayload = {
    user: UserSummaryPayload;
    reason?: string;
    createdBy: string;
    createdAt: string;
};