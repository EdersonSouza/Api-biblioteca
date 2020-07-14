import User from "../models/User";
import bcript from "bcryptjs"
import * as jwt from "../auth/auth"

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
  async authenticate(req,res){
      const {nomeUser,password} = req.body
      try {
          const user = await User.findOne({nomeUser});
          if(!user)
            return  res.status(400).send({error: "Usuário não encontrado"});
          if(!await bcript.compare(password, user.password))
            return res.status(400).send({error:"senha inválida"})
          
          const token = await jwt.sign({
            user: user
             
          });
          return res.send({user,token})
      } catch (error) {
        return res.status(400).send({error:"Algo deu errado na sua autenticação"})
        
      }
  }
  

  async store(req, res) {
    const {nomeUser} = req.body
    
    try {
      if(await User.findOne({nomeUser}))
        return res.status(400).send({error:'Já existe um usuário com esse nome, favor tente outro nome'})
      
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