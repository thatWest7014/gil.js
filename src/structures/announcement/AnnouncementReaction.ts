import { Client } from "../Client";
import { 
    AnnouncementReactionPayload, 
    EmotePayload 
} from "../../typings";

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