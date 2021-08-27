const { query } = require('express');
const db = require('../../db');

const loadList = async (req, res) => {
    const { 
        q, 
        page = 1, 
        limit = 5, 
        customerId, 
        isEnable = 'enabled', 
        orderBy 
    } = req.query;

    const sql = db.table('customer')
    
    if (q) {
        sql.where('name', 'like', `%${q}%`)
    }
    if (customerId) {
        sql.where('id', customerId)
    }
    
    if (!customerId) {
        switch (isEnable) {
            case 'disabled': 
                sql.where('isEnable', 0)
                break
            case 'enabled':
                sql.where('isEnable', 1)
                break
            default: 
                break
        }
    }
    const sqlTotalCount = sql.clone();

    if (limit) {
        sql.limit(limit)
    }
    if (page > 1) {
        sql.offset((page - 1) * limit)
    }
    
    if (orderBy) {
        const orderByObj = JSON.parse(orderBy)
        sql.orderBy(orderByObj)
    }

    const customerList = await sql.select()
    const totalCount = await sqlTotalCount.count('id')

    res.send({ items: customerList, totalCount: totalCount[0]['count(`id`)'] });
};

const loadCustomersLastNameList = async (req, res) => {
    const sql = db.table('customer')
    // const limit = 20

    // if (limit) {
    //     sql.limit(limit)
    // }

    const customerLastNameList = await sql.select('id', 'lastName')

    res.send(customerLastNameList);
};

const loadCustomer = async (req, res) => {
    const id = req.params.id;
    
    const customer = await db.table('customer')
        .where({
            id,
        })
        .first()

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
    loadCustomersLastNameList,
}