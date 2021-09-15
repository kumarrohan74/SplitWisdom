//required files

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const addUser = require('./users');

//connection to database
mongoose.connect('mongodb+srv://kumar_rohan:kumarrohan74@cluster0.myb1i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => console.log('Connected'))
    .catch(err => console.log(err));

const app = express();
const router = express.Router();

app.use(cors());
//assigning port no.
const port = process.env.PORT || 5001;
app.listen(port,console.log(`server started on ${port}`));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(router);

var UserOrderData = [];

/*  ---------------------------------------------------User------------------------------------------*/

router.post('/adduser',(req,res) => { 
    console.log(req.body)
    if(res.statusCode === 200)
            {
                addUser.createUser(req.body).then(result => res.json(result)).catch(err => res.json(err))
            }
});

router.get('/getuser',(req,res) => {
    if(res.statusCode === 200)
            {
                addUser.getUser().then(result => res.json(result)).catch(err => res.json(err))
            }
});

/*  ---------------------------------------------------Expense------------------------------------------*/

router.post('/calculateExpense',(req,res) => {
    if(res.statusCode === 200)
            {
                addUser.calculateExpense(req.body).then(result => res.json(result)).catch(err => res.json(err))
            }
});






















