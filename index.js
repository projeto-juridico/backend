const express = require('express');
const cors = require('cors'); 

const app = express();
const port = process.env.PORT || 3000;

const allowedOrigins = [
    'https://master--amazing-sunburst-566e88.netlify.app',
    'http://localhost:3000'
];

app.use(cors({
    origin: function(origin, callback){
        if(!origin || allowedOrigins.includes(origin)){
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});
