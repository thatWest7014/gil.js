import { Ban } from "../../structures/Ban";
import { Client } from "../../structures/Client";
import { Member } from "../../structures/Member";
import { 
    ServerMemberBannedPayload, 
    ServerMemberJoinedPayload, 
    ServerMemberRemovedPayload, 
    ServerMemberUnbannedPayload 
} from "../../typings";

export const joined = (data: ServerMemberJoinedPayload, client: Client) => {
    const member = new Member(data.member, client);
    client.emit("memberJoined", member, data.serverId, data.serverMemberCount);
};

export const removed = (data: ServerMemberRemovedPayload, client: Client) => {
    client.emit("memberRemoved", data.userId, data.serverId, (data.isKick || false), (data.isBan || false));
};

export const banned = (data: ServerMemberBannedPayload, client: Client) => {
    const ban = new Ban(data.serverMemberBan, client);
    client.emit("memberBanned", ban, data.serverId)
};

export const unbanned = (data: ServerMemberUnbannedPayload, client: Client) => {
    const ban = new Ban(data.serverMemberBan, client);
    client.emit("memberUnbanned", ban, data.serverId)
};