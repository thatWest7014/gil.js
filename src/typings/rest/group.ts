export type CreateGroupBody = {
    /** The name of the group. */
    name: string;
    /** The description of the group. */
    description?: string;
    /** The ID of the emote of the group. */
    emoteId?: number;
    /** Whether the group is public. */
    isPublic?: boolean;
};

export type UpdateGroupBody = {
    /** The name of the group. */
    name: string;
    /** The description of the group. */
    description?: string;
    /** The ID of the emote of the group. */
    emoteId?: number;
    /** Whether the group is public. */
    isPublic?: boolean;
};