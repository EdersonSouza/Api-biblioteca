import Autor from "../models/Autor";

class AutorController {
  async index(req, res) {
    const autores = await Autor.find();

    return res.json(autores);
  }

  async show(req, res) {
    const { id } = req.params;
    const autor = await Autor.findById(id);

    return res.json(autor);
  }

  async store(req, res) {
    const { body } = req;
    const autor = await Autor.create(body);

    return res.json(autor);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req; 
    const li = await Autor.findById(id);
    li._livro.push(body._livro);
    console.log(li._livro)
    const autor = await Autor.findOneAndUpdate(id, li, {
      new: true
    });

    return res.json(autor);
  }

  async addLivros(body) {
    let id = body.id
    console.log(' estou aqui '+ id)
    const autor = await Autor.findById(id);
    autor._livro.push(body._livro);
    const at = await Autor.findByIdAndUpdate(id, autor, {
      new: true
    });
    console.log(at)
   
  }


  async destroy(req, res) {
    const { id } = req.params;

    await Autor.findByIdAndDelete(id);

    return res.send();
  }
}

export default new AutorController();