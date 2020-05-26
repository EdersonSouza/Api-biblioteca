import { Router } from "express";

import LivroController from "./app/controllers/LivroController";

import AutorController from "./app/controllers/AutorController";

const routes = Router();


/*Livros*/

routes.get("/livros", LivroController.index);
routes.get("/livros/:id", LivroController.show);
routes.post("/livros", LivroController.store);
routes.put("/livros/:id", LivroController.update);
routes.delete("/livros/:id", LivroController.destroy);

/*Autor*/

routes.get("/autor", AutorController.index);
routes.get("/autor/:id", AutorController.show);
routes.post("/autor", AutorController.store);
routes.put("/autor/:id", AutorController.update);
routes.delete("/autor/:id", AutorController.destroy);

export default routes;