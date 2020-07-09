import User from "../models/User";

class UserController {
  async index(req, res) {
      const {id} = req.params
      let user = null
      if(id){
        try{
            user = await User.findById(id);
        } catch (error){
            res.status(400).send({error:"usuario informado não existe"})
        }
         
        
      }else{
        try{
            user = await User.find();
        } catch (error) {
            res.status(400).send({error:"Falha ao buscar usuários"})
        }
         

        
      }
      return res.json(user);
  }

  

  async store(req, res) {
    
    try {
      if(await User.findOne({nomeUser:req.body.nomeUser}))
        return res.status(400).send({error:'Já existe um usuário com esse nome, favor tente'})
      
      const user = await User.create(req.body);

      return res.json(user);
    } catch (error) {
      return res.status(400).send({error:"não foi possível cadastrar usuário"})
      
    }

    
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;
    if(id){
        try{
            const user = await User.findByIdAndUpdate(id, body, {
                new: true
              });
          
              return res.json(user);
        } catch (error){
            res.status(400).send({error:"falha ao atualizar usuário"})
        }
        
    }else {
        res.status(400).send({error:"iforme um id"})
    }

    
  }

  async destroy(req, res) {
    const { id } = req.params;
    if(id){
        try{
            await User.findByIdAndDelete(id);

            return res.status(200).send({sucess:"Usuário Excluído com sucesso"});
        }catch (error){
            res.status(400).send({error:"não foi possível excluir usuário"})
        }
    } else {
        res.status(400).send({error:"nenhum usuário foi informado"})
    }

    
  }
}

export default new UserController();