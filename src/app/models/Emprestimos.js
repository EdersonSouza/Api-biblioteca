import { Schema, model } from "mongoose";

const EmprestimoSchema = new Schema({
 
  aluno:{type: Schema.Types.ObjectId, ref: 'Aluno' },
  livro:{type: Schema.Types.ObjectId, ref: 'Livro' },
  ativo:{type:Boolean, default:true},
  devolucao: {
    type:Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default model("Emprestimo", EmprestimoSchema);