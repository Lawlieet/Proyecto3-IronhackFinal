 const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    name: String,
    email: String,
    photoURL: {
      type: String,
      default: 'https://www.unitypoint.org/images/unitypoint/default-doctor-profile-img.png'
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);