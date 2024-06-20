import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
  article = []; //constuctor throgh give data in the array

  static defaultProps = {
    country: "in",
    pageSize: 12, 
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number 
  }


  constructor() {
    super();
    console.log("I am from news components");
    this.state = {
      article: this.article, // article : [],// pass to article = [] varaible
      loading: false,
      page: 1,
    };
  }

  //Fetching the Api and pass data and update data throgh this.setState
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=479ac70180ff4770a28cd9a4c23752c6&page=1&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    }); // pass to constuctor in article : this.article
  }

  handlePrevClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=479ac70180ff4770a28cd9a4c23752c6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      article: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    console.log("next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)))
       {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=479ac70180ff4770a28cd9a4c23752c6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        article: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container p-2 my-5 2xl:w-[80%] 2xl:m-auto">
        <h1 className="text-3xl font-bold">DailyNews - Top Headlines</h1>

        {/* when loading is true than show otherwise not show */}
        {this.state.loading && <Spinner />}
        {/* <Spinner /> */}
        

        <div className="cards grid md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 2xl:grid-cols-4">
          {!this.state.loading && this.state.article.map((elem) => {
            //show all description on the web page
            return (
              <Newsitem
                key={elem.url}
                title={elem.title ? elem.title : " "}
                description={elem.description ? elem.description : " "}
                imageUrl={
                  !elem.urlToImage
                    ? "https://wallpapers.com/images/featured/newspaper-aesthetic-6zy4tj738voyh9fx.jpg"
                    : elem.urlToImage
                }
                newsUrl={elem.url}
              />
            );

            //u can show the limited data on the web page with the help of slice() method
            //  return <Newsitem key={elem.url}  title={elem.title ?elem.title.slice(0, 30): ""} description={elem.description ?elem.description.slice(0, 80): ""} imageUrl={!elem.urlToImage?"https://wallpapers.com/images/featured/newspaper-aesthetic-6zy4tj738voyh9fx.jpg":elem.urlToImage} newsUrl={elem.url}/>
          })}
        </div>

        <div className="flex justify-between items-center w-[80%] m-auto mt-10">
          <button
            disabled={this.state.page <= 1}
            className="flex items-center py-2 px-3  font-medium select-none border  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:cursor-not-allowed disabled:bg-slate-600"
            onClick={this.handlePrevClick}
          >
            {" "}
            ⪻ Previous{" "}
          </button>

          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="flex items-center py-2 px-3  font-medium select-none border text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:cursor-not-allowed  disabled:bg-slate-600"
            onClick={this.handleNextClick}
          >
            {" "}
            Next ⪼
          </button>
        </div>
      </div>
    );
  }
}

export default News;
