import { Schema, model } from "mongoose";

const LivroSchema = new Schema({
  titulo: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  editora: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default model("Livro", LivroSchema);