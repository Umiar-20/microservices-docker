import express from "express";
import { middlewareCheckOrigin } from "./middleware/middleware.check-origin";
import { getAllUser } from "./controllers/user.controller";

const app = express();

// middleware wajib untuk sebagai interceptor sebuah request dari user
// start of middleware
app.use(middlewareCheckOrigin);
// end of middleware

// routes
app.get("/", getAllUser);

app.listen(5444, () =>
  console.log("this app's server is listening on port 5444!")
);
