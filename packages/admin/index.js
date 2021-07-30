const express = require('express');
const port = process.env.PORT || 5000;
var cors = require('cors')
const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.send('I am a backend server');
});
app.get('/customer/list', (req, res) => {
    const customers = [{
        id: 1,
        name: 'Nadia',
        age: 35,
    },
    {
        id: 2,
        name: 'Olia',
        age: 36,
    },
    {
        id: 3,
        name: 'Misha',
        age: 2,
    }]
    
    res.send(customers);
});

app.listen(port, (err) => {
    if (err) {
        console.log(`Error: ${err.message}`);
    } else {
        console.log(`Server start on port: ${port}`);
    }
});
