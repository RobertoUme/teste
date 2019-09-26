const { Schema, model } = require("mongoose");

const UsuariosSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    senha: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true //data de criação e alteração do registro
  }
);

module.exports = model("Usuarios", UsuariosSchema);
