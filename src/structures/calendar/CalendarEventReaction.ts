import { Client } from "../Client";
import { 
    CalendarEventReactionPayload, 
    EmotePayload 
} from "../../typings";

export class CalendarEventReaction {
    /** The ID of the channel where this reaction was created. */
    channelId: string;
    /** The ID of the user who created the reaction. */
    createdBy: string;
    /** The emote of the reaction. */
    emote: EmotePayload;
    /** The ID of the calendar event where this reaction was created. */
    calendarEventId: number;

    constructor(data: CalendarEventReactionPayload, public client: Client) {
        this.channelId = data.channelId;
        this.createdBy = data.createdBy;
        this.emote = data.emote;
        this.calendarEventId = data.calendarEventId;
    };
};