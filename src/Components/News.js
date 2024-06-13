import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div>
        <h1>this is news Components</h1>
        <Newsitem />
        <Newsitem />
        <Newsitem />
        <Newsitem />
        <Newsitem />
        <Newsitem />


      </div>
    )
  }
}

export default News
