const { query } = require('express');
const db = require('../../db');

const loadList = async (req, res) => {
    const { q, page, limit, customerId, isEnable, orderBy } = req.query;

    const sql = db.table('customer')
    // console.log('QUERY -> ', req.query);

    if (q) {
        sql.where('name', 'like', `%${q}%`)
    }

    switch (isEnable) {
        case 'disabled': 
            sql.where('isEnable', 0)
            break
        case 'enabled':
        case undefined: 
            sql.where('isEnable', 1)
            break
        case 'all': 
            break
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