import { Ban } from "../../structures/Ban";
import { Client } from "../../structures/Client";
import { Member } from "../../structures/Member";
import { 
    ServerMemberBannedPayload, 
    ServerMemberJoinedPayload, 
    ServerMemberRemovedPayload, 
    ServerMemberSocialLinkCreatedPayload, 
    ServerMemberSocialLinkDeletedPayload, 
    ServerMemberSocialLinkUpdatedPayload, 
    ServerMemberUnbannedPayload, 
    ServerMemberUpdatedPayload
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

export const updated = (data: ServerMemberUpdatedPayload, client: Client) => {
    const updatedData = { 
        serverId: data.serverId, 
        userId: data.userInfo.id, 
        nickname: data.userInfo.nickname,
    };
    client.emit("memberUpdated", updatedData);
};

export const socialLinkCreated = (data: ServerMemberSocialLinkCreatedPayload, client: Client) => {
    const updatedData = {
        serverId: data.serverId,
        userId: data.socialLink.userId,
        socialLink: data.socialLink,
    };
    client.emit("memberUpdated", updatedData);
};

export const socialLinkUpdated = (data: ServerMemberSocialLinkUpdatedPayload, client: Client) => {
    const updatedData = {
        serverId: data.serverId,
        userId: data.socialLink.userId,
        socialLink: data.socialLink,
    };
    client.emit("memberUpdated", updatedData);
};

export const socialLinkDeleted = (data: ServerMemberSocialLinkDeletedPayload, client: Client) => {
    const updatedData = {
        serverId: data.serverId,
        userId: data.socialLink.userId,
        socialLink: data.socialLink,
    };
    client.emit("memberUpdated", updatedData);
};