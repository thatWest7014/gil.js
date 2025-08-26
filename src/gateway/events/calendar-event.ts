import { CalendarEvent } from "../../structures/calendar/CalendarEvent";
import { CalendarEventComment } from "../../structures/calendar/CalendarEventComment";
import { CalendarEventCommentReaction } from "../../structures/calendar/CalendarEventCommentReaction";
import { CalendarEventReaction } from "../../structures/calendar/CalendarEventReaction";
import { CalendarEventRsvp } from "../../structures/calendar/CalendarEventRsvp";
import { CalendarEventSeries } from "../../structures/calendar/CalendarEventSeries";
import { Client } from "../../structures/Client";
import { 
    CalendarEventCommentCreatedPayload,
    CalendarEventCommentDeletedPayload,
    CalendarEventCommentReactionCreatedPayload,
    CalendarEventCommentReactionDeletedPayload,
    CalendarEventCommentUpdatedPayload,
    CalendarEventCreatedPayload, 
    CalendarEventDeletedPayload, 
    CalendarEventReactionCreatedPayload, 
    CalendarEventReactionDeletedPayload, 
    CalendarEventRsvpDeletedPayload, 
    CalendarEventRsvpManyUpdatedPayload, 
    CalendarEventRsvpUpdatedPayload, 
    CalendarEventSeriesDeletedPayload, 
    CalendarEventSeriesUpdatedPayload, 
    CalendarEventUpdatedPayload 
} from "../../typings";

export const created = (data: CalendarEventCreatedPayload, client: Client) => {
    const event = new CalendarEvent(data.calendarEvent, client);
    client.emit("calendarEventCreated", event);
};

export const updated = (data: CalendarEventUpdatedPayload, client: Client) => {
    const event = new CalendarEvent(data.calendarEvent, client);
    client.emit("calendarEventUpdated", event);
};

export const deleted = (data: CalendarEventDeletedPayload, client: Client) => {
    const event = new CalendarEvent(data.calendarEvent, client);
    client.emit("calendarEventDeleted", event);
};

/** RSVP */

export const rsvpUpdated = (data: CalendarEventRsvpUpdatedPayload, client: Client) => {
    const rsvp = new CalendarEventRsvp(data.calendarEventRsvp, client);
    client.emit("calendarEventRsvpUpdated", [rsvp]);
};

export const rsvpManyUpdated = (data: CalendarEventRsvpManyUpdatedPayload, client: Client) => {
    const rsvps = data.calendarEventRsvps.map(
        (calendarEventRsvp) => new CalendarEventRsvp(calendarEventRsvp, client)
    );
    client.emit("calendarEventRsvpUpdated", rsvps);
};

export const rsvpDeleted = (data: CalendarEventRsvpDeletedPayload, client: Client) => {
    const rsvp = new CalendarEventRsvp(data.calendarEventRsvp, client);
    client.emit("calendarEventRsvpUpdated", [rsvp]);
};

/** Comment */

export const commentCreated = (data: CalendarEventCommentCreatedPayload, client: Client) => {
    const comment = new CalendarEventComment(data.calendarEventComment, client);
    client.emit("calendarEventCommentCreated", comment, data.serverId);
};

export const commentUpdated = (data: CalendarEventCommentUpdatedPayload, client: Client) => {
    const comment = new CalendarEventComment(data.calendarEventComment, client);
    client.emit("calendarEventCommentUpdated", comment, data.serverId);
};

export const commentDeleted = (data: CalendarEventCommentDeletedPayload, client: Client) => {
    const comment = new CalendarEventComment(data.calendarEventComment, client);
    client.emit("calendarEventCommentDeleted", comment, data.serverId);
};

/** Reaction */

export const reactionCreated = (data: CalendarEventReactionCreatedPayload, client: Client) => {
    const reaction = new CalendarEventReaction(data.reaction, client);
    client.emit("calendarEventReacted", reaction, data.serverId);
};

export const reactionDeleted = (data: CalendarEventReactionDeletedPayload, client: Client) => {
    const reaction = new CalendarEventReaction(data.reaction, client);
    client.emit("calendarEventUnreacted", reaction, data.serverId);
};

/** Comment Reaction */

export const commentReactionCreated = (data: CalendarEventCommentReactionCreatedPayload, client: Client) => {
    const reaction = new CalendarEventCommentReaction(data.reaction, client);
    client.emit("calendarEventCommentReacted", reaction, data.serverId);
};

export const commentReactionDeleted = (data: CalendarEventCommentReactionDeletedPayload, client: Client) => {
    const reaction = new CalendarEventCommentReaction(data.reaction, client);
    client.emit("calendarEventCommentUnreacted", reaction, data.serverId);
};

/** Series */

export const seriesUpdated = (data: CalendarEventSeriesUpdatedPayload, client: Client) => {
    const series = new CalendarEventSeries(data.calendarEventSeries, client);
    client.emit("calendarEventSeriesUpdated", series, data.calendarEventId);
};

export const seriesDeleted = (data: CalendarEventSeriesDeletedPayload, client: Client) => {
    const series = new CalendarEventSeries(data.calendarEventSeries, client);
    client.emit("calendarEventSeriesDeleted", series, data.calendarEventId);
};