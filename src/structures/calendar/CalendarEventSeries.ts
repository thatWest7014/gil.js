import { Client } from "../Client";
import { CalendarEventSeriesPayload } from "../../typings";

export class CalendarEventSeries {
    /** The ID of the calendar event series. */
    id: string;
    /** The ID of the server which the calendar event series belongs to. */
    serverId: string;
    /** The ID of the channel which the calendar event series belongs to. */
    channelId: string;

    constructor(data: CalendarEventSeriesPayload, public client: Client) {
        this.id = data.id;
        this.serverId = data.serverId;
        this.channelId = data.channelId;
    };
};