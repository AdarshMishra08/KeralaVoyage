
const express = require("express");
const { MongoClient } = require('mongodb');
const path = require('path');
const app = express();
const port = 4000;

const url = 'mongodb+srv://adarshmishra0008_db_user:<ramramapati08>@freecluster0.ptg6sid.mongodb.net/?retryWrites=true&w=majority&appName=freeCluster0';

const express = require("express");
const { MongoClient } = require('mongodb');
const path = require('path');
const app = express();
const port = 4000;

// --- IMPORTANT: You will edit this line in the next step ---
const url = 'mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'kerala-voyage';

const client = new MongoClient(url);

// --- Middleware ---
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// --- Routes ---
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});
app.get('/packages', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'packages.html'));
});

app.post('/contact', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection('contacts');
        await collection.insertOne(req.body);
        console.log('Contact form data saved to database');
        res.redirect('/');
    } catch (err) {
        console.error('Failed to save contact form data', err);
        res.status(500).send('Message could not be sent.');
    }
});

// --- Connect to DB and Start Server ---
async function startServer() {
    try {
        await client.connect();
        console.log('✅ Connected successfully to MongoDB');
        app.listen(port, () => {
            console.log(`🚀 Server is running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
}

startServer();
const dbName = 'kerala-voyage';

const client = new MongoClient(url);

// --- Middleware ---
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// --- Routes ---
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});
app.get('/packages', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'packages.html'));
});

app.post('/contact', async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection('contacts');
        await collection.insertOne(req.body);
        console.log('Contact form data saved to database');
        res.redirect('/');
    } catch (err) {
        console.error('Failed to save contact form data', err);
        res.status(500).send('Message could not be sent.');
    }
});

// --- Connect to DB and Start Server ---
async function startServer() {
    try {
        await client.connect();
        console.log('✅ Connected successfully to MongoDB');
        app.listen(port, () => {
            console.log(`🚀 Server is running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
}

startServer();
