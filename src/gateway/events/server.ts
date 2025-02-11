import { Client } from "../../structures/Client";
import { Server } from "../../structures/Server";
import { Webhook } from "../../structures/Webhook";
import { 
    BotServerMembershipCreatedPayload, 
    BotServerMembershipDeletedPayload, 
    ServerRolesUpdatedPayload,
    ServerWebhookCreated,
    ServerWebhookUpdated,
} from "../../typings";

export const botAdded = (data: BotServerMembershipCreatedPayload, client: Client) => {
    const server = new Server(data.server, client);
    client.emit("botServerAdded", server, data.createdBy);
};

export const botRemoved = (data: BotServerMembershipDeletedPayload, client: Client) => {
    const server = new Server(data.server, client);
    client.emit("botServerRemoved", server, data.deletedBy);
};

export const rolesUpdated = (data: ServerRolesUpdatedPayload, client: Client) => {
    client.emit("membersRolesUpdated", data.serverId, data.memberRoleIds);
};

export const webhookCreated = (data: ServerWebhookCreated, client: Client) => {
    const webhook = new Webhook(data.webhook, client);
    client.emit("webhookCreated", webhook);
};

export const webhookUpdated = (data: ServerWebhookUpdated, client: Client) => {
    const webhook = new Webhook(data.webhook, client);
    client.emit("webhookUpdated", webhook);
};