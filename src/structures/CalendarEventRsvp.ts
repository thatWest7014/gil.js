import { CalendarEventRsvpPayload, CalendarEventRsvpStatus } from "../typings";
import { Client } from "./Client";

export class CalendarEventRsvp {
    /** The ID of this RSVP's calendar event. */
    calendarEventId: number;
    /** The ID of the channel where this RSVP occured. */
    channelId: string;
    /** The ID of the server where this RSVP occured. */
    serverId: string;
    /** The ID of the user who RSVPed. */
    userId: string;
    /** The status of the calendar event's RSVP. */
    status: CalendarEventRsvpStatus;
    /** The ID of the user who created the RSVP. */
    createdBy: string;
    /** The creation date of the RSVP. */
    createdAt: Date;
    /** The ID of the user who updated the RSVP. */
    updatedBy?: string;
    /** The date when the RSVP was updated. */
    updatedAt?: Date;

    constructor(data: CalendarEventRsvpPayload, public client: Client) {
        this.calendarEventId = data.calendarEventId;
        this.channelId = data.channelId;
        this.serverId = data.serverId;
        this.userId = data.userId;
        this.status = data.status;
        this.createdBy = data.createdBy;
        this.createdAt = new Date(data.createdAt);
        this.updatedBy = data.updatedBy;
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
    };
};