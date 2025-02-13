export type GroupPayload = {
    id: string;
    serverId: string;
    name: string;
    description?: string;
    avatar?: string;
    isHome?: boolean;
    emoteId?: number;
    isPublic?: boolean;
    createdAt: string;
    createdBy: string;
    updatedAt?: string;
    updatedBy?: string;
    archivedAt?: string;
    archivedBy?: string;
};