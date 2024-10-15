
const express = require('express');
const path = require('path');

const app = express();
 const publicpath = path.join(__dirname,'Html');

 app.get('/',(req, res)=>{
    res.sendFile(path.join(`${publicpath}/index.html`))
 })
 app.get('/about',(req, res)=>{
    res.sendFile(path.join(`${publicpath}/about.html`))
 })
 app.get('/eduction',(req, res)=>{
    res.sendFile(path.join(`${publicpath}/eduction.html`))

 })
 app.get('/contect',(req, res)=>{
    res.sendFile(path.join(`${publicpath}/contect.html`))
 })
 app.get('*',(req, res)=>{
    res.sendFile(path.join(`${publicpath}/error.html`))
 })
 app.listen(4000);