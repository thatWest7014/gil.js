import { AnnouncementReactionPayload, EmotePayload, MentionsPayload } from "../../typings";
import { Client } from "../Client";

export class AnnouncementReaction {
    channelId: string;
    createdBy: string;
    emote: EmotePayload;
    announcementId: string;

    constructor(data: AnnouncementReactionPayload, public client: Client) {
        this.channelId = data.channelId;
        this.createdBy = data.createdBy;
        this.emote = data.emote;
        this.announcementId = data.announcementId;
    };
};