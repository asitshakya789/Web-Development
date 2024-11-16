const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, 'public');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(publicPath));

// Define the port
const port = 4000;

// Profile route
app.get('/profile', (req, res) => {
    const data = {
        name: 'Asit Kumar',
        age: 20,
        city: 'Noida',
        email: 'asit@example.com',
        hobbies: ['reading', 'painting', 'cooking']
    };
    res.render('profile', { data }); // Pass data to the view
});

app.get('/login',(_,resp)=>{
    resp.render("login");
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});