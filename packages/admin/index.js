const express = require('express');
const port = process.env.PORT || 5000;
var cors = require('cors')
const app = express();
const db = require('./db');

app.use(cors())

app.use('/operation', operationRoute)

app.get('/', (req, res) => {
    res.send('I am a backend server');
});
app.get('/customer/list', async (req, res) => {
    const customerList = await db.select().table('customer')

    // console.log('------------------->', customerList);
    
    res.send(customerList);
});

app.get('/bankAccount/list', async (req, res) => {
    const bankAccountList = await db.select().table('bankAccount')

    // console.log('------------------->', customerList);
    
    res.send(bankAccountList);
});


app.listen(port, (err) => {
    if (err) {
        console.log(`Error: ${err.message}`);
    } else {
        console.log(`Server start on port: ${port}`);
    }
});
