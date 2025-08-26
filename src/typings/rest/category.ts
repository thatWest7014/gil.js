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