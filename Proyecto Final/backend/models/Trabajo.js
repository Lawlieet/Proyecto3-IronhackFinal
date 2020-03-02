const { Schema, model } = require('mongoose')


const trabajoSchema = new Schema(
  {
    title: String,
    description:String,
    cedula:Number,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    photoURL: String,
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Trabajo', trabajoSchema)