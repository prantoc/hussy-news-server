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
    if (id === "08") {
        res.send(news)
    } else {
        const cat_news = news.filter(n => n.category_id === id);
        res.send(cat_news)
    }
})
app.get('/all-news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(news => news._id === id)
    res.send(selectedNews)
})
// https://openapi.programming-hero.com/api/phones?search=${search ? search : 'apple'}`;
app.get('/search/:key', (req, res) => {
    const searchQuery = req.params.key;
    if (searchQuery != null) {
        const getData = news.filter(news => news.title.toLowerCase().includes(searchQuery.toLowerCase()) || news.details.toLowerCase().includes(searchQuery.toLowerCase()))
        res.send(getData)
    } else {
        res.end();
    }
});


app.listen(port, () => {
    console.log(`the server is running in port ${port}`);
})