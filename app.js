require('dotenv').config(); 

const express = require('express');
const cors = require('./middlewares/corsMiddleware');
const helloRoute = require('./routes/helloRoute');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001; // teste

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors);

// Rotas
app.use('/hello', helloRoute);

app.get('/', (req, res) => {
    res.json({ message: 'You are in the root of the app.' });
});

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
