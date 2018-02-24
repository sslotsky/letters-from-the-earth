import "babel-polyfill";
import express from "express";
import sslRedirect from "heroku-ssl-redirect";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import env from "dotenv";
import render from "./serverRender";
import identity from "SERVER/controllers/identity";
import letterRequests from "SERVER/controllers/letterRequests";
import { decode, authenticate, apiErrors } from "SERVER/middleware";

env.config();

const app = express();
app.enable("trust proxy");

app.use(sslRedirect(), morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== "production") {
  app.use(cors({ origin: "http://localhost:3002", credentials: true }));
}

app.use("/dist", express.static("dist"));
app.use("/assets", express.static("assets"));

app.use(decode);

const api = express.Router();

app.use("/v1", api);

identity(api);

api.use(authenticate);

letterRequests(api);

api.use(apiErrors);

api.use((req, res, next) => res.status(404).end());

app.use(render);

app.listen(process.env.PORT || 9999);
