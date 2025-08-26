import { BaseRouter } from "./BaseRouter";
import { 
    BulkCreateOrUpdateCalendarEventRSVP, 
    CalendarEventCommentPayload, 
    CalendarEventPayload, 
    CalendarEventRsvpPayload, 
    CreateCalendarEventBody, 
    CreateCalendarEventCommentBody, 
    CreateOrUpdateCalendarEventRSVP, 
    UpdateCalendarEventBody, 
    UpdateCalendarEventCommentBody, 
    UpdateCalendarEventSeriesBody 
} from "../../typings";

export class CalendarEventRouter extends BaseRouter {
    async create(channelId: string, body: CreateCalendarEventBody) {
        return await 
            this.rest.post<{ calendarEvent: CalendarEventPayload }, CreateCalendarEventBody>
            (`/channels/${channelId}/events`, body);
    };

    async getAll(channelId: string) {
        return await 
            this.rest.get<{ calendarEvents: CalendarEventPayload[] }>
            (`/channels/${channelId}/events`);
    };

    async get(channelId: string, calendarEventId: number) {
        return await 
            this.rest.get<{ calendarEvent: CalendarEventPayload }>
            (`/channels/${channelId}/events/${calendarEventId}`);
    };

    async update(channelId: string, calendarEventId: number, body: UpdateCalendarEventBody) {
        return await 
            this.rest.patch<{ calendarEvent: CalendarEventPayload }, UpdateCalendarEventBody>
            (`/channels/${channelId}/events/${calendarEventId}`, body);
    };

    async delete(channelId: string, calendarEventId: number) {
        return await
            this.rest.delete(`/channels/${channelId}/events/${calendarEventId}`);
    };

    // RSVPs

    async getRSVP(channelId: string, calendarEventId: number, userId: string) {
        return await
            this.rest.get<{ calendarEventRsvp: CalendarEventRsvpPayload }>
            (`/channels/${channelId}/events/${calendarEventId}/rsvps/${userId}`);
    };

    async createOrUpdateRSVP(channelId: string, calendarEventId: number, userId: string, body: CreateOrUpdateCalendarEventRSVP) {
        return await 
            this.rest.put<{ calendarEventRsvp: CalendarEventRsvpPayload }, CreateOrUpdateCalendarEventRSVP>
            (`/channels/${channelId}/events/${calendarEventId}/rsvps/${userId}`, body);
    };

    async deleteRSVP(channelId: string, calendarEventId: number, userId: string) {
        return await
            this.rest.delete(`/channels/${channelId}/events/${calendarEventId}/rsvps/${userId}`);
    };

    async getAllRSVPS(channelId: string, calendarEventId: number) {
        return await 
            this.rest.get<{ calendarEventRsvps: CalendarEventRsvpPayload[] }>
            (`/channels/${channelId}/events/${calendarEventId}/rsvps`);
    };

    async bulkCreateOrUpdateRSVPs(channelId: string, calendarEventId: number, body: BulkCreateOrUpdateCalendarEventRSVP) {
        return await
            this.rest.put<unknown, BulkCreateOrUpdateCalendarEventRSVP>
            (`/channels/${channelId}/events/${calendarEventId}/rsvps`, body);
    };

    // Comments

    async createComment(channelId: string, calendarEventId: number, body: CreateCalendarEventCommentBody) {
        return await 
            this.rest.post<{ calendarEventComment: CalendarEventCommentPayload }, CreateCalendarEventCommentBody>
            (`/channels/${channelId}/events/${calendarEventId}/comments`, body);
    };

    async getAllComments(channelId: string, calendarEventId: number) {
        return await
            this.rest.get<{ calendarEventComments: CalendarEventCommentPayload[] }>
            (`/channels/${channelId}/events/${calendarEventId}/comments`);
    };

    async getComment(channelId: string, calendarEventId: number, calendarEventCommentId: number) {
        return await
            this.rest.get<{ calendarEventComment: CalendarEventCommentPayload }>
            (`/channels/${channelId}/events/${calendarEventId}/comments/${calendarEventCommentId}`);
    };

    async updateComment(channelId: string, calendarEventId: number, calendarEventCommentId: number, body: UpdateCalendarEventCommentBody) {
        return await 
            this.rest.patch<{ calendarEventComment: CalendarEventCommentPayload }, UpdateCalendarEventCommentBody>
            (`/channels/${channelId}/events/${calendarEventId}/comments/${calendarEventCommentId}`, body);
    };

    async deleteComment(channelId: string, calendarEventId: number, calendarEventCommentId: number) {
        return await 
            this.rest.delete
            (`/channels/${channelId}/events/${calendarEventId}/comments/${calendarEventCommentId}`);
    };

    // Series

    async updateSeries(channelId: string, calendarEventSeriesId: string, body: UpdateCalendarEventSeriesBody) {
        return await 
            this.rest.patch<unknown, UpdateCalendarEventSeriesBody>
            (`/channels/${channelId}/event_series/${calendarEventSeriesId}`, body);
    };

    async deleteSeries(channelId: string, calendarEventSeriesId: string) {
        return await 
            this.rest.delete(`/channels/${channelId}/event_series/${calendarEventSeriesId}`);
    };
};