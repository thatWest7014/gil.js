import { Client } from "../../structures/Client";
import { Group } from "../../structures/Group";
import { 
    GroupCreatedPayload, 
    GroupDeletedPayload, 
    GroupUpdatedPayload
} from "../../typings";

export const created = (data: GroupCreatedPayload, client: Client) => {
    const group = new Group(data.group, client);
    client.emit("groupCreated", group);
};

export const updated = (data: GroupUpdatedPayload, client: Client) => {
    const group = new Group(data.group, client);
    client.emit("groupUpdated", group);
};

export const deleted = (data: GroupDeletedPayload, client: Client) => {
    const group = new Group(data.group, client);
    client.emit("groupDeleted", group);

    client.groups.cache.delete(group.id);
};