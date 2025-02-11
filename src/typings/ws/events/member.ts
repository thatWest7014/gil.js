import { SocialLink } from "../../payloads";
import { ServerMemberBanPayload, ServerMemberPayload } from "../../payloads/member";

export type ServerMemberJoinedPayload = {
    serverId: string;
    member: ServerMemberPayload;
    serverMemberCount: number;
};

export type ServerMemberRemovedPayload = {
    serverId: string;
    userId: string;
    isKick?: boolean;
    isBan?: boolean;
};

export type ServerMemberBannedPayload = {
    serverId: string;
    serverMemberBan: ServerMemberBanPayload;
};

export type ServerMemberUnbannedPayload = {
    serverId: string;
    serverMemberBan: ServerMemberBanPayload;
};

export type ServerMemberUpdatedPayload = {
    serverId: string;
    userInfo: {
        id: string;
        nickname?: string;
    };
};

export type ServerMemberSocialLinkCreatedPayload = {
    serverId: string;
    socialLink: SocialLink;
};

export type ServerMemberSocialLinkUpdatedPayload = {
    serverId: string;
    socialLink: SocialLink;
};

export type ServerMemberSocialLinkDeletedPayload = {
    serverId: string;
    socialLink: SocialLink;
};