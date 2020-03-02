const { Schema, model } = require('mongoose')


const trabajoSchema = new Schema(
  {
    title: String,
    description:String,
    cedula:String,
    servicios: {
      type: Schema.Types.ObjectId,
      ref: 'Servicio'
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Trabajo', trabajoSchema)