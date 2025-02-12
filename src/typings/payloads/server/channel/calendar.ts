import { EmotePayload, MentionsPayload } from "../../../payloads";

export type CalendarEventPayload = {
    id: number;
    serverId: string;
    groupId: string;
    channelId: string;
    name: string;
    description?: string;
    location?: string;
    url?: string;
    color?: number;
    repeats?: boolean;
    seriesId?: string;
    roleIds?: number[];
    rsvpDisabled?: boolean;
    isAllDay?: boolean;
    rsvpLimit?: number;
    autofillWaitlist?: boolean;
    startsAt: string;
    duration?: number;
    isPrivate?: boolean;
    mentions?: MentionsPayload;
    createdAt: string;
    createdBy: string;
    cancellation?: CalendarEventCancellationPayload;
};

export type CalendarEventCancellationPayload = {
    description?: string;
    createdBy: string;
};

export type CalendarEventRsvpPayload = {
    calendarEventId: number;
    channelId: string;
    serverId: string;
    userId: string;
    status: CalendarEventRsvpStatus;
    createdBy: string;
    createdAt: string;
    updatedBy?: string;
    updatedAt?: string;
};

export enum CalendarEventRsvpStatus {
    Going = "going",
    Maybe = "maybe",
    Declined = "declined",
    Invited = "invited",
    Waitlisted = "waitlisted",
    NotResponded = "not responded",
};

/** Comment */

export type CalendarEventCommentPayload = {
    id: number;
    content: string;
    createdAt: string;
    updatedAt?: string;
    calendarEventId: number;
    channelId: string;
    createdBy: string;
    mentions?: MentionsPayload;
};

/** Reaction */

export type CalendarEventReactionPayload = {
    channelId: string;
    createdBy: string;
    emote: EmotePayload;
    calendarEventId: number;
};

export type CalendarEventCommentReactionPayload = {
    channelId: string;
    createdBy: string;
    emote: EmotePayload;
    calendarEventId: number;
    calendarEventCommentId: number;
};

/** Series */

export type CalendarEventSeriesPayload = {
    id: string;
    serverId: string;
    channelId: string;
};