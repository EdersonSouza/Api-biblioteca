import { Schema, model } from "mongoose";

const LivroSchema = new Schema({
  titulo: {
    type: String,
    required: true
  },
  subtitulo: {
    type: String,
    
  },
  descricao: {
    type: String,
    required: true
  },

  total: {
    type: Number
  },

  emprestados: {
    type: Number
  },

  disponíveis: {
    type: Number
  },
  edicao:{
    type: String
  },
  volume: {
    type: Number
  },

  categoria: [{type: Schema.Types.ObjectId, ref: 'Categoria'}],
  
  _autor: [{type: Schema.Types.ObjectId, ref: 'Autor'}],
  _Editora: {type: Schema.Types.ObjectId, ref: 'Editora' },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default model("Livro", LivroSchema);
