const express = require('express');
const { loadList, loadCustomer, addCustomer, editCustomer, deleteCustomer } = require('./customerService');
const router = express.Router();

router.get('/list', loadList);
router.get('/:id', loadCustomer);
router.post('/new', addCustomer);
router.put('/:id', editCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router;
