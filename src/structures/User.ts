import { ClientUserPayload, UserPayload, UserStatusPayload, UserType } from "../typings/payloads/user";
import { Client } from "./Client";
import { UserStatus } from "./UserStatus";

export class User {
    /** The ID of the user. */
    id: string;
    /** The type of the user (user or bot). */
    type?: UserType;
    /** The name of the user. */
    name: string;
    /** The URL of the user's avatar. */
    avatar?: string;
    /** The URL of the user's banner. */
    banner?: string;
    /** The user's account creation date. */
    createdAt: Date;
    /** The status of the user. */
    status?: UserStatus;

    constructor(data: UserPayload, public client: Client) {
        this.id = data.id;
        this.type = data.type;
        this.name = data.name;
        this.avatar = data.avatar;
        this.banner = data.banner;
        this.createdAt = new Date(data.createdAt);
        this.status = data.status ? new UserStatus(data.status, client) : undefined;
    };
};

export class ClientUser extends User {
    /** The ID of the bot. */
    botId: string;
    /** The ID of the user who created the bot. */
    createdBy: string;

    constructor(data: ClientUserPayload, public client: Client) {
        super(data, client);

        this.botId = data.botId;
        this.createdBy = data.createdBy;
    };
};