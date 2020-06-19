import Livro from "../models/Livro";
import addCategoria from "./CategoriaController";
import addAutor from "./AutorController";
import addEditora from "./EditoraController";

class LivroController {
  async index(req, res) {
    const livros = await Livro.find().populate('categoria');

    return res.json(livros);
  }

  async show(req, res) {
    const { id } = req.params;
    const livro = await Livro.findById(id);

    return res.json(livro);
  }

  async store(req, res) {
    const { body } = req;
    const livro = await Livro.create(body);
    livro._autor.map(el => {
      const autor = {
        id:el,
        _livro: livro._id

      }
      addAutor.addLivros(autor)
    })
    livro.categoria.map(el => {
      const categoria = {
        id:el,
        _livro: livro._id

      }
      addCategoria.addLivros(categoria)
    })
    if(livro._Editora!=null){
      const editora = {
        id:livro._Editora,
        livros:livro._id
      }
      addEditora.addLivros(editora)
    }
    
    return res.json(livro);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req; 
    const li = await Livro.findById(id);
    li.categoria=body.categoria;
    console.log(li.categoria)
    const livro = await Livro.findByIdAndUpdate(id, li, {
      new: true
    });

    return res.json(livro);
  }


  async destroy(req, res) {
    const { id } = req.params;

    await Livro.findByIdAndDelete(id);

    return res.send();
  }
}

export default new LivroController();