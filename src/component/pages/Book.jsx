/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */

import React, { Component } from 'react'

export class Book extends Component {
  state = {
    [
      {id='one'},
      {id='one'},
      {id='one'},
      {id='one'}
    ]
  }
  render() {
    return (
      <>
        <div>
          <div>
            <h2>one</h2>
            <img src='../image/1.jpg' alt='image1'/>
            <p>the frist book</p>
          </div>
          <div>
            <h2>two</h2>
            <img src='../image/1.jpg' alt='image1'/>
            <p>the frist book</p>
          </div>
          <div>
            <h2>three</h2>
            <img src='../image/1.jpg' alt='image1'/>
            <p>the frist book</p>
          </div>
          <div>
            <h2>four</h2>
            <img src='../image/1.jpg' alt='image1'/>
            <p>the frist book</p>
          </div>
        </div>
      </>
    )
  }
}

export default Book