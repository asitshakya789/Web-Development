const express = require('express');
const app = express();

// Middleware to check age
const reqAge = (req, res, next) => {
    if (!req.query.age) {
        return res.status(400).send({ error: 'Age is required' });
    } else if (req.query.age < 18) {
        return res.status(200).send({ message: "Successfully logged in to the home page" });
    } else {
        next();
    }
};

// Route for the root path
app.get('/', (req, res) => {
    res.send("Enter the age you want to log in");
});

// Route for the home path with age middleware
app.get('/home', reqAge, (req, res) => {
    res.send("Welcome to the home page");
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Your API is running on port ${port}`);
});