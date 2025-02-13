import { 
    CalendarEventCommentPayload, 
    CalendarEventCommentReactionPayload, 
    CalendarEventPayload, 
    CalendarEventReactionPayload, 
    CalendarEventRsvpPayload, 
    CalendarEventSeriesPayload
} from "../../../payloads";

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

/** Comment */

export type CalendarEventCommentCreatedPayload = {
    serverId: string;
    calendarEventComment: CalendarEventCommentPayload;
};

export type CalendarEventCommentDeletedPayload = {
    serverId: string;
    calendarEventComment: CalendarEventCommentPayload;
};

export type CalendarEventCommentUpdatedPayload = {
    serverId: string;
    calendarEventComment: CalendarEventCommentPayload;
};

/** Reaction */

export type CalendarEventReactionCreatedPayload = {
    serverId: string;
    reaction: CalendarEventReactionPayload;
};

export type CalendarEventReactionDeletedPayload = {
    serverId: string;
    reaction: CalendarEventReactionPayload;
};

/** Comment */

export type CalendarEventCommentReactionCreatedPayload = {
    serverId: string;
    reaction: CalendarEventCommentReactionPayload;
};

export type CalendarEventCommentReactionDeletedPayload = {
    serverId: string;
    reaction: CalendarEventCommentReactionPayload;
};

/** Event Series */

export type CalendarEventSeriesUpdatedPayload = {
    serverId: string;
    calendarEventSeries: CalendarEventSeriesPayload;
    calendarEventId?: number;
};

export type CalendarEventSeriesDeletedPayload = {
    serverId: string;
    calendarEventSeries: CalendarEventSeriesPayload;
    calendarEventId?: number;
};