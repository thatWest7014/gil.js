import { CalendarEventCancellationPayload, CalendarEventPayload, MentionsPayload } from "../typings";
import { Client } from "./Client";

export class CalendarEvent {
    /** The ID of the calendar event. */
    id: number;
    /** The ID of the server where the calendar event was created. */
    serverId: string;
    /** The ID of the group where the calendar event exists in. */
    groupId: string;
    /** The ID of the channel where the calendar event exists in. */
    channelId: string;
    /** The name of the calendar event. */
    name: string;
    /** The description of the calendar event. */
    description?: string;
    /** The location  of the calendar event. */
    location?: string;
    /** The URL associated with the calendar event. */
    url?: string;
    /** The color of the calendar event. */
    color?: number;
    /** Whether it is a repeating calendar event. */
    repeats?: boolean;
    /** The ID of the calendar event series. */
    seriesId?: string;
    /** The IDs of the roles to restrict the calendar event to. */
    roleIds?: number[];
    /** Whether users can RSVP to the calendar event. */
    rsvpDisabled?: boolean;
    /** Whether the calendar event is all day. */
    isAllDay?: boolean;
    /** The number of RSVPs to allow before waitlisting RSVPs */
    rsvpLimit?: number;
    /** When `rsvpLimit` is set, users from the waitlist will be added as space becomes available in the event. */
    autofillWaitlist?: boolean;
    /** When the calendar event stars. */
    startsAt: Date;
    /** The duration of the calendar event. */
    duration?: number;
    /** Whether the calendar event is private. */
    private?: boolean;
    /** The mentions of this calendar event. */
    mentions?: MentionsPayload;
    /** The date of the calendar event's creation. */
    createdAt: Date;
    /** The ID of the user who created the calendar event. */
    createdBy: string;
    /** The cancellation details of the calendar event. */
    cancellation?: CalendarEventCancellationPayload;

    constructor(data: CalendarEventPayload, public client: Client) {
        this.id = data.id;
        this.serverId = data.serverId;
        this.groupId = data.groupId;
        this.channelId = data.channelId;
        this.name = data.name;
        this.description = data.description;
        this.location = data.location;
        this.url = data.url;
        this.color = data.color;
        this.repeats = data.repeats || false;
        this.seriesId = data.seriesId;
        this.roleIds = data.roleIds;
        this.rsvpDisabled = data.rsvpDisabled || false;
        this.isAllDay = data.isAllDay || false;
        this.rsvpLimit = data.rsvpLimit;
        this.autofillWaitlist = data.autofillWaitlist;
        this.startsAt = new Date(data.startsAt);
        this.duration = data.duration;
        this.private = data.isPrivate || false;
        this.mentions = data.mentions;
        this.createdAt = new Date(data.createdAt);
        this.createdBy = data.createdBy;
        this.cancellation = data.cancellation;
    };
};