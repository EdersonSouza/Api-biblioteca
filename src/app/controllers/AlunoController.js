import Aluno from "../models/Aluno";

class AlunoController {
  async index(req, res) {
    try{
      const alunos = await Aluno.find();

    return res.json(alunos)
    } catch (error){
      res.status(400).send({error:"Falha ao buscar alunos"})
    }
  }

  async show(req, res) {
    const { id } = req.params;
    try{
      const aluno = await Aluno.findById(id);

    return res.json(aluno);
    } catch (error){
      res.status(400).send({error:"Falha ao buscar aluno"})}
  }

  async store(req, res) {
    const { body } = req;
    try{
        const aluno = await Aluno.create(body);

        return res.json(aluno)
    } catch (error){
      res.status(400).send({error:"falha ao cadastrar aluno"})
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    try{
          const aluno = await Aluno.findByIdAndUpdate(id, body, {
          new: true
        });
        return res.json(aluno);
    } catch (error){
      res.status(400).send({error:"Erro ao atualizar aluno"})
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    try{
      await Aluno.findByIdAndDelete(id);

      return res.send("Aluno excluido com sucesso");
    } catch (error){
      res.status(400).send({error:"Não foi possível exlcuir aluno"})
    }

  }
}

export default new AlunoController();