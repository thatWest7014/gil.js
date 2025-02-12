import { CalendarEventPayload, CalendarEventRsvpPayload } from "../../../payloads";

export type CalendarEventCreatedPayload = {
    serverId: string;
    calendarEvent: CalendarEventPayload;
};

export type CalendarEventUpdatedPayload = {
    serverId: string;
    calendarEvent: CalendarEventPayload;
};

export type CalendarEventDeletedPayload = {
    serverId: string;
    calendarEvent: CalendarEventPayload;
};

/** RSVP */

export type CalendarEventRsvpUpdatedPayload = {
    serverId: string;
    calendarEventRsvp: CalendarEventRsvpPayload;
};

export type CalendarEventRsvpManyUpdatedPayload = {
    serverId: string;
    calendarEventRsvps: CalendarEventRsvpPayload[];
};

export type CalendarEventRsvpDeletedPayload = {
    serverId: string;
    calendarEventRsvp: CalendarEventRsvpPayload;
};