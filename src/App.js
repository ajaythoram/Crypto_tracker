import React from 'react';
import './App.css';
import Homepage from './pages/Home';
import CoinPage from './pages/Coin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import Compare from './pages/Compare';
import WatchList from './pages/WatchList';


function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Homepage />} />
          <Route path='/dashboard' element ={<DashboardPage />} />
          <Route path='/coin/:id' element ={<CoinPage />} />
          <Route path='/compare' element = {<Compare />} />
        <Route path='/watchlist' element = {<WatchList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
