const loadList = async (req, res) => {
    const operationList = await db.table('operation')
        .join('customer', 'operation.customerId', '=', 'customer.id')
        .select()

    // console.log('------------------->', customerList);
    
    res.send(operationList);
}