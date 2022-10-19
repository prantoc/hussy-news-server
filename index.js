const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())
const categories = require('./data/categories.json');
const news = require('./data/news.json')
app.get('/', (req, res) => {
    res.send("hello world express")
})
app.get("/news-category", (req, res) => {
    res.send(categories);
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const cats = news.filter(n => n.category_id === id);
    res.send(cats)
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(news => news._id === id)
    res.send(selectedNews)
})




app.listen(port, () => {
    console.log(`the server is running in port ${port}`);
})