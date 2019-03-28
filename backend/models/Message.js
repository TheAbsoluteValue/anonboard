let mongoose = require('mongoose');

let messageSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },
    
});

let Message = module.exports = mongoose.model('Message', messageSchema)