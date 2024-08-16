import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello from threads!");
});

app.listen(5443, () =>
  console.log("this app's server is listening on port 5443!")
);
