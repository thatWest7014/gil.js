export interface UserPayload extends UserSummaryPayload {
    banner?: string;
    createdAt: string;
    status?: UserStatusPayload;
};

export type UserSummaryPayload = {
    id: string;
    type?: UserType;
    name: string;
    avatar?: string;
};

export enum UserType {
    Bot = "bot",
    User = "user",
};

export type UserStatusPayload = {
    content?: string;
    emoteId: number;
};

export interface ClientUserPayload extends UserPayload {
    botId: string;
    createdBy: string;
};