import React from 'react';
import Routes from './routes';
import Header from './components/Header';
import './main.css';

const App = () => (
  <div className="fillArea mainContainer">
    <Header />
    <Routes />
  </div>
);

export default App;
