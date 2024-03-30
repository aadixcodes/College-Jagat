import React, { useState, useEffect } from "react";
import "../style/news_feed.scss";
import Navbar1 from '../components/navbar1'
import Footer from '../components/footer'

const NewsFeed = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/json_data_file/news_data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Navbar1 />
    <div className="news-feed">
      <div className="news-heading">
        <h1>NEWS FEED</h1>
      </div>
      <div className="table-container">
        <table className="news-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>News</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {newsData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td className="news-cell">{item.news}</td>
                <td>
                  <a href={item.link}>Read more</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default NewsFeed;
