const db = require('../../db');

const loadList = async (req, res) => {
    const { q, page, limit, sort, order, customerId } = req.query;

    const sql = db.table('operation')
        
    if (customerId) {
        sql.where('customerId', customerId)
    }

    const sqlTotalCount = sql.clone();

    const operationList = await sql.select()
    const totalCount = await sqlTotalCount.count('id')
  
    res.send({ items: operationList, totalCount: totalCount[0]['count(`id`)'] });
}

// const loadList = async (req, res) => {
//     const { q, page, limit, sort, order, customerId } = req.query;

//     const sql = db.table('operation')
//         .join('customer', 'customer.id', 'operation.customerId')
        
//     // if (customerId) {
//     //     sql.where('customer.id', customerId)
//     // }

//     const sqlTotalCount = sql.clone();

//     const operationList = await sql.select(['operation.id', 'customer.name', 'operation.bankAccountId', 'operation.value'])
//     const totalCount = await sqlTotalCount.count()
//     console.log("🚀 ~ file: operationService.js ~ line 18 ~ loadList ~ totalCount", totalCount)

//     res.send({ items: operationList, totalCount: totalCount[0]['count(*)'] });
// }

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