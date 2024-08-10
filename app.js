const express = require('express');
const cors = require('./middlewares/corsMiddleware');
const helloRoute = require('./routes/helloRoute');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors);

// Rotas
app.use('/hello', helloRoute);

app.get('/', (req, res) => {
    res.send('Your are in the root of the app.');
});

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
