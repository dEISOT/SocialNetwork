import React from 'react';
import logo from './logo.svg';
import classes from "./App.module.css";
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export function App() {

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <div className={classes.left_right}>
          <Navbar />
          <div className={classes.appContent}>
          <Routes>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/dialogs/*" element={<Dialogs/>}/>
          </Routes>    
          </div>
        </div>
      </div>
    </BrowserRouter>
    
  );
}