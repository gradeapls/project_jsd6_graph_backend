const mongoose = require('mongoose');

const ProductSchemaUser = new mongoose.Schema({
    prod_duration: Number,
    prod_distance: Number,
    prod_heartrate: Number,
    prod_userId: Number,
    updated_at:{ type: Date, default: Date.now}
})

module.exports = mongoose.model('users', ProductSchemaUser)