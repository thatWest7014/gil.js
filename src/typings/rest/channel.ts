import { ServerChannelType, ServerChannelVisibility } from "../payloads";

export type CreateChannelBody = {
    /** The name of the channel. */
    name: string;
    /** The topic of the channel. */
    topic?: string;
    /** The visibility of the channel. */
    visibility?: ServerChannelVisibility;
    /** The type of the channel. */
    type: ServerChannelType;
    /** The ID of the server where this channel exists in. */
    serverId?: string;
    /** The ID of the group where this channel exists in. */
    groupId?: string;
    /** The ID of the category where this channel exists in. */
    categoryId?: number;
    /** The ID of the parent channel where this channel exists in. (applicable to chat, voice and stream channels) */
    parentId?: string;
    /** The ID of the message that this channel was created from. */
    messageId?: string;
};

export type UpdateChannelBody = {
    /** The name of the channel. */
    name: string;
    /** The topic of the channel. */
    topic?: string;
    /** The visibility of the channel. */
    visibility?: ServerChannelVisibility;
    /** The priority of the channel. */
    priority?: number;
};