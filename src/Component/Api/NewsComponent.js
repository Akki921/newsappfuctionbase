import React, { useState, useEffect } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

function NewsComponent(props) {
  const [commitHistory, setcommitHistory] = useState([]);
  const [page, setpage] = useState(1);
  const [isLoading, setisLoading] = useState(true);
  const [totalResults, settotalResults] = useState(0);
  const [SearchText, setSearchText] = useState("");
  const [data, setdata] = useState([]);

  let updateComponent = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bab0b826a07d4a9b9a2cd1e759d10512&page=${page}&pageSize=${props.pageSize}`;
    setisLoading(true);
    let res = await fetch(url);
    let response = await res.json();
    setcommitHistory(response.articles);
    settotalResults(response.totalResults);

    setisLoading(false);

    document.title = `${capatalize(props.category)} --News `;
  };
  console.log(commitHistory);
  useEffect(() => {
    updateComponent();
  }, []);

  const capatalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const sorting = () => {
    commitHistory.reverse();
    console.log(commitHistory.reverse());
  };

  const Search = async () => {
    let url = ` https://newsapi.org/v2/top-headlines?q=${SearchText}&apiKey=bab0b826a07d4a9b9a2cd1e759d10512&page=${page}&pageSize=${props.pageSize}`;
    let res = await fetch(url);
    let response = await res.json();
    setdata(response.articles);
  };
  console.log(data);
  //infinite scroll bar
  let fetchMoreData = async () => {
    setpage(page + 1);
    //setisLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bab0b826a07d4a9b9a2cd1e759d10512&page=${page}&pageSize=${props.pageSize}`;
    let res = await fetch(url);
    let response = await res.json();
    setcommitHistory(commitHistory.concat(response.articles));
    settotalResults(response.totalResults);
  };

  console.log(commitHistory.length);
  console.log(page);
  console.log(totalResults);
  console.log(SearchText);
  return (
    <div>
      <div className="mb-5 ">
        <input
          className="form-control me-2 py-3 rounded-pill text-center "
          type="search"
          placeholder="Search here"
          aria-label="Search"
          value={SearchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          class="btn btn-outline-success btn-lg my-4 px-5 rounded-pill"
          type="submit"
          onClick={Search}
        >
          Search
        </button>
      </div>
      <h2 className="text text-center text-light">
        News-Top {capatalize(props.category)} Headlines
      </h2>
      {props.isLoading && <Spinner />}
      <InfiniteScroll
        dataLength={commitHistory.length}
        next={fetchMoreData}
        hasMore={commitHistory.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {SearchText
              ? !isLoading &&
                data.map((data, index) => (
                  <div className="col-sm-4 col-md-4 col-lg-4 my-5 " key={index}>
                    <Newsitems
                      title={data.title.slice(0, 40)}
                      desc={data.description}
                      img={data.urlToImage}
                      newsurl={data.url}
                      author={data.author}
                      publishedAt={data.publishedAt}
                    />
                  </div>
                ))
              : !isLoading &&
                commitHistory.map((data, index) => (
                  <div className="col-sm-4 col-md-4 col-lg-4 my-5 " key={index}>
                    <Newsitems
                      title={data.title.slice(0, 40)}
                      desc={data.description}
                      img={data.urlToImage}
                      newsurl={data.url}
                      author={data.author}
                      publishedAt={data.publishedAt}
                    />
                  </div>
                ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default NewsComponent;
