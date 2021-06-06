import { Gotify, gotify } from "../src";

const main = async (): Promise<void> => {
  const server = getEnvOrDie("GOTIFY_SERVER");
  const app = getEnvOrDie("GOTIFY_APP");

  await gotify({
    server: server,
    app: app,
    title: "Title",
    message: `Here is a message!`,
    priority: 5,
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
