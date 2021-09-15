# SplitWisdom

1. Added four users User1,user2,User3,User4 using mongoose.
2. Api for adding users is http://localhost:5001/adduser with request body as {
    "name": "User1"
}
3. Get User Api is http://localhost:5001/getuser
4. All the data are getting saved in mongo atlas cluster with connection string as 'mongodb+srv://kumar_rohan:kumarrohan74@cluster0.myb1i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
5. For calculating the expense, w ehave to pass request as {
    "name": "User1",
    "expense": 1000
} with api http://localhost:5001/calculateExpense which will create Expense collection and adds the entry where it tells that which user has to pay how much amount to which user.
6. Have used postman for flowing of data.
