import { UserSummaryPayload } from "../typings";
import { ServerMemberBanPayload } from "../typings/payloads/member";
import { Client } from "./Client";

export class Ban {
    /** The user info of the banned user. */
    user: UserSummaryPayload;
    /** The reason of the ban. */
    reason?: string;
    /** The ID of the user who banned the user. */
    bannedBy: string;
    /** The date of the ban's creation. */
    bannedAt: Date;

    constructor(data: ServerMemberBanPayload, public client: Client) {
        this.user = data.user;
        this.reason = data.reason;
        this.bannedBy = data.createdBy;
        this.bannedAt = new Date(data.createdAt);
    };
};