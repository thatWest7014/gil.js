export type EmbedPayload = {
    title?: string;
    description?: string;
    url?: string;
    color?: number;
    footer?: EmbedFooterPayload;
    timestamp?: string;
    thumbnail?: EmbedThumbnailPayload;
    image?: EmbedImagePayload;
    author?: EmbedAuthorPayload;
    fields?: EmbedFieldPayload[];
};

export type EmbedFooterPayload = {
    icon_url?: string;
    text: string;
};

export type EmbedThumbnailPayload = {
    url?: string;
};

export type EmbedImagePayload = {
    url?: string;
};

export type EmbedAuthorPayload = {
    name?: string;
    url?: string;
    icon_url?: string
};

export type EmbedFieldPayload = {
    name: string;
    value: string;
    inline?: boolean;
};