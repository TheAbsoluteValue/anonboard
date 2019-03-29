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
    
    id: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Message', messageSchema)