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

## API

### Send message

Either use `gotify()` or instantiate `new Gotify`.

Fields:

- `server` (required): the server your are using, eg. "http://gotify.example.com"
- `app` (required): this is the application token that you get when creating an application
- `message` (required): the message's title
- `title` (optional): the message's title
- `priority` (optional): the message's priority. On my Android phone, priority>=4 will trigger the notification **sound/vibrate**, less will just display the notification bubble.

## TODO

- [ ] [Markdown](https://gotify.net/docs/msgextras#clientdisplay)
- [ ] [Message Extras](https://gotify.net/docs/msgextras)
- [ ] ? Could specify the application token in the `Gotify` class to not pass it when sending a message
- [ ] ? Support for custom http client (put `got` as a peerDependency and provides example with node-fetch and axios)
