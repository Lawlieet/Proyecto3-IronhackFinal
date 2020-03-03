const { Schema, model } = require('mongoose')


const servicioSchema = new Schema(
  {
    title: String,
    description:String,
    trabajo: {
      type: Schema.Types.ObjectId,
      ref: 'Trabajo'
    },
    photoURL: '',
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Servicio', servicioSchema)