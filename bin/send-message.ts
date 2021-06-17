#!npx ts-node
import { Gotify, gotify } from "../src";

const main = async (): Promise<void> => {
  const server = getEnvOrDie("GOTIFY_SERVER");
  const app = getEnvOrDie("GOTIFY_APP");

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

  /*
  // Alternative
  const client = new Gotify({
    server: server,
  });

  await client.send({
    app: app,
    title: "Title",
    message: `Here is a message!`,
    priority: 5,
  });
  */
};

const getEnvOrDie = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing environment variable: ${name}`);
    process.exit(1);
  }
  return value;
};

main();
