const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { port, mongoURI } = require('./config');
const bcrypt = require('bcryptjs');

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
    category: String,
    type: String,
    trailer: String,
    studio: String,
    description: String,
});

const Jeux = mongoose.model('jeux', jeuxSchema);

app.get('/game', async (req, res) => {
    try {
        const games = await Jeux.find();
        console.log(games)
        res.json(games);
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

app.get('/game/:studio', async (req, res) => {
    try {
        const items = await Jeux.find({ studio: req.params.studio });
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

const userSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    mail: String,
    mot_de_passe: String,
});

const User = mongoose.model('Users', userSchema);

app.post('/add-user', async (req, res) => {
    try {
        const { nom, prenom, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('Cet email est déjà utilisé');
        }
        const hashedPassword = password;//await bcrypt.hash(password, 10);
        const user = new User({ nom, prenom, mail: email, mot_de_passe: hashedPassword });
        await user.save();

        res.status(201).send('User added successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.post('/login', async (req, res) => {
    const { mail, mot_de_passe } = req.body;
    try {
        const user = await User.findOne({ mail });
        if (!user) {
            return res.status(401).send('Mail ou Mot de Passe incorrects');
        }
        const isMatch = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
        if (isMatch) {
            res.status(200).json({ nom: user.nom, prenom: user.prenom });
        } else {
            res.status(401).send('Mail ou Mot de Passe incorrects');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur du serveur');
    }
});

app.delete('/delete-user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        await User.deleteOne({ _id: req.params.id });
        res.status(200).send('User deleted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => console.log('Express is running at port ' + port));