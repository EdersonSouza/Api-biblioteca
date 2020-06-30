import Emprestimo from "../models/Emprestimos";

class EmprestimoController {
  async index(req, res) {
    const emprestimos = await Emprestimo.find()
    .populate('aluno')
    .populate('livro');

    return res.json(emprestimos);
  }

  async show(req, res) {
    const { id } = req.params;
    const emprestimo = await Emprestimo.findById(id);

    return res.json(emprestimo);
  }

  async store(req, res) {
    const { body } = req;
    const emprestimo = await Emprestimo.create(body);

    return res.json(emprestimo);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const emprestimo = await Emprestimo.findByIdAndUpdate(id, body, {
      new: true
    });

    return res.json(emprestimo);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Emprestimo.findByIdAndDelete(id);

    return res.send();
  }
}

export default new EmprestimoController();