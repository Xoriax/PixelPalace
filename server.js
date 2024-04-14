const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { port, mongoURI } = require('./config');
const bcrypt = require('bcrypt');


app.use(cors());
app.use(express.json())
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

app.get('/game/type/:type', async (req, res) => {
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

app.get('/pderive/category/:category', async (req, res) => {
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

// User Schema and Model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('users', userSchema);

// Routes for User Management
app.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).send('Username already exists. Please choose a different username.');
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).send('User created successfully.');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            console.log("User not found");
            return res.status(401).send("User not found");
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            console.log("Incorrect password");
            return res.status(401).send("Incorrect password");
        }

        console.log("Login successful");
        console.log("User connected:", user.username);
        res.status(200).send("Login successful");
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => console.log('Express is running at port ' + port));