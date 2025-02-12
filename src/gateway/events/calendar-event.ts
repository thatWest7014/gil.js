import { CalendarEvent } from "../../structures/CalendarEvent";
import { CalendarEventRsvp } from "../../structures/CalendarEventRsvp";
import { Client } from "../../structures/Client";
import { 
    CalendarEventCreatedPayload, 
    CalendarEventDeletedPayload, 
    CalendarEventRsvpDeletedPayload, 
    CalendarEventRsvpManyUpdatedPayload, 
    CalendarEventRsvpUpdatedPayload, 
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