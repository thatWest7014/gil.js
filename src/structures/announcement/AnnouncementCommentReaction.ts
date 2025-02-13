import { AnnouncementCommentReactionPayload, EmotePayload } from "../../typings";
import { Client } from "../Client";

export class AnnouncementCommentReaction {
    channelId: string;
    createdBy: string;
    emote: EmotePayload;
    announcementId: string;
    commentId: number;

    constructor(data: AnnouncementCommentReactionPayload, public client: Client) {
        this.channelId = data.channelId;
        this.createdBy = data.createdBy;
        this.emote = data.emote;
        this.announcementId = data.announcementId;
        this.commentId = data.announcementCommentId;
    };
};