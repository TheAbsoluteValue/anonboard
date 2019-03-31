let mongoose = require('mongoose');

let messageSchema = mongoose.Schema({
    message: {
        type: String,
        required: false
    },

    date: {
        type: String,
        required: true
    },

    img: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Message', messageSchema)