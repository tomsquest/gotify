# Gotify JavaScript Client

<div align="center">

![Logo](doc/logo.png)

</div>

[![Version](https://img.shields.io/npm/v/gotify.svg?style=for-the-badge)](https://www.npmjs.com/package/gotify)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/tomsquest/gotify/check?style=for-the-badge)

## What is it

This module is a Node.js client for [Gotify](https://gotify.net/), a simple server for sending and receiving messages.

## Why

I needed a **Node.js** client to get instant notification on my Phone.

Actually, the [Gotify API](https://gotify.net/api-docs) for sending message is really simple. It is basically a POST request to the `/message` endpoint. This client makes it even easier and straightforward.

## Changelog

> See [CHANGELOG.md](CHANGELOG.md)

## Install

```sh
npm install gotify
```

## Usage

```js
const { gotify } = require("gotify");
// Typescript
// import { gotify } from "gotify";

await gotify({
  server: "http://gotify.example.com",
  app: "yourAppToken",
  title: "some title",
  message: "some msg",
  priority: 5,
});
```

Or, you can instantiate `Gotify` class:

```js
const { gotify } = require("gotify");
// Typescript
// import { gotify } from "gotify";

const client = new Gotify({
  server: "http://gotify.example.com",
});

await client.send({
  app: "yourAppToken",
  title: "some title",
  message: "some msg",
  priority: 5,
});
```

To add [message Extras](https://gotify.net/docs/msgextras), simply pass them (TypeScript should autocomplete the known extras):

```js
await gotify({
  server: server,
  app: app,
  title: "A Markdown message",
  message: `This is a **message** with the ![Gotify Logo](https://raw.githubusercontent.com/gotify/logo/master/gotify-logo-small.png)!`,
  priority: 5,
  // Extras are defined here https://gotify.net/docs/msgextras
  extras: {
    // Format message as markdown
    "client::display": {
      contentType: "text/markdown",
    },
    // Opens the URL on notification click.
    "client::notification": {
      click: { url: "https://github.com/gotify" },
    },
    // Opens the URL after the notification was delivered.
    // Only works when the gotify app is in focus (limitation of android)
    "android::action": {
      onReceive: { intentUrl: "https://gotify.net" },
    },
  },
});
```

## API

### Send message

Either use `gotify()` or instantiate `new Gotify()`.

Fields:

- `server` (required): the server you are using, eg. "http://gotify.example.com"
- `app` (required): this is the application token that you get when creating an application
- `message` (required): the message's title
- `title` (optional): the message's title
- `priority` (optional): the message's priority. On my Android phone, priority>=4 will trigger the notification **sound/vibrate**, less will just display the notification bubble.
- `extras` (optional): the message's extras as defined [in the documentation](https://gotify.net/docs/msgextras)

## TODO/MAYBE

- [ ] ? [Set Markdown with a flag: `markdown: true`](https://gotify.net/docs/msgextras#clientdisplay)
- [ ] ? Could specify the application token in the `Gotify` class to not pass it when sending a message
- [ ] ? Support for custom http client (put `got` as a peerDependency and provides example with node-fetch and axios)
