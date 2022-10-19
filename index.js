const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())
const categories = require('./data/categories.json');
app.get('/', (req, res) => {
    res.send("hello world express")
})
app.get("/news-category", (req, res) => {
    res.send(categories);
})
app.listen(port, () => {
    console.log(`the server is running in port ${port}`);
})