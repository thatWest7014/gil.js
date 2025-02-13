import { Client } from "../../structures/Client";
import { UserStatus } from "../../structures/UserStatus";
import { 
    UserStatusCreatedPayload, 
    UserStatusDeletedPayload,
} from "../../typings";

export const statusCreated = (data: UserStatusCreatedPayload, client: Client) => {
    const status = new UserStatus(data.userStatus, client);
    client.emit("userStatusCreated", status, data.userId, data.expiresAt ? new Date(data.expiresAt) : undefined);
};

export const statusDeleted = (data: UserStatusDeletedPayload, client: Client) => {
    const status = new UserStatus(data.userStatus, client);
    client.emit("userStatusDeleted", status, data.userId);
};