import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div className='container p-2 my-5'>
        <h1>DailyNews - Top Headlines</h1>
        <div className="cards grid md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 2xl:grid-cols-4"> 

        <Newsitem  title="My Title Here" description="My Description Here"/>
        <Newsitem  title="My Title Here" description="My Description Here"/>
        <Newsitem  title="My Title Here" description="My Description Here"/>
        <Newsitem  title="My Title Here" description="My Description Here"/>
        <Newsitem  title="My Title Here" description="My Description Here"/>
        <Newsitem  title="My Title Here" description="My Description Here"/>
        <Newsitem  title="My Title Here" description="My Description Here"/>
        <Newsitem  title="My Title Here" description="My Description Here"/>
        </div>

        
      </div>
    )
  }
}

export default News
