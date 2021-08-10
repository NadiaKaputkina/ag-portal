const db = require('../../db');

const loadList = async (req, res) => {
    const operationList = await db.table('operation')
        .join('customer', 'customer.id', 'operation.customerId')
        .select(['operation.id', 'operation.bankAccountId', 'operation.value'])
    
        // console.log('---->', db.table('operation')
        // .join('customer', 'customer.id', 'operation.customerId')
        // .select(['customer.id', 'operation.id as operationId', 'operation.bankAccountId', 'operation.value']).toSQL().toNative());
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