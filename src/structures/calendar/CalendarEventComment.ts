import { CalendarEventCommentPayload, MentionsPayload } from "../../typings";
import { Client } from "../Client";

export class CalendarEventComment {
    /** The ID of the comment. */
    id: number;
    /** The content of the comment. */
    content: string;
    /** The creation date of the comment. */
    createdAt: Date;
    /** The date when the comment was updated. */
    updatedAt?: Date;
    /** The ID of the calendar event that this comment belongs to. */
    calendarEventId: number;
    /** The ID of the channel where this comment was created. */
    channelId: string;
    /** The ID of the user who created the comment. */
    createdBy: string;
    /** The mentions of the comment. */
    mentions?: MentionsPayload;

    constructor(data: CalendarEventCommentPayload, public client: Client) {
        this.id = data.id;
        this.content = data.content;
        this.createdAt = new Date(data.createdAt);
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
        this.calendarEventId = data.calendarEventId;
        this.channelId = data.channelId;
        this.createdBy = data.createdBy;
        this.mentions = data.mentions;
    };
};