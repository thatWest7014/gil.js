> [!WARNING]
> [Guilded is shutting down on Dec 19, 2025](https://www.guilded.gg/blog/guilded-shut-down-12-19-25).
> This project has now officially been archived as of October 7, 2025.

# gil.js

A powerful Node.js library for interacting with the Guilded API.

## Installation

- `npm i gil.js`
- `yarn add gil.js`
- `bun add gil.js`

## Example

```js
const { Client } = require("gil.js");
const client = new Client({ token: `YOUR_BOT_TOKEN` });

client.on("ready", () => {
    console.log(`Logged in as ${client.user?.name}!`);
});

client.login();
```

> Read more at the [documentation](https://gil.js.org).

> Support is available at our [Guilded Server](https://guilded.gg/Guildex)!

## Credits
- Inspired by [discord.js](https://discord.js.org)

# Warning
- This library is **not** yet complete. There is a lot of the Guilded API still to cover!

# What's missing?
*This will not always be an up-to-date list.*
- Events:
  - ServerMemberSocialLinkCreated
  - ServerMemberSocialLinkUpdated
  - ServerMemberSocialLinkDeleted
