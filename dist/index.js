"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/server.ts
var import_fastify = __toESM(require("fastify"));
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
var Server = class {
  constructor(port2) {
    this.port = 3e3;
    this.app = (0, import_fastify.default)();
    this.port = port2;
    this.routes();
  }
  routes() {
    this.app.get("/", async () => {
      return await prisma.user.findMany();
    });
    app.post("/", async (request) => {
      const { email, name } = request.body;
      await prisma.user.create({
        data: {
          email,
          name
        }
      });
    });
    this.app.get("/posts", async () => {
      return await prisma.post.findMany();
    });
    this.app.post("/posts", async (request) => {
      const { titulo } = request.body;
      await prisma.post.create({
        data: {
          titulo
        }
      });
    });
  }
  start() {
    this.app.listen({
      host: "0.0.0.0",
      port: this.port
    }).then(() => {
      console.log(`Server started in port ${this.port}`);
    });
  }
  getApp() {
    return this.app;
  }
};
var server_default = Server;

// src/index.ts
var port = process.env.PORT ? Number(process.env.PORT) : 3333;
var app2 = new server_default(port);
app2.start();
