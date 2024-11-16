const express = require('express');
const app = express();

const reqFilter = (req, res, next) => {
    // Check if the age query parameter is provided
    if (!req.query.age) {
        return res.send("Please provide age");
    } 
    // Check if the age is greater than 18
    else if (req.query.age < 18) {
        return res.send("You can't access the page");
    } 
    // If age is less than or equal to 18, proceed to the next middleware
    else {
        next();
    }
};

// Use the reqFilter middleware
app.use(reqFilter);

app.get('/', (req, res) => {
    res.send('Welcome to home page');
});

app.get('/user', (req, res) => {
    res.send('Welcome to user page');
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});