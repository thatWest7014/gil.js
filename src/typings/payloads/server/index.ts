export * from "./channel";
export * from "./webhook";

export type ServerPayload = {
    id: string;
    ownerId: string;
    type?: ServerType;
    name: string;
    url?: string;
    about?: string;
    avatar?: string;
    banner?: string;
    timezone?: string;
    isVerified?: boolean;
    defaultChannelId?: string;
    createdAt: string;
};

export enum ServerType {
    Team = "team",
    Organization = "organization",
    Community = "community",
    Clan = "clan",
    Guild = "guild",
    Friends = "friends",
    Streaming = "streaming",
    Other = "other",
};