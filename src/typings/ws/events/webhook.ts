import { WebhookPayload } from "../../payloads";

export type ServerWebhookCreated = {
    serverId: string;
    webhook: WebhookPayload;
};

export type ServerWebhookUpdated = {
    serverId: string;
    webhook: WebhookPayload;
};