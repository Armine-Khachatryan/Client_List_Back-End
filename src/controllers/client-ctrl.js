const clientModel = require('../models/client-model');
const providerModel = require('../models/provider-model');
const mongoose = require('mongoose');


const findAll = async (req, res) => {
    try {
        const arrayOfClients = await clientModel.find();
        res.send(arrayOfClients);
    } catch(err) {
        res.status(400).send(err);
    }
}

const saveClient = async (req, res) => {
    req.body.Providers = req.body.Providers.map(providerId => mongoose.Types.ObjectId(providerId));

    const client = new clientModel({
        Name: req.body.Name,
        Email: req.body.Email,
        Phone: req.body.Phone,
        Providers: req.body.Providers
    });

    try {
        let savedClient = await client.save();
        let providers = await providerModel.find();
        console.log("SavedClient", savedClient.Providers);
        console.log("providers", typeof (providers[0]._id + ""));
        //console.log("providers1", providers);
        providers = providers.filter(elem => savedClient.Providers.includes(elem._id));
        console.log("providers2", providers);
        providers =  providers.map(elem => elem.Providers).join(', ');
        console.log("providers3", providers);
        savedClient._doc.Providers = providers;
        //console.log(savedClient.Providers);

        console.log("Res savedClient", savedClient._doc);
        res.send(savedClient._doc);
    } catch(err) {
        console.log(err);
        res.status(400).send(err);
    }
};

let updateClient = async (req, res) => {
    try {
        let client = await clientModel.findById(req.params.id);

        client.Name = req.body.Name || client.Name;
        client.Email = req.body.Email || client.Email;
        client.Phone = req.body.Phone || client.Phone;

        client.save();
        res.status(201).send(client);
    } catch(err) {
        res.status(400).send(err);
    }
}

const deleteClient = async (req, res) => {
    try {
        const deletedClient = await clientModel.findByIdAndDelete(req.params.id);
        res.send(deletedClient);
    } catch(err) {
        res.status(400).send(err);
    }
};

module.exports = {
    saveClient, findAll, updateClient, deleteClient
}