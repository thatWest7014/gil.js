import { ServerMemberPayload } from "../typings/payloads/member";
import { Client } from "./Client";
import { User } from "./User";

export class Member {
    /** The user info of the member. */
    user: User;
    /** The IDs of the member's roles. */
    roleIds: number[];
    /** The nickname of the member. */
    nickname?: string;
    /** The date when the member joined. */
    joinedAt: Date;
    /** Whether the member is the server owner. */
    owner?: boolean

    constructor(data: ServerMemberPayload, public client: Client) {
        this.user = new User(data.user, client);
        this.roleIds = data.roleIds || [];
        this.nickname = data.nickname;
        this.joinedAt = new Date(data.joinedAt);
        this.owner = data.isOwner || false;
    };
};