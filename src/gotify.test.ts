import nock from "nock";
import { gotify } from "./gotify";

test("successful send message", async () => {
  const message = {
    message: "some msg",
    title: "some title",
    priority: 5,
  };
  const nockScope = nock("http://gotify.example.com")
    .post("/message", {
      message: message.message,
      title: message.title,
      priority: message.priority,
    })
    .matchHeader("user-agent", /gotify/)
    .query({
      token: "yourAppToken",
    })
    .reply(200, {
      id: 1,
      appid: "app1",
      message: "some msg",
      title: message.title,
      priority: message.priority,
      date: "2021-01-01T00:00:00Z",
    });

  const response = await gotify({
    server: "http://gotify.example.com",
    app: "yourAppToken",
    title: message.title,
    message: "some msg",
    priority: message.priority,
  });

  expect(response).toEqual({
    id: 1,
    appid: "app1",
    message: message.message,
    title: message.title,
    priority: message.priority,
    date: "2021-01-01T00:00:00Z",
  });
  nockScope.done();
});
