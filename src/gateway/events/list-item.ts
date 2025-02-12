import { Client } from "../../structures/Client";
import { ListItem } from "../../structures/ListItem";
import { 
    ListItemCompletedPayload,
    ListItemCreatedPayload, 
    ListItemDeletedPayload, 
    ListItemUncompletedPayload, 
    ListItemUpdatedPayload 
} from "../../typings/ws/events/channel/list";

export const created = (data: ListItemCreatedPayload, client: Client) => {
    const item = new ListItem(data.listItem, client);
    client.emit("listItemCreated", item);
};

export const updated = (data: ListItemUpdatedPayload, client: Client) => {
    const item = new ListItem(data.listItem, client);
    client.emit("listItemUpdated", item);
};

export const deleted = (data: ListItemDeletedPayload, client: Client) => {
    const item = new ListItem(data.listItem, client);
    client.emit("listItemDeleted", item);
};

export const completed = (data: ListItemCompletedPayload, client: Client) => {
    const item = new ListItem(data.listItem, client);
    client.emit("listItemCompleted", item);
};

export const uncompleted = (data: ListItemUncompletedPayload, client: Client) => {
    const item = new ListItem(data.listItem, client);
    client.emit("listItemUncompleted", item);
};