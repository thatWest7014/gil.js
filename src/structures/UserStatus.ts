import { Client } from "./Client";
import { UserStatusPayload } from "../typings";

export class UserStatus {
    content?: string;
    emoteId: number;

    constructor(data: UserStatusPayload, public client: Client) {
        this.content = data.content;
        this.emoteId = data.emoteId;
    };
};