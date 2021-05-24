const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const clientRoute = require('./routes/client-route');
const providerRoute = require('./routes/provider-route');
const cors = require('cors');

const PORT = process.env.PORT || 8080;

const app = express();

mongoose.connect(
    process.env.URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('Connected to DB')
);

app.use(cors());
app.use(express.json());
app.use('/client', clientRoute);
app.use('/provider', providerRoute);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));