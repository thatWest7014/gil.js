import { Client } from "../structures/Client";
import { WebSocketEvent } from "../typings/ws/events";
import * as server from "./events/server";
import * as message from "./events/message";
import * as member from "./events/member";
import * as channel from "./events/channel";

/**
 * Credit: Guilded.TS
 * @link https://github.com/guildedts/guilded.ts/blob/49a40b4699d1283d52d385ec6a2f544f19956b9c/packages/guilded.ts/src/ws/index.ts#L16
 */
const WSEventHandler: {
    [event in WebSocketEvent]?: (data: any, client: Client) => void | Promise<void>;
} = {
    [WebSocketEvent.BotServerMembershipCreated]: server.botAdded,
    [WebSocketEvent.BotServerMembershipDeleted]: server.botRemoved,
    [WebSocketEvent.ChatMessageCreated]: message.created,
    [WebSocketEvent.ChatMessageUpdated]: message.updated,
    [WebSocketEvent.ChatMessageDeleted]: message.deleted,
    [WebSocketEvent.ServerMemberJoined]: member.joined,
    [WebSocketEvent.ServerMemberRemoved]: member.removed,
    [WebSocketEvent.ServerMemberBanned]: member.banned,
    [WebSocketEvent.ServerMemberUnbanned]: member.unbanned,
    [WebSocketEvent.ServerMemberUpdated]: member.updated,
    [WebSocketEvent.ServerRolesUpdated]: server.rolesUpdated,
    [WebSocketEvent.ServerChannelCreated]: channel.created,
    [WebSocketEvent.ServerChannelUpdated]: channel.updated,
    [WebSocketEvent.ServerChannelDeleted]: channel.deleted,
    [WebSocketEvent.ServerMemberSocialLinkCreated]: member.socialLinkCreated,
    [WebSocketEvent.ServerMemberSocialLinkUpdated]: member.socialLinkUpdated,
    [WebSocketEvent.ServerMemberSocialLinkDeleted]: member.socialLinkDeleted,
    [WebSocketEvent.ServerWebhookCreated]: server.webhookCreated,
    [WebSocketEvent.ServerWebhookUpdated]: server.webhookUpdated,
};

export const handleWSEvent = (event: WebSocketEvent, data: any, client: Client) => {
    return WSEventHandler[event]?.(data as any, client);
};