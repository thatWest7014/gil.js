import { CategoryPayload } from "../../typings";
import { BaseRouter } from "./BaseRouter";

export type CreateCategoryBody = {
    /** The name of the category. */
    name: string;
    /** The ID of the group where this category exists in. */
    groupId?: string;
};

export type UpdateCategoryBody = {
    /** The name of the category. */
    name: string;
    /** The priority of the category. */
    priority?: number;
};

export class CategoryRouter extends BaseRouter {
    async create(serverId: string, data: CreateCategoryBody) {
        return this.rest.post<{ category: CategoryPayload }, CreateCategoryBody>(`/servers/${serverId}/categories`, data);
    };

    async get(serverId: string, categoryId: number) {
        return this.rest.get<{ category: CategoryPayload }>(`/servers/${serverId}/categories/${categoryId}`);
    };

    async update(serverId: string, categoryId: number, data: UpdateCategoryBody) {
        return this.rest.patch<{ category: CategoryPayload }, UpdateCategoryBody>(`/servers/${serverId}/categories/${categoryId}`, data);
    };

    async delete(serverId: string, categoryId: number) {
        return this.rest.delete(`/servers/${serverId}/categories/${categoryId}`);
    };
};