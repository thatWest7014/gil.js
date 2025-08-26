export type CreateCalendarEventBody = {
    name: string;
    description?: string;
    location?: string;
    startsAt?: string;
    url?: string;
    color?: number;
    isAllDay?: boolean;
    rsvpDisabled?: boolean;
    rsvpLimit?: number;
    autofillWaitlist?: boolean;
    duration?: number;
    isPrivate?: boolean;
    roleIds?: number[];
    repeatInfo?: {
        type: CalendarEventRepeatInfoType;
        every?: {
            count: number;
            interval: CalendarEventRepeatInfoEveryInterval;
        };
        endsAfterOccurrences?: number;
        endDate?: string;
        on?: CalendarEventRepeatInfoOn[];
    };
};

export enum CalendarEventRepeatInfoType {
    Once = "once",
    EveryDay = "everyDay",
    EveryWeek = "everyWeek",
    EveryMonth = "everyMonth",
    Custom = "custom",
};

export enum CalendarEventRepeatInfoEveryInterval {
    Day = "day",
    Month = "month",
    Year = "year",
    Week = "week",
};

export enum CalendarEventRepeatInfoOn {
    Sunday = "sunday",
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday",
    Thursday = "thursday",
    Friday = "friday",
    Saturday = "saturday",
};

export type UpdateCalendarEventBody = {
    name?: string;
    description?: string;
    location?: string;
    startsAt?: string;
    url?: string;
    color?: number;
    isAllDay?: boolean;
    rsvpDisabled?: boolean;
    rsvpLimit?: number;
    autofillWaitlist?: boolean;
    duration?: number;
    isPrivate?: boolean;
    roleIds?: number[];
    cancellation?: {
        description?: string;
    };
};

export type CreateOrUpdateCalendarEventRSVP = {
    status: "going" | "maybe" | "declined" | "invited";
};

export type BulkCreateOrUpdateCalendarEventRSVP = {
    userIds: string[];
    status: "going" | "maybe" | "declined" | "invited";
};

// Comments

export type CreateCalendarEventCommentBody = {
    content: string;
};

export type UpdateCalendarEventCommentBody = {
    content: string;
};

// Series

export type UpdateCalendarEventSeriesBody = {
    name: string;
    description?: string;
    location?: string;
    startsAt?: string;
    url?: string;
    color?: number;
    isAllDay?: boolean;
    rsvpDisabled?: boolean;
    rsvpLimit?: number;
    autofillWaitlist?: boolean;
    duration?: number;
    isPrivate?: boolean;
    roleIds?: number[];
    repeatInfo?: {
        type: CalendarEventRepeatInfoType;
        every?: {
            count: number;
            interval: CalendarEventRepeatInfoEveryInterval;
        };
        endsAfterOccurrences?: number;
        endDate?: string;
        on?: CalendarEventRepeatInfoOn[];
    };
    calendarEventId: number;
};