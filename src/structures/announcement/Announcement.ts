import { AnnouncementPayload, MentionsPayload } from "../../typings";
import { Client } from "../Client";

export class Announcement {
    id: string;
    serverId: string;
    groupId: string;
    channelId: string;
    createdAt: Date;
    createdBy: string;
    content: string;
    mentions?: MentionsPayload;
    title: string;

    constructor(data: AnnouncementPayload, public client: Client) {
        this.id = data.id;
        this.serverId = data.serverId;
        this.groupId = data.groupId;
        this.channelId = data.channelId;
        this.createdAt = new Date(data.createdAt);
        this.createdBy = data.createdBy;
        this.content = data.content;
        this.mentions = data.mentions;
        this.title = data.title;
    };
};