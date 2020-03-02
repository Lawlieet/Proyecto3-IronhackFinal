const { Schema, model } = require('mongoose')
const projectSchema = new Schema (
    {
        imageURL: String,
        direction: String,
        description: String,
        cedula: Number,
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