import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function NewsComponent() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  const url =
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=d978cccc386a44cc814119b436f4ea7d";

  async function fetchNews() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.articles);
    setNews(data.articles);
  }
  useEffect(() => {
    fetchNews();
  }, []);
  function changeHandler(e) {
    console.log(e.target.value);
    setQuery(e.target.value);
  }
  return (
    <div>
      <h1 className="text-center">News</h1>
      <div className="flex flex-col justify-center my-3 w-1/2 mx-auto">
        <input
          type="search"
          className="border p-2"
          placeholder="Search here.."
          value={query}
          onChange={changeHandler}
        />
      </div>
      <main className="flex flex-wrap justify-center gap-2">
        {news
          .filter((meriNews) => {
            return meriNews.title.toLowerCase().includes(query);
          })
          .map((meriNews) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={meriNews.urlToImage} />
                <Card.Body>
                  <Card.Title>{meriNews.title}</Card.Title>
                  <Card.Text>{meriNews.description}</Card.Text>
                  <a href={meriNews.url} target="_blank">
                    Details
                  </a>
                </Card.Body>
              </Card>
            );
          })}
      </main>
    </div>
  );
}
