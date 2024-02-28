const mongoose = require('mongoose');

const ProductSchemaCompany = new mongoose.Schema({
    name: String,
    taxId: String,
    employees: [Array],
})

module.exports = mongoose.model('epolyee', ProductSchemaCompany)