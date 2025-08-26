import { 
    EmbedAuthorPayload, 
    EmbedFieldPayload, 
    EmbedFooterPayload, 
    EmbedImagePayload, 
    EmbedPayload, 
    EmbedThumbnailPayload 
} from "../typings";

export class Embed {
    /** The title of the embed. */
    title?: string;
    /** The description of the embed. */
    description?: string;
    /** The URl of the embed, accessible by clicking on the embed's title. */
    url?: string;
    /** The color of the embed. */
    color?: number;
    /** The footer of the embed. */
    footer?: EmbedFooterPayload;
    /** The timestamp of the embed. */
    timestamp?: Date;
    /** The thumbnail of the embed. */
    thumbnail?: EmbedThumbnailPayload;
    /** The image of the embed. */
    image?: EmbedImagePayload;
    /** The author of the embed. */
    author?: EmbedAuthorPayload;
    /** The fields of the embed. */
    fields?: EmbedFieldPayload[];

    constructor(data?: EmbedPayload) {
        if (data) {
            this.title = data.title;
            this.description = data.description;
            this.url = data.url;
            this.color = data.color;
            this.footer = data.footer;
            this.timestamp = data.timestamp ? new Date(data.timestamp) : undefined;
            this.image = data.image;
            this.author = data.author;
            this.fields = data.fields;
        };
    };

    /**
     * Set the title of the embed.
     * @param title The title.
     * @returns {Embed} The embed.
     */
    setTitle(title: string) {
        this.title = title;
        return this;
    };

    /**
     * Set the description of the embed.
     * @param description The description.
     * @returns {Embed} The embed.
     */
    setDescription(description: string) {
        this.description = description;
        return this;
    };

    /**
     * Set the URL of the embed.
     * @param url The URL.
     * @returns {Embed} The embed.
     */
    setURL(url: string) {
        this.url = url;
        return this;
    };

    /**
     * Set the color of the embed.
     * @param color The color.
     * @returns {Embed} The embed.
     */
    setColor(color: number) {
        this.color = color;
        return this;
    };

    /**
     * Set the footer of the embed.
     * @param text Text of the footer.
     * @param icon_url URL of a small image to put on the footer.
     * @returns {Embed} The embed.
     */
    setFooter(text: string, icon_url?: string) {
        this.footer = { text, icon_url };
        return this;
    };

    /**
     * Set the timestamp of the embed.
     * @param timestamp The timestamp.
     * @returns {Embed} The embed.
     */
    setTimestamp(timestamp: Date) {
        this.timestamp = timestamp;
        return this;
    };

    /**
     * Set the thumbnail of the embed.
     * @param url The URL.
     * @returns {Embed} The embed.
     */
    setThumbnail(url: string) {
        this.thumbnail = { url };
        return this;
    };

    /**
     * Set the image of the embed.
     * @param url The URL.
     * @returns {Embed} The embed.
     */
    setImage(url: string) {
        this.image = { url };
        return this;
    };

    /**
     * Set the author of the embed.
     * @param name Name of the author.
     * @param url URL to linkify the author's `name` field.
     * @param icon_url URL of a small image to display to the left of the author's name.
     * @returns {Embed} The embed.
     */
    setAuthor(name?: string, url?: string, icon_url?: string) {
        this.author = { name, url, icon_url };
        return this;
    };

    /**
     * Set the fields of the embed.
     * @param fields The fields.
     * @returns {Embed} The embed.
     */
    setFields(fields: EmbedFieldPayload | EmbedFieldPayload[]) {
        this.fields = fields instanceof Array ? fields : [fields];
        return this;
    };

    toJSON() {
        return {
            title: this.title,
            description: this.description,
            url: this.url,
            color: this.color,
            footer: this.footer,
            timestamp: this.timestamp?.toISOString(),
            thumbnail: this.thumbnail,
            image: this.image,
            author: this.author,
            fields: this.fields,
        } as EmbedPayload;
    };
};