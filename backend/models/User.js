 const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    name: String,
    photoURL: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR73r-pdCvEEff-PcCHvn1xXcRJ7ilZq7i5_s5C9Y8wqXO32ZWL"
    },
    trabajo: {
      type: Schema.Types.ObjectId,
      ref: 'Trabajo'
    },

  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = model('User', userSchema);