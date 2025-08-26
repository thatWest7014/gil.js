import { BaseManager } from "./BaseManager";
import { CalendarEvent } from "../structures/calendar/CalendarEvent";
import { CalendarEventComment } from "../structures/calendar/CalendarEventComment";
import { CalendarEventRsvp } from "../structures/calendar/CalendarEventRsvp";
import { 
    BulkCreateOrUpdateCalendarEventRSVP, 
    CreateCalendarEventBody, 
    CreateCalendarEventCommentBody, 
    CreateOrUpdateCalendarEventRSVP, 
    UpdateCalendarEventBody, 
    UpdateCalendarEventCommentBody, 
    UpdateCalendarEventSeriesBody 
} from "../typings";

export class CalendarEventManager extends BaseManager<number, CalendarEvent> {
    router = this.client.rest.calendarEvents;

    /**
     * Create a calendar event.
     * @param channelId The ID of the Guilded channel.
     * @param body Calendar event data.
     * @returns {CalendarEvent} The calendar event.
     */
    async create(channelId: string, body: CreateCalendarEventBody) {
        const { calendarEvent } = await this.router.create(channelId, body);
        return new CalendarEvent(calendarEvent, this.client);
    };

    /**
     * Fetch all of the calendar events in a Guilded channel.
     * @param channelId The ID of the Guilded channel.
     * @returns {CalendarEvent[]} The calendar events.
     */
    async fetchAll(channelId: string) {
        const { calendarEvents } = await this.router.getAll(channelId);
        return calendarEvents.map((calendarEvent) => new CalendarEvent(calendarEvent, this.client));
    };

    /**
     * Fetch a calendar event from a Guilded channel.
     * @param channelId The ID of the Guilded channel.
     * @param calendarEventId The ID of the calendar event.
     * @returns {CalendarEvent} The calendar event.
     */
    async fetch(channelId: string, calendarEventId: number) {
        const { calendarEvent } = await this.router.get(channelId, calendarEventId);
        return new CalendarEvent(calendarEvent, this.client);
    };

    /**
     * Update a calendar event.
     * @param channelId The ID of the Guilded channel.
     * @param calendarEventId The ID of the calendar event.
     * @param body Calendar event data.
     * @returns {CalendarEvent} The calendar event.
     */
    async update(channelId: string, calendarEventId: number, body: UpdateCalendarEventBody) {
        const { calendarEvent } = await this.router.update(channelId, calendarEventId, body);
        return new CalendarEvent(calendarEvent, this.client);
    };
    
    /**
     * Delete a calendar event.
     * @param channelId The ID of the Guilded channel.
     * @param calendarEventId The ID of the calendar event.
     */
    async delete(channelId: string, calendarEventId: number) {
        return await this.router.delete(channelId, calendarEventId);
    };
    
    // RSVP

    /**
     * Get a calendar event's RSVP.
     * @param channelId The ID of the Guilded channel.
     * @param calendarEventId The ID of the calendar event.
     * @param userId The ID of the Guilded user.
     * @returns {CalendarEventRsvp} The calendar event RSVP.
     */
    async getRSVP(channelId: string, calendarEventId: number, userId: string) {
        const { calendarEventRsvp } = await this.router.getRSVP(channelId, calendarEventId, userId);
        return new CalendarEventRsvp(calendarEventRsvp, this.client);
    };
    
    /**
     * Create/update a calendar event's RSVP.
     * @param channelId The ID of the Guilded channel.
     * @param calendarEventId The ID of the calendar event.
     * @param userId The ID of the Guilded user.
     * @param body Calendar event RSVP data.
     * @returns {CalendarEventRsvp} The calendar event RSVP.
     */
    async createOrUpdateRSVP(channelId: string, calendarEventId: number, userId: string, body: CreateOrUpdateCalendarEventRSVP) {
        const { calendarEventRsvp } = await this.router.createOrUpdateRSVP(channelId, calendarEventId, userId, body);
        return new CalendarEventRsvp(calendarEventRsvp, this.client);
    };
    
    /**
     * Delete a calendar event's RSVP.
     * @param channelId The ID of the Guilded channel.
     * @param calendarEventId The ID of the calendar event.
     * @param userId The ID of the Guilded user.
     */
    async deleteRSVP(channelId: string, calendarEventId: number, userId: string) {
        return await this.router.deleteRSVP(channelId, calendarEventId, userId);
    };
    
    /**
     * Get all of a calendar event's RSVPs.
     * @param channelId The ID of the Guilded channel.
     * @param calendarEventId The ID of the calendar event.
     * @returns {CalendarEventRsvp[]} The calendar event RSVP.
     */
    async getAllRSVPS(channelId: string, calendarEventId: number) {
        const { calendarEventRsvps } = await this.router.getAllRSVPS(channelId, calendarEventId);
        return calendarEventRsvps.map((rsvp) => new CalendarEventRsvp(rsvp, this.client));
    };
    
    /**
     * Get a calendar event's RSVP.
     * @param channelId The ID of the Guilded channel.
     * @param calendarEventId The ID of the calendar event.
     * @param body Calendar event RSVPs data.
     */
    async bulkCreateOrUpdateRSVPs(channelId: string, calendarEventId: number, body: BulkCreateOrUpdateCalendarEventRSVP) {
        return await this.router.bulkCreateOrUpdateRSVPs(channelId, calendarEventId, body);
    };
    
    // Comments

    /**
     * Create a comment in a calendar event.
     * @param channelId The ID of the Guilded channel.
     * @param calendarEventId The ID of the calendar event.
     * @param body Calendar event comment data.
     * @returns {CalendarEventComment} The calendar event comment.
     */
    async createComment(channelId: string, calendarEventId: number, body: CreateCalendarEventCommentBody) {
        const { calendarEventComment } = await this.router.createComment(channelId, calendarEventId, body);
        return new CalendarEventComment(calendarEventComment, this.client);
    };
    
    /**
     * Get all the comment in a calendar event.
     * @param channelId The ID of the Guilded channel.
     * @param calendarEventId The ID of the calendar event.
     * @returns {CalendarEventComment[]} The calendar event comments.
     */
    async getAllComments(channelId: string, calendarEventId: number) {
        const { calendarEventComments } = await this.router.getAllComments(channelId, calendarEventId);
        return calendarEventComments.map((comment) => new CalendarEventComment(comment, this.client));
    };
    
    /**
     * Get a comment in a calendar event.
     * @param channelId The ID of the Guilded channel.
     * @param calendarEventId The ID of the calendar event.
     * @param calendarEventCommentId The ID of the calendar event's comment.
     * @returns {CalendarEventComment} The calendar event comment.
     */
    async getComment(channelId: string, calendarEventId: number, calendarEventCommentId: number) {
        const { calendarEventComment } = await this.router.getComment(channelId, calendarEventId, calendarEventCommentId);
        return new CalendarEventComment(calendarEventComment, this.client);
    };
    
    /**
     * Update a comment in a calendar event.
     * @param channelId The ID of the Guilded channel.
     * @param calendarEventId The ID of the calendar event.
     * @param calendarEventCommentId The ID of the calendar event's comment.
     * @param body Calendar event comment data.
     * @returns {CalendarEventComment} The calendar event comment.
     */
    async updateComment(channelId: string, calendarEventId: number, calendarEventCommentId: number, body: UpdateCalendarEventCommentBody) {
        const { calendarEventComment } = await this.router.updateComment(channelId, calendarEventId, calendarEventCommentId, body);
        return new CalendarEventComment(calendarEventComment, this.client);
    };
    
    /**
     * Delete a comment in a calendar event.
     * @param channelId The ID of the Guilded channel.
     * @param calendarEventId The ID of the calendar event.
     * @param calendarEventCommentId The ID of the calendar event's comment.
     */
    async deleteComment(channelId: string, calendarEventId: number, calendarEventCommentId: number) {
        return await this.router.deleteComment(channelId, calendarEventId, calendarEventCommentId);
    };
    
    // Series
    
    /**
     * Update a series of a calendar event.
     * @param channelId The ID of the Guilded channel.
     * @param calendarEventId The ID of the calendar event.
     * @param body Calendar event series data.
     */
    async updateSeries(channelId: string, calendarEventSeriesId: string, body: UpdateCalendarEventSeriesBody) {
        return await this.router.updateSeries(channelId, calendarEventSeriesId, body);
    };
    
    /**
     * Delete a series of a calendar event.
     * @param channelId The ID of the Guilded channel.
     * @param calendarEventId The ID of the calendar event.
     */
    async deleteSeries(channelId: string, calendarEventSeriesId: string) {
        return await this.router.deleteSeries(channelId, calendarEventSeriesId);
    };
};