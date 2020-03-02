const { Schema, model } = require('mongoose')
const projectSchema = new Schema (
    {
        imageURL: '',
        direction: String,
        description: String,
        cedula: String,
        author: {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model('Project', projectSchema);