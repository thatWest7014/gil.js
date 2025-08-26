import { Client } from "../Client";
import { 
    AnnouncementCommentPayload, 
    MentionsPayload 
} from "../../typings";

export class AnnouncementComment {
    id: number;
    content: string;
    createdAt: Date;
    updatedAt?: Date;
    createdBy: string;
    channelId: string;
    announcementId: string;
    mentions?: MentionsPayload;

    constructor(data: AnnouncementCommentPayload, public client: Client) {
        this.id = data.id;
        this.content = data.content;
        this.createdAt = new Date(data.createdAt);
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : undefined;
        this.createdBy= data.createdBy;
        this.channelId = data.channelId;
        this.announcementId = data.announcementId;
        this.mentions = data.mentions;
    };
};