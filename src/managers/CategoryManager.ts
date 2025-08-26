import { Category } from "../structures/Category";
import { CreateCategoryBody, UpdateCategoryBody } from "../typings";
import { BaseManager } from "./BaseManager";

export class CategoryManager extends BaseManager<number, Category> {
    /**
     * Create a Guilded server's category.
     * @param serverId The ID of the Guilded server.
     * @param data Category data.
     * @returns {Category} The category.
     */
    async create(serverId: string, data: CreateCategoryBody) {
        const { category } = await this.client.rest.categories.create(serverId, data);
        return new Category(category, this.client);
    };

    /**
     * Fetch a Guilded server's category.
     * @param serverId The ID of the Guilded server.
     * @param categoryId The ID of the Guilded server's category.
     * @param forced Whether to forcefully fetch the category from the API, or first attempt to find it in the cache.
     * @returns {Category}
     */
    async fetch(serverId: string, categoryId: number, forced: boolean = false) {
        const cached = this.cache.get(categoryId);
        if (cached && !forced) return cached;
        const { category } = await this.client.rest.categories.get(serverId, categoryId);
        return new Category(category, this.client);
    };

    /**
     * Update a Guilded server's category.
     * @param serverId The ID of the Guilded server.
     * @param data Category data.
     * @returns {Category} The category.
     */
    async update(serverId: string, categoryId: number, data: UpdateCategoryBody) {
        const { category } = await this.client.rest.categories.update(serverId, categoryId, data);
        return new Category(category, this.client);
    };

    /**
     * Delete a Guilded server's category.
     * @param serverId The ID of the Guilded server.
     * @param categoryId The ID of the Guilded server's category.
     */
    async delete(serverId: string, categoryId: number) {
        await this.client.rest.categories.delete(serverId, categoryId);
    };
};