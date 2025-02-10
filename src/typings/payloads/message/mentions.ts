export type MentionsPayload = {
    users?: { id: string }[];
    channels?: { id: string }[];
    roles?: { id: string }[];
    everyone?: boolean;
    here?: boolean;
};