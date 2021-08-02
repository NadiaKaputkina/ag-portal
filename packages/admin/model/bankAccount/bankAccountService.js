const db = require('../../db');

const loadList = async (req, res) => {
    const bankAccountList = await db.select().table('bankAccount')
    res.send(bankAccountList);
}

const loadBankAccount = async (req, res) => {
    res.send();
}

const addBankAccount = async (req, res) => {
    res.send();
}

const editBankAccount = async (req, res) => {
    res.send();
}

const deleteBankAccount = async (req, res) => {
    res.send();
}

module.exports = {
    loadList,
    loadBankAccount,
    addBankAccount,
    editBankAccount,
    deleteBankAccount,
}