import { Server } from "./server";
import { Router } from "express";

import bodyParser from "body-parser";

const bodyParserMiddleware = bodyParser.json({
  limit: "50mb"
});

const defaultGetRoute = Router();

defaultGetRoute.get("*", (_req, res) => {
  res.send("Server up and running!");
});

const server = new Server({
  port: 9090,
  middlewares: [bodyParserMiddleware],
  routers: [defaultGetRoute]
});

server.listen();
