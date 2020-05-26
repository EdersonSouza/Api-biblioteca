import { Router } from "express";

import TaskController from "./app/controllers/TaskController";

const routes = Router();

/* Tasks */
routes.get("/tasks", TaskController.index);
routes.get("/tasks/:id", TaskController.show);
routes.post("/tasks", TaskController.store);
routes.put("/tasks/:id", TaskController.update);
routes.delete("/tasks/:id", TaskController.destroy);

export default routes;