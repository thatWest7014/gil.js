export type UserPayload = {
    id: string;
    type?: UserType;
    name: string;
    avatar?: string;
    banner?: string;
    createdAt: string;
    status?: UserStatusPayload;
};

export type UserStatusPayload = {
    content?: string;
    emoteId: number;
};

export enum UserType {
    Bot = "bot",
    User = "user",
};

export interface ClientUserPayload extends UserPayload {
    botId: string;
    createdBy: string;
};