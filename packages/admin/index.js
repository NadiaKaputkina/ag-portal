const express = require('express');
const port = process.env.PORT || 5000;
const cors = require('cors')
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors());

const operationRouter = require('./model/operation/operationRoute');
const customerRouter = require('./model/customer/customerRoute');
const bankAccountRouter = require('./model/bankAccount/bankAccountRoute');

app.use('/operation', operationRouter)
app.use('/customer', customerRouter)
app.use('/bankAccount', bankAccountRouter)

app.get('/', (req, res) => {
    res.send('I am a backend server');
});

app.listen(port, (err) => {
    if (err) {
        console.log(`Error: ${err.message}`);
    } else {
        console.log(`Server start on port: ${port}`);
    }
});
