import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("I am from news components");
    this.state = {
      article: [], // article : [],// pass to article = [] varaible
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  //Fetching the Api and pass data and update data throgh this.setState
  async updatenews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=479ac70180ff4770a28cd9a4c23752c6&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });

    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);

    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    }); // pass to constuctor in article : this.article
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updatenews();
  }

  fatchMore = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=479ac70180ff4770a28cd9a4c23752c6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      article: this.state.article.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
        <div className=" 2xl:w-[80%] 2xl:m-auto">
          <h1 className="text-3xl font-bold  p-2 mt-5 mx-5 ">
            DailyNews - Top Headlines
          </h1>
        </div>

        {/* when loading is true than show otherwise not show */}
        {this.state.loading && <Spinner />}
        {/* <Spinner /> */}

        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fatchMore}
          // hasMore={this.state.article.length !== this.state.totalResults}
          hasMore={
            this.state.page <=
            Math.ceil(this.state.totalResults / this.props.pageSize)
          }
          loader={<Spinner />}
        >
          <div className="container p-2 my-3 2xl:w-[80%] 2xl:m-auto">
            <div className="cards grid md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 2xl:grid-cols-4">
              {this.state.article.map((elem) => {
                //show all description on the web page
                return (
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
                );

                //u can show the limited data on the web page with the help of slice() method
                //  return <Newsitem  title={elem.title ?elem.title.slice(0, 30): ""}/>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
