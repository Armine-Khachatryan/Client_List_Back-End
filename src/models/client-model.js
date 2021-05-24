const mongoose = require('mongoose');
//const {providerSchemaModel, providerSchema} = require('./provider-model');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const clientSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    Providers: {
        type: [ObjectId],
        required: true
    }
});

module.exports = mongoose.model('clients', clientSchema);