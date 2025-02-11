export interface UserPayload extends UserSummaryPayload {
    banner?: string;
    createdAt: string;
    status?: UserStatusPayload;
};

export type UserSummaryPayload = {
    id: string;
    type?: UserType;
    name: string;
    avatar?: string;
};

export enum UserType {
    Bot = "bot",
    User = "user",
};

export type UserStatusPayload = {
    content?: string;
    emoteId: number;
};

export interface ClientUserPayload extends UserPayload {
    botId: string;
    createdBy: string;
};

/** Social Links */

export type SocialLink = {
    type: SocialLinkType;
    userId: string;
    handle?: string;
    serviceId?: string;
    createdAt: string;
};

export enum SocialLinkType {
    Twitch = "twitch",
    Bnet = "bnet",
    PSN = "psn",
    Xbox = "xbox",
    Steam = "steam",
    Origin = "origin",
    YouTube = "youtube",
    Twitter = "twitter",
    Facebook = "facebook",
    Switch = "switch",
    Patreon = "patreon",
    Roblox = "roblox",
    Epic = "epic",
};