export type CreateAnnouncementBody = {
    title: string;
    content: string;
};

export type UpdateAnnouncementBody = {
    title?: string;
    content?: string;
};

export type CreateAnnouncementCommentBody = {
    content: string;
};

export type UpdateAnnouncementCommentBody = {
    content: string;
};