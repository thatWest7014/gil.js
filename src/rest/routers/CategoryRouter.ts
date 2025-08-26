import { CategoryPayload, CreateCategoryBody, UpdateCategoryBody } from "../../typings";
import { BaseRouter } from "./BaseRouter";

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