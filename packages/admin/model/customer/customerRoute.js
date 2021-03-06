const express = require('express');
const { loadList, loadCustomer, updateCustomer, addCustomer, editCustomer, deleteCustomer } = require('./customerService');
const router = express.Router();

router.get('/list', loadList);
router.get('/:id', loadCustomer);
router.post('/:id/update', updateCustomer);

router.post('/new', addCustomer);
router.put('/:id', editCustomer);
router.post('/:id/delete', deleteCustomer);

module.exports = router;
