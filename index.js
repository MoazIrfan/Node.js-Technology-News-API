const PORT = 8000;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();

const techNews = [
  {
    name: "guardian",
    address: "https://www.theguardian.com/technology",
    base: "",
  },
  {
    name: "telegraph",
    address: "https://www.telegraph.co.uk/technology",
    base: "https://www.telegraph.co.uk",
  },
  {
    name: "nyt",
    address: "https://www.nytimes.com/international/section/technology",
    base: "",
  },
  {
    name: "bbc",
    address: "https://www.bbc.co.uk/news/technology",
    base: "https://www.bbc.co.uk",
  },
];

const articles = [];

techNews.forEach((newspaper) => {
  axios.get(newspaper.address).then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    $('a:contains("tech"), a:contains("science")', html).each(function () {
      const title = $(this).text();
      const url = $(this).attr("href");

      articles.push({
        title,
        url: newspaper.base + url,
        source: newspaper.name,
      });
    });
  });
});

app.get("/", (req, res) => {
  res.json("Technology News API");
});

app.get("/news", (req, res) => {
  res.json(articles);
});

app.get("/news/:newsId", (req, res) => {
  const newsId = req.params.newsId;
  res.json(articles.filter(({ source }) => source === newsId));
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
