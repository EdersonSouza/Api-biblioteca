import { Router } from "express";

import LivroController from "./app/controllers/LivroController";

import AutorController from "./app/controllers/AutorController";

import EditoraController from "./app/controllers/EditoraController";

import CategoriaController from "./app/controllers/CategoriaController";

import EmpresimoController from "./app/controllers/EmprestimoController";

import AlunoController from "./app/controllers/AlunoController";

const routes = Router();


/*Livros*/

routes.get("/livros", LivroController.index);
routes.get("/livro/:id", LivroController.show);
routes.post("/livro", LivroController.store);
routes.put("/livro/:id", LivroController.update);
routes.delete("/livro/:id", LivroController.destroy);

/*Autor*/

routes.get("/autor", AutorController.index);
routes.get("/autor/:id", AutorController.show);
routes.post("/autor", AutorController.store);
routes.put("/autor/:id", AutorController.update);
routes.delete("/autor/:id", AutorController.destroy);

/*Editoras*/

routes.get("/editoras", EditoraController.index);
routes.get("/editora/:id",EditoraController.show);
routes.post("/editora", EditoraController.store);
routes.put("/editora/:id", EditoraController.update);
routes.delete("/editora/:id", EditoraController.destroy);

/*Categorias*/

routes.get("/categorias", CategoriaController.index);
routes.get("/categoria/:id", CategoriaController.show);
routes.post("/categoria", CategoriaController.store);
routes.put("/categoria/:id", CategoriaController.update);
routes.delete("/categoria/:id", CategoriaController.destroy);


/*alunos*/

routes.get("/alunos", AlunoController.index);
routes.get("/aluno/:id", AlunoController.show);
routes.post("/aluno", AlunoController.store);
routes.put("/aluno/:id", AlunoController.update);
routes.delete("/aluno/:id", AlunoController.destroy);


/*emprestimos*/

routes.get("/emprestimos", EmpresimoController.index);
routes.get("/emprestimo/:id", EmpresimoController.show);
routes.post("/emprestimo", EmpresimoController.store);
routes.put("/emprestimo/:id", EmpresimoController.update);
routes.delete("/emprestimo/:id", EmpresimoController.destroy);
export default routes;