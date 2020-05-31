import express from "express";
import mongoose from "mongoose";
//import cors from 'cors';

import routes from "./routes";
import databaseConfig from "./config/database";

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();
    this.cors();
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true
    });
  }

  middlewares() {
    this.express.use(express.json());
  }
  cors() {
    this.express.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "http://localhost:8080");
      res.header("Acess-Control-Allow-Header", "Content-Type", "Authorization")
      next();
    });
  }
  /*cors() {
    console.log("estou aqui")
    this.express.use(cors({
      origin: ["http://localhost:8080", "http://192.168.1.5:8080"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      
    }));
  }*/

  routes() {
    this.express.use(routes);
  }
}

export default new App().express;