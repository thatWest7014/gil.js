import { Client } from "../../structures/Client";
import { Server } from "../../structures/Server";
import { 
    BotServerMembershipCreatedPayload, 
    BotServerMembershipDeletedPayload 
} from "../../typings";

export const botAdded = (data: BotServerMembershipCreatedPayload, client: Client) => {
    const server = new Server(data.server, client);
    client.emit("botServerAdded", server, data.createdBy);
};

export const botRemoved = (data: BotServerMembershipDeletedPayload, client: Client) => {
    const server = new Server(data.server, client);
    client.emit("botServerRemoved", server, data.deletedBy);
};