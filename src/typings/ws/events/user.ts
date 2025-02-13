import { UserStatusPayload } from "../../payloads";

export type UserStatusCreatedPayload = {
    expiresAt?: string;
    userId: string;
    userStatus: UserStatusPayload;
};

export type UserStatusDeletedPayload = {
    userId: string;
    userStatus: UserStatusPayload;
};