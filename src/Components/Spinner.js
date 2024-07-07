import React, { Component } from 'react'
import loader from '../Assets/loader.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={loader} alt="loading..." className='mx-[50%] my-3' />
       </div>
    )
  }
}
