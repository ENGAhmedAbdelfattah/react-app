/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */
import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';
import Home from './pages/Home';
import MyList from './pages/MyList';
import Instractions from './pages/Instructions';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Search from './pages/Search';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <>
        <Nav />
        <Footer />
          <Routes>
            <Route path='/' element={<Navigate to="/Home" />} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/MyList' element={<MyList/>} />
            <Route path='/Instractions' element={< Instractions />} />
            <Route path='/SignUp' element={<SignUp/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Search' element={<Search/>} />
          </Routes>
      </>
    );
  }
}
 
export default App;
