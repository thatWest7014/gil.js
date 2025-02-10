import { Client } from "../structures/Client";
import { WebSocketEvent } from "../typings/ws/events";
import * as message from "./events/message";

/**
 * Credit: Guilded.TS
 * @link https://github.com/guildedts/guilded.ts/blob/49a40b4699d1283d52d385ec6a2f544f19956b9c/packages/guilded.ts/src/ws/index.ts#L16
 */
const WSEventHandler: {
    [event in WebSocketEvent]?: (data: any, client: Client) => void | Promise<void>;
} = {
    [WebSocketEvent.ChatMessageCreated]: message.created,
    [WebSocketEvent.ChatMessageUpdated]: message.updated,
    [WebSocketEvent.ChatMessageDeleted]: message.deleted,
};

export const handleWSEvent = (event: WebSocketEvent, data: any, client: Client) => {
    return WSEventHandler[event]?.(data as any, client);
};