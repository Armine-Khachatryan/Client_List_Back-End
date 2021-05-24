const providerModel = require('../models/provider-model');


const findAllProviders = async (req, res) => {
    try {
        const arrayOfProviders = await providerModel.find();
        res.send(arrayOfProviders);
    } catch(err) {
        res.status(400).send(err);
    }
}

const saveProvider = async (req, res) => {

    const provider = new providerModel({
        Providers: req.body.Providers,
        isChecked: req.body.isChecked
    });

    try {
        const savedProvider = await provider.save();
        res.send(provider);
    } catch(err) {
        console.log("errr", err);
        res.status(400).send(err);
    }
};

let updateProvider = async (req, res) => {
    try {
        let provider = await providerModel.findById(req.params.id);

        provider.Providers = req.body.Providers || provider.Providers;
        provider.isChecked = req.body.isChecked || provider.isChecked;

        provider.save();
        res.status(201).send(provider);
    } catch(err) {
        res.status(400).send(err);
    }
}

const deleteProvider = async (req, res) => {
    try {
        const deletedProvider = await providerModel.findByIdAndDelete(req.params.id);
        res.send(deletedProvider);
    } catch(err) {
        res.status(400).send(err);
    }
};

module.exports = {
    saveProvider, findAllProviders, updateProvider, deleteProvider
}