const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { port, mongoURI } = require('./config');
const bcrypt = require('bcrypt');

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

app.get('/game/:id', async (req, res) => {
    try {
        const item = await Jeux.findById(req.params.id);
        if (!item) {
            return res.status(404).send('Game not found');
        }
        res.json(item);
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

app.get('/pderive/:id', async (req, res) => {
    try {
        const item = await Produit.findById(req.params.id);
        if (!item) {
            return res.status(404).send('Product not found');
        }
        res.json(item);
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

const userSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    password: String
});

const User = mongoose.model('users', userSchema);

app.post('/signup', async (req, res) => {
    const { nom, prenom, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ nom, prenom, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'Inscription réussie !' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur lors de l\'inscription.' });
    }
});

app.listen(port, () => console.log('Express is running at port ' + port));