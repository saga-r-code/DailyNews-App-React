import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ country = "in", pageSize = 12, category = "general", apikey, setProgress }) => {
  const [articles, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Fetching the API and updating state
  const updateNews = async () => {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    try {
      const data = await fetch(url);
      setProgress(40);
      const parsedData = await data.json();
      setProgress(70);
      console.log(parsedData);

      setArticle(parsedData.articles || []);
      setTotalResults(parsedData.totalResults || 0);
    } catch (error) {
      console.error("Error fetching news data:", error);
    } finally {
      setLoading(false);
      setProgress(100);
    }
  };

  useEffect(() => {
    document.title = `NewsHub - ${capitalizeFirstLetter(category)}`
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country, category, apikey, page, pageSize]);

  const fetchMoreNews = async () => {
    setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
   
    try {
      const data = await fetch(url);
      const parsedData = await data.json();
      setArticle([...articles, ...(parsedData.articles || [])]);
      setTotalResults(parsedData.totalResults || 0);
    } catch (error) {
      console.error("Error fetching more news data:", error);
    }
  };

  return (
    <>
      <div className="2xl:w-[80%] 2xl:m-auto">
        <h1 className="text-3xl font-bold p-2 mt-5 mx-5">
          NewsHub - Top {capitalizeFirstLetter(category)} Headlines
        </h1>
      </div>

      {/* Show spinner when loading */}
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreNews}
        hasMore={page <= Math.ceil(totalResults / pageSize)}
        loader={<Spinner />}
      >
        <div className="container p-2 my-3 sm:flex sm:justify-center sm:items-center 2xl:w-[80%] 2xl:m-auto">
          <div className="cards grid md:grid-cols-2 md:gap-x-3 lg:grid-cols-3 2xl:grid-cols-4">
            {articles.map((elem) => (
              <Newsitem
                key={elem.url}
                title={elem.title ? elem.title : " "}
                description={elem.description ? elem.description : " "}
                imageUrl={
                  !elem.urlToImage
                    ? "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_960_720.jpg"
                    : elem.urlToImage
                }
                newsUrl={elem.url}
                author={!elem.author ? "Unknown" : elem.author}
                date={elem.publishedAt}
                source={elem.source.name}
              />
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apikey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
