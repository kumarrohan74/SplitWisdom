//header files
const mongoose = require('mongoose');
const Expense = require('./expense');

const userSchema = new mongoose.Schema({
    name: String,
    created_at: {type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
async function createUser(data)
{
    const user = new User({
        name: data.name,
    });
    const result = await user.save();
    return result;
 
}
async function getUser()
{
    const user = await User.find();
    return user;
}

async function calculateExpense(data)
{
    var final_result = [];
    if(data.name)
    {
        const users = await User.find();
        const userLength = users.length;
        var perHead;
        if(data.expense)
        {
            perHead = (data.expense)/userLength;
        }
        for (element of users) {
            if(element.name  !== data.name)
            {
                var obj = {
                    "payer":element.name,
                    "payee": data.name,
                    "amount": perHead
                }
                const insertExpense = await Expense.createExpense(obj);
                var userExpense = insertExpense.whoHasToPay+ " has to pay Rs"+insertExpense.amount+ " to "+ insertExpense.payTowhom;
                final_result.push(userExpense)
                
            }
        }
    }
    return final_result;
}



module.exports = { createUser, getUser, User, calculateExpense};
