import express from "express";
import { data } from "./_data";

const app = express();

app.use((req, res, next) => {
  res.header("ACCESS-CONTROL-ALLOW-ORIGIN", "*");
  res.header("ACCESS-CONTROL-ALLOW-METHODS", "GET");
  res.header("ACCESS-CONTROL-ALLOW-HEADERS", "Content-Type");
  next();
});

app.get("/account", (req, res) => {
  const count = parseInt(req.query.count) || 100;
  const offset = parseInt(req.query.offset) || 0;

  let response;

  if (isNaN(count) || count < 0 || isNaN(offset) || offset < 0) {
    res.status(400).send("Bad Request");
    return;
  }

  response = data.slice(offset, offset + count);

  res.send(response);
});

export const server = app.listen(3000, () => {
  console.log("Server started on port 3000");
});
