const db = require('../../db');

const loadList = async (req, res) => {
    const customerList = await db.select().table('customer')
    
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
    res.send();
}

module.exports = {
    loadList,
    loadCustomer,
    addCustomer,
    updateCustomer,
    editCustomer,
    deleteCustomer,
}