const express = require('express');
const path = require('path');
const app = express();
const publicpath = path.join(__dirname, 'public');
app.set('view engine', 'ejs');
const port = 4000;
app.get('/profile', (req, res) => {
    const data = {
        name: 'Asit kumar',
        age: 20,
        city: 'noida',
        email: 'asit@example.com',
        hobbies: ['reading', 'painting', 'cooking']
    };
    res.render('${publicPath}/views/profile');
})
app.get('', (_, res) => {
    const data = {
        name: 'Asit kumar',
        age: 20,
        city: 'noida',
        email: 'asit@example.com',
        hobbies: ['reading', 'painting', 'cooking']
    };
    res.render('index.ejs');
})
app.listen(port);

