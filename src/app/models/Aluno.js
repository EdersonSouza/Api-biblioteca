import { Schema, model } from "mongoose";

const AlunoSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  codigoSgde: {
    type: Number,
    required: true,
    unique:true

  },
  fones: [],
  endereco:{
    rua: { type: String },
			numero: { type: Number },
			bairro: { type: String },
			cep: { type: String },
			cidade: { type: String },
			uf: { type: String },
  },
  emprestimo:{type: Schema.Types.ObjectId, ref: 'Emprestimo'},
  devolvidos:[{type: Schema.Types.ObjectId, ref: 'Emprestimo'}],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default model("Aluno", AlunoSchema);