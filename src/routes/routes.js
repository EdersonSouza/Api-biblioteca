import { Router } from "express";

import LivroController from "../app/controllers/LivroController";

import AutorController from "../app/controllers/AutorController";

import EditoraController from "../app/controllers/EditoraController";

import CategoriaController from "../app/controllers/CategoriaController";

import EmpresimoController from "../app/controllers/EmprestimoController";

import AlunoController from "../app/controllers/AlunoController";

import UserController from "../app/controllers/UserController";

const routes = Router();

// usuário
routes.route("/user/:id?")
    .get(UserController.index)
    .put(UserController.update)
    .delete(UserController.destroy)
    .post( UserController.store)





/*Livros*/

routes.get("/livros", LivroController.index);
routes.post("/livro", LivroController.store);
routes.route("/livro/:id")
    .get( LivroController.show)
    .put( LivroController.update)
    .delete( LivroController.destroy)

/*Autor*/

routes.get("/autores", AutorController.index);
routes.post("/autor", AutorController.store);
routes.route("/autor/:id")
    .get( AutorController.show)
    .put( AutorController.update)
    .delete( AutorController.destroy);

/*Editoras*/

routes.get("/editoras", EditoraController.index)
routes.post("/editora", EditoraController.store);
routes.route("/editora/:id")
    .get(EditoraController.show)
    .put( EditoraController.update)
    .delete( EditoraController.destroy);

/*Categorias*/

routes.get("/categorias", CategoriaController.index);
routes.post("/categoria", CategoriaController.store);
routes.route("/categoria/:id")
    .get(CategoriaController.show)
    .put(CategoriaController.update)
    .delete(CategoriaController.destroy);


/*alunos*/

routes.get("/alunos", AlunoController.index);
routes.post("/aluno", AlunoController.store);
routes.route("/aluno/:id")
    .get( AlunoController.show)
    .put( AlunoController.update)
    .delete( AlunoController.destroy);


/*emprestimos*/

routes.get("/emprestimos", EmpresimoController.index);
routes.post("/emprestimo", EmpresimoController.store);
routes.route("/emprestimo/:id")
    .get(EmpresimoController.show)
    .put( EmpresimoController.update)
    .delete( EmpresimoController.destroy);
export default routes;