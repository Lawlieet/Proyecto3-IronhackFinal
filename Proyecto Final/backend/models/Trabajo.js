const { Schema, model } = require('mongoose')


const trabajoSchema = new Schema(
  {
    title: String,
    description:String,
    cedula:String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Trabajo', trabajoSchema)