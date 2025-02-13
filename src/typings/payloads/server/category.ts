export type CategoryPayload = {
    id: number;
    serverId: string;
    groupId: string;
    createdAt: string;
    updatedAt?: string;
    name: string;
    priority?: number;  
};

export type ChannelCategoryUserPermissionPayload = {
    permissions: object;
    createdAt: string;
    updatedAt?: string;
    userId: string;
    categoryId: number;
};

export type ChannelCategoryRolePermissionPayload = {
    permissions: object;
    createdAt: string;
    updatedAt?: string;
    roleId: number;
    categoryId: number;
};