export type WebhookPayload = {
    id: string;
    name: string;
    avatar?: string;
    serverId: string;
    channelId: string;
    createdAt: string;
    createdBy: string;
    deletedAt?: string;
    token?: string;
};