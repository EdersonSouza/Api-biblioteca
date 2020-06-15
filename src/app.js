import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

import routes from "./routes";
import databaseConfig from "./config/database";

class App {
  constructor() {
    this.express = express();
    this.cors();
    this.database();
    this.middlewares();
    this.routes();
    
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
    this.express.use(cors({
      origin: ["http://localhost:8080"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      
    }));
  }

  routes() {
    this.express.use(routes);
  }
}

export default new App().express;