const express = require('express');
const { loadList, loadOperation, addOperation, editOperation, deleteOperation } = require('./operationService');
const router = express.Router();

router.get('/list', loadList);
router.get('/:id', loadOperation);
router.post('/new', addOperation);
router.put('/:id', editOperation);
router.delete('/:id', deleteOperation);

module.exports = router;