const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
    Providers: {
        type: String,
        required: true
    },
    isChecked: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('providers', providerSchema);

/*module.exports = {
     providerSchemaModel, providerSchema
}*/