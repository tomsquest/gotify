import got, { Got } from "got";

export type Config = {
  server: string;
};

export type Message = {
  app: string;
  message: string;
  title?: string;
  priority?: number;
};

export type MessageResponse = {
  id: number;
  appid: number;
  message: string;
  title: string;
  priority: number;
  date: string;
};

export class Gotify {
  private got: Got;

  constructor(config: Config) {
    this.got = got.extend({
      prefixUrl: config.server,
      headers: {
        "user-agent": "gotify (https://github.com/tomsquest/gotify)",
      },
    });
  }

  public async send(message: Message): Promise<MessageResponse> {
    return this.got
      .post("message", {
        searchParams: {
          token: message.app,
        },
        json: {
          message: message.message,
          title: message.title,
          priority: message.priority,
        },
      })
      .json<MessageResponse>();
  }
}

export const gotify = (
  message: Message & { server: string }
): Promise<MessageResponse> =>
  new Gotify({ server: message.server }).send(message);
