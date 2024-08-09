const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors({
  origin: 'http://localhost:3000' // Permite apenas essa origem
}));


app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
