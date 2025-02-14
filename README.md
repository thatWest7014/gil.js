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

> Read more at the [documentation](https://gil.js.org)

## Credits
- Inspired by [discord.js](https://discord.js.org)

# Warning
- This library is **not** yet complete. There is a lot of the Guilded API still to cover!