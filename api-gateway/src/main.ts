import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

// express middleware
app.use(
  "/users",
  createProxyMiddleware({
    target: "http://localhost:5444",
  })
);

app.use(
  "/threads",
  createProxyMiddleware({
    target: "http://localhost:5443",
  })
);

app.use(
  "/replies",
  createProxyMiddleware({
    target: "http://localhost:5442",
  })
);

app.listen(5000, () =>
  console.log("this app's server is listening on port 5000!")
);
