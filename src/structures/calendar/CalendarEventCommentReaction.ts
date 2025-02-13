import { CalendarEventCommentReactionPayload, EmotePayload } from "../../typings";
import { Client } from "../Client";

export class CalendarEventCommentReaction {
    /** The ID of the channel where the reaction was created. */
    channelId: string;
    /** The ID of the user who created the reaction. */
    createdBy: string;
    /** The emote of the reaction. */
    emote: EmotePayload;
    /** The ID of the calendar event where the reaction was created. */
    eventId: number;
    /** The ID of the calendar event comment where the reaction was created. */
    commentId: number;

    constructor(data: CalendarEventCommentReactionPayload, public client: Client) {
        this.channelId = data.channelId;
        this.createdBy = data.createdBy;
        this.emote = data.emote;
        this.eventId = data.calendarEventId;
        this.commentId = data.calendarEventCommentId;
    };
};