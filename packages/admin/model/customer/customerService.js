const { query } = require('express');
const db = require('../../db');

const loadList = async (req, res) => {
    const sql = db.select().table('customer')

    console.log('QUERY -> ', req.query);

    if (req.query.q) {
        sql.where('name', 'like', `%${req.query.q}%`)
    }
    if (req.query.limit) {
        sql.limit(req.query.limit)
    }

    const customerList = await sql 
    
    res.send(customerList);
};

const loadCustomer = async (req, res) => {
    const id = req.params.id;
    
    const customer = await db.table('customer')
        .where({
            id,
        })

    res.send(customer);
}

const updateCustomer = async (req, res) => {
    const id = req.params.id;

    const customer = await db.table('customer')
    .where('id', '=', req.body.id)
    .update(req.body)

    res.send(req.body);
}

const editCustomer = async (req, res) => {
    res.send();
}

const addCustomer = async (req, res) => {
    res.send();
}

const deleteCustomer = async (req, res) => {
    const id = req.params.id;

    const customer = await db.table('customer')
    .where('id', '=', id)
    .update({isEnable: 0})

    res.send(req.body);
}

module.exports = {
    loadList,
    loadCustomer,
    addCustomer,
    updateCustomer,
    editCustomer,
    deleteCustomer,
}