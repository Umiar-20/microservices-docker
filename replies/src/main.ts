import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello from replies!");
});

app.listen(5442, () =>
  console.log("this app's server is listening on port 5442!")
);
