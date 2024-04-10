const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { port, mongoURI } = require('./config');

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB database is connected'))
    .catch((err) => console.log(err));

const jeuxSchema = new mongoose.Schema({
    nom: String,
    image: String,
    prix: String,
    type: String,
    trailer: String,
    studio: String,
    description: String,
});

const Jeux = mongoose.model('games', jeuxSchema);

app.get('/game', async (req, res) => {
    try {
        const items = await Jeux.find();
        res.json(items);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.get('/game/:type', async (req, res) => {
    try {
        const items = await Jeux.find({ type: req.params.type });
        res.json(items);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.get('/game/studio/:studio', async (req, res) => {
    try {
        const items = await Jeux.find({ studio: req.params.studio });
        res.json(items);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

const produitderiveSchemas = new mongoose.Schema({
    nom: String,
    image: String,
    prix: String,
    category: String,
    license: String,
});

const Produit = mongoose.model('pderives', produitderiveSchemas);

app.get('/pderive', async (req, res) => {
    try {
        const items = await Produit.find();
        res.json(items);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.get('/pderive/:category', async (req, res) => {
    try {
        const items = await Produit.find({ category: req.params.category });
        res.json(items);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.get('/pderive/license/:license', async (req, res) => {
    try {
        const items = await Produit.find({ license: req.params.license });
        res.json(items);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

let cart = {};

app.post('/add-to-cart/:id', async (req, res) => {
    try {
        const item = await Jeux.findById(req.params.id);
        if (!item) {
            return res.status(404).send('Article not found');
        }
        if (cart[item._id]) {
            cart[item._id].quantity += 1;
        } else {
            cart[item._id] = {
                ...item.toObject(),
                quantity: 1
            };
        }
        res.json(Object.values(cart));
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.delete('/remove-from-cart/:id', (req, res) => {
    try {
        const id = req.params.id;
        if (!cart[id]) {
            return res.status(404).send('Item not found in the cart');
        }
        if (cart[id].quantity > 1) {
            cart[id].quantity -= 1;
        } else {
            delete cart[id];
        }
        res.json(Object.values(cart));
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.get('/cart', (req, res) => {
    try {
        res.json(Object.values(cart));
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => console.log('Express is running at port ' + port));