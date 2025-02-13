import { Client } from "../../structures/Client";
import { Role } from "../../structures/Role";
import { RoleCreatedPayload, RoleDeletedPayload, RoleUpdatedPayload } from "../../typings";

export const created = (data: RoleCreatedPayload, client: Client) => {
    const role = new Role(data.role, client);
    client.emit("roleCreated", role);
};

export const updated = (data: RoleUpdatedPayload, client: Client) => {
    const role = new Role(data.role, client);
    client.emit("roleUpdated", role);
};

export const deleted = (data: RoleDeletedPayload, client: Client) => {
    const role = new Role(data.role, client);
    client.emit("roleDeleted", role);
};