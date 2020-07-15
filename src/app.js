import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser"
import cors from 'cors';

import routes from "./routes/routes";
import databaseConfig from "./config/database";

class App {
  constructor() {
    this.express = express();
    this.bodyparser();
    this.cors();
    this.database();
    this.middlewares();
    this.routes();
    this.express.use(express.static(__dirname + '/public'))
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('MondoDB conectado')
  }

  bodyparser(){
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({extended: false}));
  }

  middlewares() {
    this.express.use(express.json());
  }
  
  cors() {
    this.express.use(cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization","x-access-token","Access-Control-Allow-Headers"],
      
    }));
  }

  routes() {
    this.express.use(routes);
  }
}

export default new App().express;