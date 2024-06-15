import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  article = [] //constuctor throgh give data in the arra
  
  constructor(){
    super();
    console.log("I am from news components")
    this.state =  { 
      article : this.article, // article : [],// pass to article = [] varaible
      loading : false
    }
  }

  //Fetching the Api and pass data throgh this.setState
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=479ac70180ff4770a28cd9a4c23752c6"
    let data  = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({ article: parsedData.articles })  // pass to constuctor in article : this.article
  }
  render() {
    return (
      <div className='container p-2 my-5'>
        <h1 className="text-3xl font-bold">DailyNews - Top Headlines</h1>
        <div className="cards grid md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 2xl:grid-cols-4"> 
        {this.state.article.map((elem)=>{
          //show all ddescription on the web page
          return   <Newsitem key={elem.url}  title={elem.title ? elem.title : " "} description={elem.description ? elem.description: " "} imageUrl={!elem.urlToImage?"https://wallpapers.com/images/featured/newspaper-aesthetic-6zy4tj738voyh9fx.jpg":elem.urlToImage} newsUrl={elem.url}/>

          //u can show the limited data on the web page with the help of slice() method
        //  return <Newsitem key={elem.url}  title={elem.title ?elem.title.slice(0, 30): ""} description={elem.description ?elem.description.slice(0, 80): ""} imageUrl={!elem.urlToImage?"https://wallpapers.com/images/featured/newspaper-aesthetic-6zy4tj738voyh9fx.jpg":elem.urlToImage} newsUrl={elem.url}/>
          
        })}
        
        </div>
      </div>
    )
  }
}

export default News
