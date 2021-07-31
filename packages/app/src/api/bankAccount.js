export const loadBankAccountList = () => {
    return fetch('http://localhost:5000/bankAccount/list')
}