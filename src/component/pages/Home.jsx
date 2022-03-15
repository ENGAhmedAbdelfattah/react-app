/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */
import React, { Component } from 'react'
import Book from './Book'

export class Home extends Component {
  render() {
    return (
      <>
        <h1 className='all-book'>All Books</h1>
        <Book/>
      </>
    )
  }
}

export default Home