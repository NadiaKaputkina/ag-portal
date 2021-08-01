const db = require('../../db');

const loadList = async (req, res) => {
    const operationList = await db.table('operation')
        .join('customer', 'operation.customerId', '=', 'customer.id')
        .select()

    // console.log('------------------->', customerList);
    
    res.send(operationList);
}

const loadOperation = async (req, res) => {
    res.send();
}

const addOperation = async (req, res) => {
    res.send();
}

const editOperation = async (req, res) => {
    res.send();
}

const deleteOperation = async (req, res) => {
    res.send();
}

module.exports = {
    loadList,
    loadOperation,
    addOperation,
    editOperation,
    deleteOperation,
}