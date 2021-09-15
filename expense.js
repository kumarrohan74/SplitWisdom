//header files
const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    whoHasToPay: String,
    payTowhom: String,
    amount: Number,
    created_at: {type: Date, default: Date.now }
});

const Expense = mongoose.model('Expense', expenseSchema);

async function createExpense(data)
{
    const expense = new Expense({
        whoHasToPay: data.payer,
        payTowhom: data.payee,
        amount: data.amount,
    });
    const result = await expense.save();
    return result;
 
}
async function getExpense()
{
    const expense = await Expense.find();
    return expense;
}

module.exports = { createExpense, getExpense, Expense};
