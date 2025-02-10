import { Client } from "../../structures/Client";
import { Message } from "../../structures/Message";
import { 
    ChatMessageCreatedPayload, 
    ChatMessageDeletedPayload, 
    ChatMessageUpdatedPayload 
} from "../../typings/ws/events/message";

export const created = (data: ChatMessageCreatedPayload, client: Client) => {
    const message = new Message(data.message, client);
    client.emit("messageCreated", message);
};

export const updated = (data: ChatMessageUpdatedPayload, client: Client) => {
    const message = new Message(data.message, client);
    client.emit("messageUpdated", message);
};

export const deleted = (data: ChatMessageDeletedPayload, client: Client) => {
    const message = new Message(data.message, client);
    client.emit("messageDeleted", message);
};