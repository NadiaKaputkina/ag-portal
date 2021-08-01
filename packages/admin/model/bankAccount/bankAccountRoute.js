const express = require('express');
const { loadList, loadBankAccount, addBankAccount, editBankAccount, deleteBankAccount,  } = require('./bankAccountService');
const router = express.Router();

router.get('/list', loadList);
router.get('/:id', loadBankAccount);
router.post('/new', addBankAccount);
router.put('/:id', editBankAccount);
router.delete('/:id', deleteBankAccount);

module.exports = router;
